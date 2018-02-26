import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { arrayHelper } from '../../../../../../core/helper-classes/array.helper';
import { getOrgRoles, IOrgUserRole } from '../../../../../../features/cloud-foundry/cf.helpers';
import { RemoveUserPermission } from '../../../../../../store/actions/users.actions';
import { AppState } from '../../../../../../store/app-state';
import { APIResource } from '../../../../../../store/types/api.types';
import { CfUser, IUserPermissionInOrg, UserSchema } from '../../../../../../store/types/user.types';
import { CfUserService } from '../../../../../data-services/cf-user.service';
import { EntityMonitor } from '../../../../../monitors/entity-monitor';
import { AppChip } from '../../../../chips/chips.component';

interface ICellSpacePermissionList extends IOrgUserRole {
  busy: Observable<boolean>;
  spaceName: string;
  spaceId: string;
}

interface ICellPermissionUpdates {
  [key: string]: Observable<boolean>;
}

@Component({
  selector: 'app-cf-space-permission-cell',
  templateUrl: './cf-space-permission-cell.component.html',
  styleUrls: ['./cf-space-permission-cell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CfSpacePermissionCellComponent {
  @Input('row')
  set row(row: APIResource<CfUser>) {
    // this.setChipConfig(row);
    // this.guid = row.metadata.guid;
  }
  public chipsConfig: AppChip<ICellSpacePermissionList>[];
  private guid: string;
  constructor(
    private store: Store<AppState>,
    private cfUserService: CfUserService
  ) { }

  private setChipConfig(row: APIResource<CfUser>) {
    const userRoles = this.cfUserService.getSpaceRolesFromUser(row.entity);
    const userOrgPermInfo = arrayHelper.flatten<ICellSpacePermissionList>(
      userRoles.map(orgPerms => this.getOrgPermissions(orgPerms, row))
    );
    this.chipsConfig = this.getChipConfig(userOrgPermInfo);
  }

  private getChipConfig(cellPermissionList: ICellSpacePermissionList[]) {
    return cellPermissionList.map(perm => {
      const chipConfig = new AppChip<ICellSpacePermissionList>();
      chipConfig.key = perm;
      chipConfig.value = `${perm.orgName}: ${perm.key}`;
      chipConfig.busy = perm.busy;
      chipConfig.clearAction = chip => {
        const permission = chip.key;
        this.removePermission(permission);
      };
      chipConfig.hideClearButton = perm.key === 'users';
      return chipConfig;
    });
  }

  private getOrgPermissions(orgPerms: IUserPermissionInOrg, row: APIResource<CfUser>) {
    return getOrgRoles(orgPerms.permissions).map(perm => {
      const updatingKey = RemoveUserPermission.generateUpdatingKey(
        orgPerms.orgGuid,
        perm.key,
        row.metadata.guid
      );
      return {
        ...perm,
        orgName: orgPerms.orgName,
        orgId: orgPerms.orgGuid,
        busy: new EntityMonitor(
          this.store,
          row.metadata.guid,
          UserSchema.key,
          UserSchema
        ).getUpdatingSection(updatingKey).pipe(
          map(update => update.busy)
        )
      };
    });
  }

  private getSpacePermissions(orgPerms: IUserPermissionInOrg, row: APIResource<CfUser>) {
    return getOrgRoles(orgPerms.permissions).map(perm => {
      const updatingKey = RemoveUserPermission.generateUpdatingKey(
        orgPerms.orgGuid,
        perm.key,
        row.metadata.guid
      );
      return {
        ...perm,
        orgName: orgPerms.orgName,
        orgId: orgPerms.orgGuid,
        busy: new EntityMonitor(
          this.store,
          row.metadata.guid,
          UserSchema.key,
          UserSchema
        ).getUpdatingSection(updatingKey).pipe(
          map(update => update.busy)
        )
      };
    });
  }

  public removePermission(cellPermission: ICellSpacePermissionList) {
    this.store.dispatch(new RemoveUserPermission(
      this.guid,
      cellPermission.spaceId,
      cellPermission.key
    ));
  }
}