import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MdDialog } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { LoaderService } from './loader.service';

declare var google:any;

@Component
({
    selector:    'silver-root',
    templateUrl: './app.component.html',
    styleUrls:   [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit
{
    @ViewChild('table')
    private table;

    private chart;
    private data;
    private options;

    public username: string;

    constructor(public dialog: MdDialog, private loaderService: LoaderService)
    {
        this.username = '';
    }

    public ngAfterViewInit(): void
    {
        google.charts.load('current', { 'packages': [ 'table' ]});
        google.charts.setOnLoadCallback(() => { this.setupTable(); this.drawTable() });
    }

    public startDataLoad(): void
    {
         this.loaderService.getData()
             .then((obj) => Promise.resolve(this.dataLoadHandler(obj)))
             .catch((obj) => console.log('Failed data load'));
    }

    public dataLoadHandler(obj: any): void
    {
        this.data = new google.visualization.DataTable();
        if (obj.length > 0)
        {
            for (const key in obj[0])
                this.data.addColumn('string', key);

            for (const rowObj of obj)
            {
                let row = [];
                for (const key in obj[0])
                    row.push(rowObj[key]);

                this.data.addRow(row);
            }
        }
        this.drawTable();
    }

    public openLoginDialog(): void
    {
        if (this.username === '')
        {
            let loginDialogRef = this.dialog.open(LoginDialogComponent);
            loginDialogRef.afterClosed().subscribe(result => this.username = result);
        }
        else
            this.username = '';
    }

    private setupTable(): void
    {
        this.data = new google.visualization.DataTable();

        this.options =
        {
            alternatingRowStyle: true,
            page:                'enable',
            pageSize:            6,
            width:               '100%',
            height:              '100%'
        };

        this.chart = new google.visualization.Table(this.table.nativeElement);
    }

    private drawTable(): void
    {
        this.chart.draw(this.data, this.options);
    }
}
