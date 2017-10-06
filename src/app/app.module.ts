import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatProgressBarModule } from '@angular/material';

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
        BrowserAnimationsModule,
        HttpModule,
        FormsModule,
        FlexLayoutModule,

        MatToolbarModule,
        MatCardModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
        MatProgressBarModule
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
