import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
  providers:[UserService]
})
export class AddBookComponent implements OnInit {

  // list:User={_id:'',bookId:0,bookname:'',author:'',category:''}


  id: number = 0;
  _id:string=''
  formvalid: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) { 
    this.formvalid = this.fb.group({
      bookname: ['', [Validators.required]],
      author: ['', [Validators.required]],
      category:['',[Validators.required]],
      bookId: ['', [Validators.required]],
      id:[0,[Validators.required]]
    });

  }
  bookname:any;
  author:any;
  category:any
  bookId:any;
  

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.id = params['id'];
    //   if (this.id != null) {
    //     this.formvalid.get('Id')?.setValue(params['id']);
    //     const data = this.userService.getUsersByID(this.id);
    //     if (data) {
    //       this.formvalid.setValue(data);
    //     }
    //   }
    // });
    this.route.params.subscribe(params =>{
      this._id=params['_id']
      console.log("id "+this._id);
      
    });
    this.onEdit(this._id);
  }
  save(formvalid:FormGroup) {
   
    if (!this._id) {
      //Create New User
      this.userService.postAdmin
      this.userService.postAdmin(formvalid.value).subscribe((data)=>{
        console.log(data);
      })
      console.log("details: "+this.formvalid.value)
      alert("Added successfully")
    } 
    else{
      alert("Updated")

      this.userService.putUser(formvalid.value,this._id).subscribe((res)=>{
        console.log("Updated info");
        
      })
    };
    
    // else {
    //   //Update User info
    //   this.userService.updateUser(this.formvalid.value);
    //   console.log("details: "+JSON.stringify(this.formvalid.value))
    // }

    //Redirecting to table
    this.router.navigate(['/dashboard']);
  }
  resetValues(){
    this.formvalid.reset();
  }
  onEdit(_id:any) {
    console.log("edit"+_id);
    // console.log("edit"+_id);
    this.userService.getUsers();
    this.userService.getUserId(this._id).subscribe((res)=>{

      console.log(JSON.stringify(res));
      
      this.bookname=Object.values(res)[2];
      this.bookname=this.bookname

    })
    // this.history.getList();
    // this.history.getUserId(this._id).subscribe((res)=>{
    //   console.log(res);


    //   this.name=Object.values(res)[1];
    //   this.list.event_name=this.name;

    //   this.date=Object.values(res)[2];
    //   this.date=formatDate(res.event_date,'yyyy-MM-dd',this.locale)
    //   this.list.event_date=this.date;


    //   this.time=Object.values(res)[3];
    //   this.time.toString();
    //   this.list.event_time=this.time;

  }

}
