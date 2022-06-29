import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
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
      id:[0,[Validators.required]]
    });

  }

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
      
    })
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
    }
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


}
