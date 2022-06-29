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

  
  getDate(){
    
  }
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
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   if (this.id != null) {
    //     this.list.id=(params['id']);
    //     const data = this.userService.getUsersByID(this.id);
    //     if (data) {
    //       this.list=(data);
    //     }
    //   }
    // });

    // console.log("id: "+this.id);
    // this.booknameValue=this.list.bookname;
    // this.bookAuthorValue=this.list.author;
    // this.bookCategoryValue=this.list.category;
    // console.log("book name : "+this.booknameValue);
    
  }
  submit(date:NgForm){

    this.userService.postUser(date.value).subscribe((data)=>{
      console.log(data);
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
    console.log(this.minDate);
 }
    

 }

