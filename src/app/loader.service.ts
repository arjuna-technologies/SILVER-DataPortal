import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { DatasourcesConfigService } from './config/datasources-config.service';

@Injectable()
export class LoaderService
{
    constructor(private http: Http, private datasourcesConfigService: DatasourcesConfigService)
    {
    }

    public getData(dataSourceId: string, username: string, orginisation: string, purpose: string): Promise<any>
    {
        return this.http.get(this.datasourcesConfigService.getDataLoaderBaseURL + '?sessionid=' + username + '&datasourceid=' + dataSourceId + '&purpose=' + purpose + '&orginisationname=' + orginisation)
                   .toPromise()
                   .then((response) => Promise.resolve(this.getDataSuccessHandler(response)))
                   .catch((response) => Promise.resolve(this.getDataErrorHandler(response)));
    }

    private getDataSuccessHandler(response: Response): any
    {
        console.log('Success while loading Details');

        return response.json();
    }

    private getDataErrorHandler(error: Response | any): any
    {
        console.log('Error while loading Details: ' + (error.message || error));

        return [];
    }
}
