angular.module('ideTransport', [])
    .provider('transportApi', function TransportApiProvider() {
        this.transportServiceUrl = '/services/v4/transport';
        this.$get = ['$http', '$window', function transportApiFactory($http, $window) {

            let exportProject = function (workspace, projectName) {
                if (!workspace) throw Error("Transport API: You must provide a workspace name");
                if (!projectName) throw Error("Transport API: You must provide a project name");
                let url = new UriBuilder().path(this.transportServiceUrl.split('/')).path('project').path(workspace).path(projectName).build();
                $window.open(url, '_blank');
            }.bind(this);

            let getProjectImportUrl = function () {
                return new UriBuilder().path(this.transportServiceUrl.split('/')).path('project').build();
            }.bind(this);

            let getZipImportUrl = function () {
                return new UriBuilder().path(this.transportServiceUrl.split('/')).path('zipimport').build();
            }.bind(this);

            let getSnapshotUrl = function () {
                return new UriBuilder().path(this.transportServiceUrl.split('/')).path('snapshot').build();
            }.bind(this);

            let exportRepository = function () {
                let url = new UriBuilder().path(this.transportServiceUrl.split('/')).path('snapshot').build();
                $window.open(url, '_blank');
            }.bind(this);

            return {
                exportProject: exportProject,
                getProjectImportUrl: getProjectImportUrl,
                getZipImportUrl: getZipImportUrl,
                getSnapshotUrl: getSnapshotUrl,
                exportRepository: exportRepository,
            };
        }];
    });