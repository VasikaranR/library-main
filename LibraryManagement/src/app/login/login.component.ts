import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LoginDataService } from '../login-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router:Router,private route: ActivatedRoute,private loginDataService:LoginDataService) { }
  name:string="vasi";
  password1:string='';
  email1:string='';
  roleValue:string='';
  ngOnInit(): void {
    // console.warn(this.loginDataService.getRole(this.roleValue));

    console.log("login com");
    
     
  }
  
  dashBoard(){

    this.loginDataService.getDetails(this.name,this.password1,this.roleValue).subscribe((res)=>{
      console.log("res"+res);
      if(res===true)
      {
        if(this.roleValue==='user')
        {
          this.router.navigate(['/dashboard']);
        }
        else{
          this.router.navigate(['/dashboard']);
    
        }
      }
      else{
        this.router.navigate(['/login']);
        alert("Invalid username or password")
      }
    })
    console.warn(this.loginDataService.getRole(this.roleValue));
   

  }
  

  
}
