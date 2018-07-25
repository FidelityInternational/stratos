import { InjectionToken } from '@angular/core';

/**
 * Optional customizations
 */
export interface CustomizationsMetadata {
  hasEula?: boolean;
  copyright?: string;
}

export const Customizations = new InjectionToken<CustomizationsMetadata>('Stratos customizations');
