import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, LoginFormModule } from './shared/components';
import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DxDataGridModule } from 'devextreme-angular';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { TimeSheetData } from "./pages/edit-timesheets/timesheet-data";
import { TimeSheetGridComponent } from './pages/edit-timesheets/timesheet-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSheetGridComponent
  ],
  imports: [
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    LoginFormModule,
    AppRoutingModule,
    HttpClientModule,
    DxDataGridModule,
    InMemoryWebApiModule.forRoot(TimeSheetData)

  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
