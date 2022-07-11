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
      
    });

  }
  bookname:any;
  author:any;
  category:any
  bookId:any;
  

  ngOnInit(): void {
   
    this.route.params.subscribe(params =>{
      this._id=params['_id']
      
      
    });
    
    this.userService.getUserId(this._id).subscribe(
      (res:any)=>this.editBook(res),
      (err:any)=>console.log(err)
    )
  
  }

  editBook(res:User){


    
    this.formvalid.patchValue({
      id:res._id,
      bookId:res.bookId,
      bookname:res.bookname,
      category:res.category,
      author:res.author
    })


  }
  save(formvalid:FormGroup) {
   
    if (!this._id) {
      
      this.userService.postAdmin(formvalid.value).subscribe((data)=>{
        
      })
     
      alert("Added successfully")
   
    } 
    else{
      alert("Updated")

      this.userService.putUser(formvalid.value,this._id).subscribe((res)=>{
        
        
      })
    };
    
    
    this.router.navigate(['/dashboard']);
  }
  resetValues(){
    this.formvalid.reset();
  }


}
