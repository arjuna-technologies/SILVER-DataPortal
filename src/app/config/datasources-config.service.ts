import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'

@Injectable()
export class DatasourcesConfigService
{
    private dataServiceProtocol: string;
    private dataServiceHostPort: string;

    public listDataServiceDefLoaderBaseURL: string;
    public getDataServiceDefLoaderBaseURL: string;
    public getDataLoaderBaseURL: string;

    constructor()
    {
        this.dataServiceProtocol = 'http://';

        if (environment.standalone)
        {
            this.dataServiceHostPort = '';

            this.listDataServiceDefLoaderBaseURL = 'assets/dataservices';
            this.getDataServiceDefLoaderBaseURL  = 'assets/dataservice';
            this.getDataLoaderBaseURL            = 'assets/data';
        }
        else
        {
            this.dataServiceHostPort = 'dataservice.silver.arjuna.com';

            this.listDataServiceDefLoaderBaseURL = this.dataServiceProtocol + this.dataServiceHostPort + '/consentengine/ws/dataservices';
            this.getDataServiceDefLoaderBaseURL  = this.dataServiceProtocol + this.dataServiceHostPort + '/consentengine/ws/dataservice';
            this.getDataLoaderBaseURL            = this.dataServiceProtocol + this.dataServiceHostPort + '/consentengine/ws/datasources/data';
        }
    }
}
