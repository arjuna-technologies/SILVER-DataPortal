import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdCardModule } from '@angular/material';
import { MdSelectModule } from '@angular/material';
import { MdInputModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdDialogModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';

import { DatasourcesConfigService } from './config/datasources-config.service';
import { LoaderService } from './loader.service';

@NgModule
({
    declarations:
    [
        AppComponent,
        LoginDialogComponent
    ],
    imports:
    [
        BrowserModule,
        HttpModule,

        FlexLayoutModule,
        BrowserAnimationsModule,
        MdToolbarModule,
        MdCardModule,
        MdSelectModule,
        MdInputModule,
        MdButtonModule,
        MdIconModule,
        MdDialogModule
    ],
    entryComponents:
    [
        LoginDialogComponent
    ],
    providers:
    [
        DatasourcesConfigService,
        LoaderService
    ],
    bootstrap:
    [
        AppComponent
    ]
})
export class AppModule
{
}
