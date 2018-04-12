/* DO NOT EDIT: This code has been generated by the cf-dotnet-sdk-builder */

(function () {
  'use strict';

  angular
    .module('cloud-foundry.api')
    .run(registerApi);

  function registerApi($http, apiManager) {
    apiManager.register('cloud-foundry.api.Organizations', new OrganizationsApi($http));
  }

  function OrganizationsApi($http) {
    this.$http = $http;
  }

  /* eslint-disable camelcase */
  angular.extend(OrganizationsApi.prototype, {

    /*
    * Associate Auditor with the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_auditor_with_the_organization.html
    */
    AssociateAuditorWithOrganization: function (guid, auditor_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/auditors/' + auditor_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Auditor with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_auditor_with_the_organization_by_username.html
    */
    AssociateAuditorWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/auditors';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Billing Manager with the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_billing_manager_with_the_organization.html
    */
    AssociateBillingManagerWithOrganization: function (guid, billing_manager_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/billing_managers/' + billing_manager_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Billing Manager with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_billing_manager_with_the_organization_by_username.html
    */
    AssociateBillingManagerWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/billing_managers';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Manager with the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_manager_with_the_organization.html
    */
    AssociateManagerWithOrganization: function (guid, manager_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/managers/' + manager_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Manager with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_manager_with_the_organization_by_username.html
    */
    AssociateManagerWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/managers';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate Private Domain with the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_private_domain_with_the_organization.html
    */
    AssociatePrivateDomainWithOrganization: function (guid, private_domain_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/private_domains/' + private_domain_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate User with the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_user_with_the_organization.html
    */
    AssociateUserWithOrganization: function (guid, user_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/users/' + user_guid + '';
      config.method = 'PUT';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Associate User with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/associate_user_with_the_organization_by_username.html
    */
    AssociateUserWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/users';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Creating an Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/creating_an_organization.html
    */
    CreateOrganization: function (value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations';
      config.method = 'POST';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Delete a Particular Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/delete_a_particular_organization.html
    */
    DeleteOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Get Organization summary
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/get_organization_summary.html
    */
    GetOrganizationSummary: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/summary';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Auditors for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_auditors_for_the_organization.html
    */
    ListAllAuditorsForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/auditors';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Billing Managers for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_billing_managers_for_the_organization.html
    */
    ListAllBillingManagersForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/billing_managers';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Domains for the Organization (deprecated)
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_domains_for_the_organization_(deprecated).html
    */
    ListAllDomainsForOrganizationDeprecated: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/domains';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Managers for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_managers_for_the_organization.html
    */
    ListAllManagersForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/managers';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Organizations
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_organizations.html
    */
    ListAllOrganizations: function (params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Private Domains for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_private_domains_for_the_organization.html
    */
    ListAllPrivateDomainsForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/private_domains';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Services for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_services_for_the_organization.html
    */
    ListAllServicesForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/services';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Space Quota Definitions for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_space_quota_definitions_for_the_organization.html
    */
    ListAllSpaceQuotaDefinitionsForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/space_quota_definitions';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Spaces for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_spaces_for_the_organization.html
    */
    ListAllSpacesForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/spaces';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * List all Users for the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/list_all_users_for_the_organization.html
    */
    ListAllUsersForOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/users';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Auditor from the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_auditor_from_the_organization.html
    */
    RemoveAuditorFromOrganization: function (guid, auditor_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/auditors/' + auditor_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Auditor with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_auditor_with_the_organization_by_username.html
    */
    RemoveAuditorWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/auditors';
      config.method = 'DELETE';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Billing Manager from the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_billing_manager_from_the_organization.html
    */
    RemoveBillingManagerFromOrganization: function (guid, billing_manager_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/billing_managers/' + billing_manager_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Billing Manager with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_billing_manager_with_the_organization_by_username.html
    */
    RemoveBillingManagerWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/billing_managers';
      config.method = 'DELETE';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Manager from the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_manager_from_the_organization.html
    */
    RemoveManagerFromOrganization: function (guid, manager_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/managers/' + manager_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Manager with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_manager_with_the_organization_by_username.html
    */
    RemoveManagerWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/managers';
      config.method = 'DELETE';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove Private Domain from the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_private_domain_from_the_organization.html
    */
    RemovePrivateDomainFromOrganization: function (guid, private_domain_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/private_domains/' + private_domain_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove User from the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_user_from_the_organization.html
    */
    RemoveUserFromOrganization: function (guid, user_guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/users/' + user_guid + '';
      config.method = 'DELETE';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Remove User with the Organization by Username
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/remove_user_with_the_organization_by_username.html
    */
    RemoveUserWithOrganizationByUsername: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/users';
      config.method = 'DELETE';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Retrieve a Particular Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/retrieve_a_particular_organization.html
    */
    RetrieveOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Retrieving organization instance usage
    * This endpoint returns a count of started app instances under an organization.
    * Note that crashing apps are included in this count.
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/retrieving_organization_instance_usage.html
    */
    RetrievingOrganizationInstanceUsage: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/instance_usage';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Retrieving organization memory usage
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/retrieving_organization_memory_usage.html
    */
    RetrievingOrganizationMemoryUsage: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/memory_usage';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Retrieving the roles of all Users in the Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/retrieving_the_roles_of_all_users_in_the_organization.html
    */
    RetrievingRolesOfAllUsersInOrganization: function (guid, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '/user_roles';
      config.method = 'GET';

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    },

    /*
    * Update an Organization
    * For detailed information, see online documentation at: http://apidocs.cloudfoundry.org/237/organizations/update_an_organization.html
    */
    UpdateOrganization: function (guid, value, params, httpConfigOptions) {
      var config = {};
      config.params = params;
      config.url = '/pp/v1/proxy/v2/organizations/' + guid + '';
      config.method = 'PUT';
      config.data = value;

      for (var option in httpConfigOptions) {
        if (!httpConfigOptions.hasOwnProperty(option)) { continue; }
        config[option] = httpConfigOptions[option];
      }
      return this.$http(config);
    }

  });
  /* eslint-enable camelcase */

})();