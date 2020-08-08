import { InMemoryDbService } from 'angular-in-memory-web-api';

import { TimeSheet } from './timesheet';

export class TimeSheetData implements InMemoryDbService {

/*  {
    data: [{
        key: "Group 1",
        items: [ ... ],          // subgroups or data objects if there are no further subgroups (check isExpanded = true)
                                 // can be null if isExpanded = false
        count: 3,                // count of items in this group; required only when items = null
        summary: [30, 20, 40]    // group summary results
    },
    ...
    ],
    totalCount: 200,              // if requireTotalCount = true
    summary: [170, 20, 20, 1020], // total summary results
    groupCount: 35                // if requireGroupCount = true
}*/
  createDb() {
    let timeSheets =
      {
      data: [
      {
        id: 1,
        emplID: '100',
        projID: '123413',
        workDate: "2020-07-20T00:00:00.0Z",
        nbrHrsReg: 6,
        nbrHrsOT1: 1,
        nbrHrsOT2: 0,
        nbrHrsTravel: 1.5,
        nbrHrsShift: 2,
      },
      {
        id: 2,
        emplID: '100',
        projID: '123413',
        workDate: "2020-07-21T00:00:00.0Z",
        nbrHrsReg: 5,
        nbrHrsOT1: 2,
        nbrHrsOT2: 0,
        nbrHrsTravel: 2.5,
        nbrHrsShift: 2,
      },
      {
        id: 3,
        emplID: '100',
        projID: '123413',
        workDate: "2020-07-22T00:00:00.0Z",
        nbrHrsReg: 7,
        nbrHrsOT1: 0,
        nbrHrsOT2: 0,
        nbrHrsTravel: 1.5,
        nbrHrsShift: 0,
      },
      {
        id: 4,
        emplID: '200',
        projID: '123415',
        workDate: "2020-07-22T00:00:00.0Z",
        nbrHrsReg: 8.5,
        nbrHrsOT1: 2,
        nbrHrsOT2: 0,
        nbrHrsTravel: 1.5,
        nbrHrsShift: 0,
      },
      {
        id: 5,
        emplID: '200',
        projID: '123416',
        workDate: "2020-07-21T00:00:00.0Z",
        nbrHrsReg: 4,
        nbrHrsOT1: 0,
        nbrHrsOT2: 0,
        nbrHrsTravel: 1.5,
        nbrHrsShift: 0,
      },
      {
        id: 6,
        emplID: '300',
        projID: '123413',
        workDate: "2020-07-21T00:00:00.0Z",
        nbrHrsReg: 7,
        nbrHrsOT1: 1,
        nbrHrsOT2: 0,
        nbrHrsTravel: 1.5,
        nbrHrsShift: 1,
      },
    ],
    totalCount: 6,              // if requireTotalCount = true
    summary: [37.5,6,0,10,5],   // total summary results
    groupCount: 0               // if requireGroupCount = true

  };
  return { timeSheets };
  }
}
