import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    
   readonly baseURL='http://localhost:3000/books'
   readonly baseUrl='http://localhost:3000/lend';
   readonly baseUrl1='http://localhost:3000/add';
    bookName:string=''
    bookID!:string;
    private userList: User[] = []
  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get(this.baseUrl1)
}


role:string=''
  getRole(roleValue:string){
     this.role=roleValue
  }

postUser(date:User){
  return this.http.post(this.baseUrl,date)
}
getUserId(_id:string){
  return this.http.get<any>(this.baseUrl1+`/${_id}`);
}


postAdmin(formvalid:User){
  

  return this.http.post(this.baseUrl1,formvalid)
}

putUser(formvalid:User,_id:string){
 
  
  return this.http.put(this.baseUrl1+`/${_id}`,formvalid)
}
deleteUserId(_id: string) {
  return this.http.delete(this.baseUrl1 + `/${_id}`);
}

set setId(_id:string){
  this.bookID=_id;
}

get getId(){
  
  return this.bookID;
}

}