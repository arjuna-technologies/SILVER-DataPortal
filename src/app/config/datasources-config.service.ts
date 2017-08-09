import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{
    private dataServiceHostPort: string;

    public listDataServiceDefLoaderBaseURL: string;
    public getDataServiceDefLoaderBaseURL: string;
    public getDataLoaderBaseURL: string;

    constructor()
    {
        if (environment.standalone)
        {
            this.dataServiceHostPort = '';

            this.listDataServiceDefLoaderBaseURL = 'assets/dataservices';
            this.getDataServiceDefLoaderBaseURL  = 'assets/dataservice';
            this.getDataLoaderBaseURL            = 'assets/data?sessionid=Stuart&datasourceid=0001';
        }
        else
        {
            this.dataServiceHostPort = 'dataservice.silver.arjuna.com';

            this.listDataServiceDefLoaderBaseURL = 'http://' + this.dataServiceHostPort + '/consentengine/ws/dataservices';
            this.getDataServiceDefLoaderBaseURL  = 'http://' + this.dataServiceHostPort + '/consentengine/ws/dataservice';
            this.getDataLoaderBaseURL            = 'http://' + this.dataServiceHostPort + '/consentengine/ws/data?sessionid=Stuart&datasourceid=0001';
        }
    }
}
