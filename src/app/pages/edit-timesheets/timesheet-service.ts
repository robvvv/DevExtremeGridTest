import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import CustomStore from 'devextreme/data/custom_store';

@Injectable({
  providedIn: 'root'
})

export class TimeSheetService {

  customDataSource: CustomStore;

  constructor(private http: HttpClient) { }

  initDataSource() {
    this.customDataSource = new CustomStore({
      key: 'ID',
      //loadMode: 'raw', // omit in the DataGrid, TreeList, PivotGrid, and Scheduler
      load: () => {
        return this.http.get('api/timesheet')
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
    return this.customDataSource;
  }

}
