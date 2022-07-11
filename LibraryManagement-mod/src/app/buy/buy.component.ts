import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  minDate:any="";
  name:string='';
  booknameValue:string='';
  bookCategoryValue:string='';
  bookAuthorValue:string='';
  id1:string = '';
  getMenuId:any;
 

  list:User={
    _id:'',
    bookId:0,
    bookname:'',
    category:'',
    author:''
  }

  constructor(private router:Router,private route: ActivatedRoute,private userService: UserService) { }

  id: number = 0;
  date1:any='';

  ngOnInit(): void {
    this.dateValidate();
    this.getMenuId= this.route.snapshot.paramMap.get('id');
  
    
    this.userService.getUserId(this.getMenuId).subscribe(
      (res:any)=>this.lendData(res),
      (err:any)=>console.log(err)
    )
    
  }
  lendData(res  : User){
    this.list = res
    
  }
  
  submit(date:NgForm){

    this.userService.postUser(date.value).subscribe((data)=>{
     
    })
    alert('Your Response has been submitted successfully!!!!!!!!')
    this.router.navigate(['/dashboard']);

  }
  dateValidate(){
    var date:any= new Date();
     
    var toDate:any=date.getDate();
    if(toDate < 10){
     toDate ="0"+ toDate;
    }
    var month=date.getMonth()+1;
    if(month < 10){
     month = '0'+month;
    }
    var year =date.getFullYear();
    this.minDate= year+"-"+month+"-"+toDate;
    
 }
    

 }

