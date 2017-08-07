import { Injectable } from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoaderService
{
//    private loadBaseURL = 'assets/arrest.json';
    private loadBaseURL = 'http://localhost:8080/consentengine/ws/datasource/data?sessionid=Stuart&datasourceid=0001';

    constructor(private http: Http)
    {
    }

    public getData(): Promise<any>
    {
        return this.http.get(this.loadBaseURL)
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
