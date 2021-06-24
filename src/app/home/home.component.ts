import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  public cert:string ='';
  public model: any ={};
  theader: any =["Cert Number","SSN","Select"];
  tvalue : any = [];

  stringifiedData: any;
  public displaydata: any;
  public certs: any = [];
  certselected: any;
  public refresh:boolean = true;

  constructor(public service: UsersService,public router: Router){}
  //ngOnInit(): void {
  //}
  LogoutUser() {
    this.router.navigate(['/']);
  }
  getData(){
    //if condition when input is a number of length 9
    if (this.refresh){
    if (!isNaN(this.model.ssn) && (this.model.ssn.length == 9))
    {
      
      let body = { ssn: this.model.ssn }
      this.stringifiedData = JSON.stringify(body);
      this.service.getssn(this.stringifiedData).subscribe( (data: any) => {
      console.log("result",data);
      this.displaydata = Object.values(data)[0];
      console.log("firstval", this.displaydata);
      
      if (this.displaydata.length == 0){
        alert("nodata for the given SSN");
      }else{
        for (var i in this.displaydata){
          this.certs[i] =  this.displaydata[i];
          this.tvalue.push(Object.values(this.certs[i]));
          console.log(this.tvalue[i]);
         
        }
        this.cert = 'yes';
        this.refresh = !this.refresh;
        console.log(this.tvalue.length);
      }
     }) 
    }
    else 
    //if condition when cert number with c is given
     if (((this.model.ssn.charAt(0) == 'C')||(this.model.ssn.charAt(0) == 'c')) && !isNaN(this.model.ssn.substring(1,9)) && (this.model.ssn.length == 9))
     { 
       this.router.navigate(['/allinfo',this.model.ssn]);
     }
     else{
       alert("Invalid Input");
     } 
    } 
  }
  searchSSN(certt: any): void{
    
    this.certselected = certt[0];
    alert("Do you want search with any of the cert . If yes, click cert");
    this.router.navigate(['/allinfo',this.certselected]);
    
  }

}
