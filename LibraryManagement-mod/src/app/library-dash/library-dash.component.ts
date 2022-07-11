import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginDataService } from '../login-data.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-library-dash',
  templateUrl: './library-dash.component.html',
  styleUrls: ['./library-dash.component.scss']
})
export class LibraryDashComponent implements OnInit {
  userList: User[] = [];
  roleName:string=''


  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService,private loginDataService:LoginDataService,private fb:FormBuilder) 
  { 
    
  }

  ngOnInit(): void {
    
    this.userService.getUsers().subscribe((res)=>{
      this.userList=res as User[];
    })
      this.roleName=this.loginDataService.role
    console.log(this.roleName);
      
  }
  table(){
    this.router.navigate(['/user']);
  }
  

  add(){
    
    this.router.navigate(['/addbook']);

  }
  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/user']);
  }
  
delete(_id:string){
  if (confirm('Are you sure to delete this record ?') == true) {
  this.userService.deleteUserId(_id).subscribe((res) => {
   
    
  });
  this.userService.getUsers().subscribe((res)=>{
    this.userList=res as User[];
    
  });
}


}
doUpdate(_id:string){
  
  this.userService.setId = _id
}


  }

