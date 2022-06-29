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
  // id:number=0;
  // formvalid: FormGroup;

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService,private loginDataService:LoginDataService,private fb:FormBuilder) 
  { 
    // this.formvalid = this.fb.group({
    //   bookname: ['', [Validators.required]],
    //   author: ['', [Validators.required]],
    //   category:['',[Validators.required]],
    //   bookId: ['', [Validators.required]],
    //   id:[0,[Validators.required]]
    // });
  }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    this.roleName=this.loginDataService.role
    console.log(this.roleName);
      
  }
  table(){
    this.router.navigate(['/user']);
  }
  view(){

  }
  // lend(){
  //   this.router.navigate(['/buy']);
  // }
  add(){
    
    this.router.navigate(['/addbook']);

  }
  logout(){
    this.router.navigate(['/user']);
  }
  // edit(id:number){
  //   this.route.params.subscribe(params => {
  //     this.id = params['id'];
  //     if (this.id != null) {
  //       this.formvalid.get('Id')?.setValue(params['id']);
  //       const data = this.userService.getUsersByID(this.id);
  //       if (data) {
  //         this.formvalid.setValue(data);
  //       }
  //     }
  //   });

  // }
  deleteBook(id:number){
    console.warn("remove id :"+id);
    if (confirm("Are you sure would you like to delete the details?") == true) {
      this.userService.removeUser(id);
      this.userList = this.userService.getUsers();
    } 
}
  }

