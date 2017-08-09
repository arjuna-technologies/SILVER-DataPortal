import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{
    private dataServiceHostPort: string;

    public listDataDefLoaderBaseURL: string;
    public getDataDefLoaderBaseURL: string;
    public getDataLoaderBaseURL: string;

    constructor()
    {
        if (environment.standalone)
        {
            this.dataServiceHostPort = '';

            this.listDataSourceDefLoaderBaseURL = 'assets/datasources';
            this.getDataSourceDefLoaderBaseURL  = 'assets/datasource';
            this.getDataLoaderBaseURL           = 'assets/data?sessionid=Stuart&datasourceid=0001';
        }
        else
        {
            this.dataServiceHostPort = 'dataservice.silver.arjuna.com';

            this.listDataSourceDefLoaderBaseURL = 'http://' + this.dataServiceHostPort + '/consentengine/ws/datasources';
            this.getDataSourceDefLoaderBaseURL  = 'http://' + this.dataServiceHostPort + '/consentengine/ws/datasource';
            this.getDataLoaderBaseURL           = 'http://' + this.dataServiceHostPort + '/consentengine/ws/data?sessionid=Stuart&datasourceid=0001';
        }
    }
}
