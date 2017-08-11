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
    public dataSource: string;
    public dataSources: any[];

    constructor(public dialog: MdDialog, private loaderService: LoaderService)
    {
        this.username    = '';
        this.dataSource  = '';
        this.dataSources = [];
        this.dataSources.push({ 'name': 'Arrests', 'value': '0000' });
        this.dataSources.push({ 'name': 'Attendance', 'value': '0001' });
        this.dataSources.push({ 'name': 'Domestic Abuse', 'value': '0002' });
        this.dataSources.push({ 'name': 'Exclusion', 'value': '0003' });
        this.dataSources.push({ 'name': 'DoWP Match', 'value': '0004' });
        this.dataSources.push({ 'name': 'Missing and Absent Children', 'value': '0005' });
        this.dataSources.push({ 'name': 'DoWP No Match', 'value': '0006' });
        this.dataSources.push({ 'name': 'Pupil', 'value': '0007' });
        this.dataSources.push({ 'name': 'School Term', 'value': '0008' });
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
                const row = [];
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
            const loginDialogRef = this.dialog.open(LoginDialogComponent);
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
