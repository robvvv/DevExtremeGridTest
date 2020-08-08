import { Injectable } from '@angular/core';
import { Component,  enableProdMode } from '@angular/core';
import { TimeSheetService } from './timesheet-service';
import { HttpClient, HttpParams } from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';
/*import 'devextreme/data/odata/store';*/

if(!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Injectable({
  providedIn: 'root',
})

@Component({
  templateUrl: 'timesheet-grid.component.html'
})

export class TimeSheetGridComponent {
  customDataSource: CustomStore;
  priority: any[];

  constructor(private timeSheetService: TimeSheetService) {
    this.customDataSource = timeSheetService.initDataSource();
    /*
    this.customDataSource = new CustomStore({
      key: 'ID',
      //loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
      load: () => {
        return http.get('api/timesheet')
        .toPromise()
        .then((timeSheetData: any) => {
            return {
                data: timeSheetData.data,
                totalCount: timeSheetData.totalCount,
                summary: timeSheetData.summary,
                groupCount: timeSheetData.groupCount
            };
        })
        .catch(error => { throw 'Data Loading Error: ' + JSON.stringify(error)});
      }
    });
    */
    this.priority = [
      { name: 'High', value: 4 },
      { name: 'Urgent', value: 3 },
      { name: 'Normal', value: 2 },
      { name: 'Low', value: 1 }
    ];
  }
/*
    this.dataSource = {
      store: {
        type: 'odata',
        key: 'Task_ID',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
      },
      expand: 'ResponsibleEmployee',
      select: [
        'Task_ID',
        'Task_Subject',
        'Task_Start_Date',
        'Task_Due_Date',
        'Task_Status',
        'Task_Priority',
        'Task_Completion',
        'ResponsibleEmployee/Employee_Full_Name'
      ]
    };*/

}
