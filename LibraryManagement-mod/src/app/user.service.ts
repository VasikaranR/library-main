import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userList: User[] = []
    // {
  
  //   id:1,
  //   bookId:100,
  //   bookname:"memories of midnight",
  //   category:"fiction",
  //   author:'james clark',
    
  // },
  // {
  //   id:2,
  //   bookId:101,
  //   bookname:"the avalanche",
  //   category:"fiction",
  //   author:'william donald'
  // },
  // {
  //   id:3,
  //   bookId:102,
  //   bookname:"husky stories",
  //   category:"fiction",
  //   author:'emma watson'
  // },
  // {
  //   id:4,
  //   bookId:103,
  //   bookname:"the science of everything",
  //   category:"science",
  //   author:'dr.phill'
  // }
// ];
   readonly baseUrl='http://localhost:3000/lend';
   readonly baseUrl1='http://localhost:3000/add';

  constructor(private http:HttpClient) { }
  getUsers() {
    return this.http.get(this.baseUrl1)
}

bookName:string=''

getBookName(){
  
}
role:string=''
  getRole(roleValue:string){
     this.role=roleValue
  }
//   getUsers() {
//     return this.userList
// }
// getUsersByID(id: number) {
//     return this.userList.find(x => x.id == id)
// }
// addUser(user: User) {
//     user.id = new Date().getTime();
//     this.userList.push(user);
//     setTimeout(()=>{
//         alert("Added successfully");
//       },100)
// }
// updateUser(user: User) {
//     console.warn("userID : "+user.id);
//     const userIndex = this.userList.findIndex(x => x.id == user.id);
//     console.warn("userIndex : "+userIndex);
//     console.warn("USER DETAILS : "+user);
//     this.userList[userIndex] = user;
//     alert("Updated successfully");
// }
// removeUser(id: number) {
//     this.userList = this.userList.filter(x => x.id != id);
// }

postUser(date:User){
  return this.http.post(this.baseUrl,date)
}

postAdmin(formvalid:User){
  console.log("post  admin kula");

  return this.http.post(this.baseUrl1,formvalid)
}

putUser(formvalid:User,_id:string){
  console.log("put user kula");
  
  return this.http.put(this.baseUrl+`/${_id}`,formvalid)
}
}