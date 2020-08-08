/* Defines the time sheet */
export interface TimeSheet {
  id: number;
  emplID: string;
  projID: string;
  workDate: Date;
  nbrHrsReg: number;
  nbrHrsOT1: number;
  nbrHrsOT2: number;
  nbrHrsTravel: number;
  nbrHrsShift: number;
}
