import { Component, OnInit, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import {FormControl, Validators, FormBuilder} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

interface Function {
  value: string;
  viewValue: string;
}

interface PeriodicElement {
  info: string;
  data: string;
  message: string;
  //symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  constructor(
      private dialog: MatDialog,
      private fb:FormBuilder
    ){}

    userInfo = this.fb.group({
      val0:['', Validators.compose([Validators.required, Validators.minLength(7), Validators.maxLength(7) , Validators.pattern('\[R]{1}\[A]{1}\[U]{1}\[A-Z0-9]{4}')])],
      val1:['', Validators.compose([/*Validators.required,*/ Validators.minLength(4), Validators.maxLength(4) , Validators.pattern('[0-9]*')])],
      val2:['', Validators.compose([/*Validators.required,*//*Validators.minLength(8),*/ Validators.maxLength(30) , Validators.pattern('[A-Z a-z ]*')])],
      val3:['', Validators.compose([/*Validators.required,*/Validators.minLength(8), Validators.maxLength(8) , Validators.pattern('[0-9]*')])],
      val4:['', Validators.compose([/*Validators.required,*/Validators.minLength(12), Validators.maxLength(12) , Validators.pattern('[0-9]*')])],
      val5:['', Validators.compose([/*Validators.required,*/Validators.minLength(12), Validators.maxLength(12) , Validators.pattern('[0-9]*')])],
      val6:['', Validators.compose([/*Validators.required,*/Validators.minLength(12), Validators.maxLength(12) , Validators.pattern('[0-9]*')])],
      val7:['', Validators.compose([/*Validators.required,*/Validators.minLength(10), Validators.maxLength(10) , Validators.pattern('\[0-9]{4}-\(0?[1-9]|1[012])-\(0?[1-9]|1[0-9]|2[0-9]|3[01])')])],
      val8:['', Validators.compose([/*Validators.required,*/Validators.minLength(10), Validators.maxLength(10) , Validators.pattern('\[0-9]{4}-\(0?[1-9]|1[012])-\(0?[1-9]|1[0-9]|2[0-9]|3[01])')])],
      val9:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[A-ELN-PRX-Z ]{1}')])],
      val10:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[BDPR ]{1}')])],
      val11:['', Validators.compose([/*Validators.required,Validators.minLength(6),*/ Validators.maxLength(6) , Validators.pattern('^[-]?[0-9]{1,5}')])],
      val11_a:['', Validators.compose([/*Validators.required,Validators.minLength(9),*/ Validators.maxLength(9) , Validators.pattern('^[-]?[0-9]{1,5}(?:\.[0-9]{1,2})?$')])],
      val12:['', Validators.compose([/*Validators.required,Validators.minLength(6),*/ Validators.maxLength(6) , Validators.pattern('^[-]?[0-9]{1,5}')])],
      val12_a:['', Validators.compose([/*Validators.required,Validators.minLength(9),*/ Validators.maxLength(9) , Validators.pattern('^[-]?[0-9]{1,5}(?:\.[0-9]{1,2})?$')])],
      val13:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[YN ]{1}')])],
      val13_a:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[N ]{1}')])],
      val14:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[YN ]{1}')])],
      val15:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[DN8 ]{1}')])],
      val16:['', Validators.compose([/*Validators.required,Validators.minLength(6),*/ Validators.maxLength(6) , Validators.pattern('^[-]?[0-9]{1,5}')])],
      val17:['', Validators.compose([/*Validators.required,*/Validators.minLength(1), Validators.maxLength(1) , Validators.pattern('\[YN ]{1}')])],

      //password:['', Validators.compose([Validators.required, Validators.pattern('[A-Za-z0-9]*')])],
    })

    @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any>;
    openDialogWithTemplateRef(templateRef: TemplateRef<any>) {
      this.dialog.open(templateRef);
    }
    openDialogWithoutRef() {
      this.dialog.open(this.secondDialog);
    }

  selectedValue: string = "NONE";
  mProgressBar: string = "no";

  data0: string = "RAUQ00Y";
  data1: string = '8850';
  data2: string = 'MOORE NORTH AMERICA';
  data3: string = '76140073';
  data4: string = '767000140073';
  data5: string = '767000140073';
  data6: string = '';
  data7: string = '2004-07-01';
  data8: string = '2004-12-31';
  data9: string = 'N';
  data10: string = '';
  data11: string = '5000';
  data11_A: string = '';
  data12: string = '5000';
  data12_A: string = '';
  data13: string = 'Y';
  data13_A: string = 'N';
  data14: string = '';
  data15: string = '';
  data16: string = '10';
  data17: string = 'N';

    functions: Function[] = [
        {value: 'Add', viewValue: 'Add'},
        {value: 'Update', viewValue: 'Update'},
        {value: 'Delete', viewValue: 'Delete'},
        {value: 'Select', viewValue: 'Inquire'}
      ];
    ELEMENT_DATA: PeriodicElement[] = [
      {info: 'UPDATE USER ID', data: this.data0, message: "REQUIRED"/*, symbol: 'H'*/},
      {info: 'CLIENT CODE', data: this.data1, message: "REQUIRED"/*, symbol: 'H'*/},
      {info: 'CLIENT NAME', data: this.data2, message: "REQUIRED"},//, symbol: 'He'},
      {info: 'GROUP NUMBER', data: this.data3, message: "REQUIRED  8 DIGITS"},// symbol: 'Li'},
      {info: 'FSA HEALTH/HRA POLICY NUMBER', data: this.data4, message: "12 DIGITS IF POPULATED"},// symbol: 'Be'},
      {info: 'FSA DEPENDENT/HSA POLICY NUMBER', data: this.data5, message: "12 DIGITS IF POPULATED"},// symbol: 'Be'},
      {info: 'FSA HEALTH LTD/2ND HRA/HSA POL', data: this.data6, message: "12 DIGITS IF POPULATED"},// symbol: 'Be'},
      {info: 'EFFECTIVE DATE', data: this.data7, message: "FORMAT CCYY-MM-DD"},// symbol: 'Be'},
      {info: 'TERMINATION DATE', data: this.data8, message: "FORMAT CCYY-MM-DD"},// symbol: 'Be'},
      {info: 'FSA REIMBURSEMENT IND', data: this.data9, message: "VALUE A,B,C,D,E,L,N,O,P,R,X,Y,Z,SPACE"},// symbol: 'Be'},
      {info: 'ELECT FOR ALL IND', data: this.data10, message: "VALUES B,R,D,P OR SPACE"},// symbol: 'Be'},
      {info: 'HEALTH/HRA ANNUAL AMOUNT', data: this.data11, message: ""},// symbol: 'Be'},
      {info: 'HEALTH MIN AMT', data: this.data11_A, message: "range -99999.99 to 099999.99"},// symbol: 'Be'},
      {info: 'DEPENDENT/HSA ANNUAL AMOUNT', data: this.data12, message: ""},// symbol: 'Be'},
      {info: 'DEP MIN AMT', data: this.data12_A, message: "range -99999.99 to 099999.99"},// symbol: 'Be'},
      {info: 'ANNUAL ELECTIONS USED FROM FILE', data: this.data13, message: "Y,N,SPACE"},// symbol: 'Be'},
      {info: 'WEX TERM DT', data: this.data13_A, message: "N,SPACE"},// symbol: 'Be'},
      {info: 'USE EFT INFO FROM FILE', data: this.data14, message: "Y,N,SPACE"},// symbol: 'Be'},
      {info: 'DECIMAL / NON-DECIMAL', data: this.data15, message: "D=DEC,N=NONDEC,8=834,SPACE"},// symbol: 'Be'},
      {info: 'NAME/ADDR/LOC MAX NBR CHANGES', data: this.data16, message: ""},// symbol: 'Be'},
      {info: 'USE EOM FOR EE TERM DATE', data: this.data17, message: "Y,N,SPACE"},// symbol: 'Be'},
    ];

    displayedColumns: string[] = ['Information', 'Data'/*, 'errorMessage', 'weight', 'symbol'*/];
    //dataSource = this.ELEMENT_DATA;

    dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
        @ViewChild(MatPaginator) paginator: MatPaginator;
        ngAfterViewInit() {
          this.dataSource.paginator = this.paginator;
          }

//    email = new FormControl('', [Validators.required, Validators.email]);
//     getErrorMessage() {
//        if (this.email.hasError('required')) {
//          return 'You must enter a value';
//        }
//        return this.email.hasError('email') ? 'Not a valid email' : '';
//      }


  //constructor() { }

  ngOnInit(): void {
  }

}
