import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component
({
    selector: 'silver-login-dialog',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit
{
    constructor(public dialogRef: MatDialogRef<LoginDialogComponent>)
    {
    }

    ngOnInit()
    {
    }
}
