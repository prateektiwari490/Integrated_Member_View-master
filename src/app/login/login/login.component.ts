import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide: any =true;
  loginForm: FormGroup = new FormGroup({});
  public model: any ={};
  res: boolean = false;
  constructor(public rtr : Router) { }

  ngOnInit(): void {

   this.loginForm = new FormGroup(
   {
     uname : new FormControl('',Validators.required),
     pwd : new FormControl('', Validators.required)
   });
  }


  CheckUser(){
    console.log(this.loginForm.value["uname"]);
     if ((this.loginForm.value["uname"] == "umr") || (this.loginForm.value["uname"] == "UMR")){
      if (this.loginForm.value["pwd"] == '123')
     {
       this.res = true;
      }
  }
     if(this.res == true){
       this.rtr.navigate(['/table']);
     }
     else
     {
       alert("Invalid User")
     }
  }

}

