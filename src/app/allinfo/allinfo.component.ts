import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {UsersService} from '../users.service';

interface Function {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-allinfo',
  templateUrl: './allinfo.component.html',
  styleUrls: ['./allinfo.component.css']
})
export class AllinfoComponent implements OnInit {

  selectedValue: string = "NONE";

  functions: Function[] = [
      {value: 'add', viewValue: 'Add'},
      {value: 'update', viewValue: 'Update'},
      {value: 'delete', viewValue: 'Delete'},
      {value: 'inquire', viewValue: 'Inquire'}
    ];

  public membersel:string ='';
  public memberdeploc:string='';
  public pcpcrinfo:string='';
  public refresh:boolean = true; public cusrefresh:boolean = true; public emprefresh:boolean = true;

  public certsel:any;
  stringifiedData: any;
  public displaydata: any;public empconst: any;
  public memdetails: any = []; public constdetails: any =[];

  tvalue : any = [];tvalue1 : any = [];tvalue2 : any = [];tvalue3 : any = [];

  header1:any = ["Base rate Code","Blng Prd Endng Date","Cov Begin Date","Eff Ins Date","Eff Status Cd","Empe Blng Chg Cd","Expir Ins Dt","Expir Status Cd","Stat Class Code","Line Insurance Cd","Pol Cov Applied Cd","Policy Nbr"];
  header2:any = ["Cert Nbr","Group Nbr","Last Name","First Name","Middle Initial","DOB","Sex Cd","Status Code","Sequence Nbr","Employee Loc Cd"];
  header3:any = ["Cert Nbr","Group Nbr","Provider Eff status date","PCP Nbr","Provider seq nbr","Care sys cd","Invalid Rec Cd","Provider Exp status date","PCP Auto Assign","CCP Ind","First Name","Last Name","Network Name","Sys Assgn Line Nbr","Spcl Cust Txt","Spcl Cust Desc"];

  constructor(private route: ActivatedRoute,public service: UsersService) { }

  ngOnInit(): void {
    let cert = this.route.snapshot.paramMap.get('cert');
    this.certsel = cert;
    let body ={ cert : this.certsel }
    this.stringifiedData = JSON.stringify(body);
  }

  backToHome() : void{
    window.close();
  }

  memberDetails(): void{
    this.memberdeploc = '';
    this.pcpcrinfo   = '';

    if(this.emprefresh){
      this.service.getempconst(this.stringifiedData).subscribe( (data:any) =>{
        this.empconst = Object.values(data)[0];
        if(this.empconst.length == 0){
          alert("No emp info available")
        }else{
          for(var i in this.empconst)
          {
            this.constdetails[i] =  this.empconst[i];
            this.tvalue3.push(Object.values(this.constdetails[i]));
          }
        }
      })

      this.service.getempdetails(this.stringifiedData).subscribe( (data:any) =>{
        //console.log("result1",data);
        this.displaydata = Object.values(data)[0];
        //console.log("empdetails",this.displaydata);

        if(this.displaydata.length == 0){
          alert("No policy info available for given cert");
        }else{
          for(var i in this.displaydata){
            this.memdetails[i] =  this.displaydata[i];
            this.tvalue2.push(Object.values(this.memdetails[i]));
            //console.log(this.tvalue2[i]);
          }
          this.emprefresh = !this.emprefresh;
          this.refresh = true;
          this.cusrefresh =true;
          this.membersel = 'yes';
        }
      })
    }
  }

  memberDepNLoc(): void{
    this.membersel = '';
    this.pcpcrinfo   = '';

    if (this.refresh){
      this.service.getmemdetails(this.stringifiedData).subscribe( (data:any) =>{
      this.displaydata = Object.values(data)[0];

      if (this.displaydata.length == 0){
        alert("No Dependent or Employee Loc code avaialable for the given cert");
      }else{
       for (var i in this.displaydata)
       {
         this.memdetails[i] =  this.displaydata[i];
         this.tvalue.push(Object.values(this.memdetails[i]));
       }
       this.emprefresh = true;
       this.refresh = !this.refresh;
       this.cusrefresh = true;
       this.memberdeploc = 'yes';
      }
      })
    }
  }

  pcpNcusRep(): void{
    this.membersel = '';
    this.memberdeploc = '';

    if (this.cusrefresh){
      this.service.getpcpncr(this.stringifiedData).subscribe( (data:any) =>{
      this.displaydata = Object.values(data)[0];

      if (this.displaydata.length == 0){
        alert("No PCP and CR info available for the given cert");
      }else{
        for (var i in this.displaydata)
        {
          this.memdetails[i] =  this.displaydata[i];
          this.tvalue1.push(Object.values(this.memdetails[i]));
        }
        this.pcpcrinfo   = 'yes';
        this.emprefresh = true;
        this.refresh = true;
        this.cusrefresh =!this.cusrefresh;
      }
    })
    }
  }

}
