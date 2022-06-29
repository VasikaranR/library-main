import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginDataService {
  role:string=''
  roleValue1:string=''
  data: string='';
  name:string='';
  password:string='';

  readonly baseURL="http://localhost:3000/books";

  constructor(private http:HttpClient){}
  
  getRole(roleValue:string){
     this.role=roleValue
  }

  getdata(){
    const data = this.getRole(this.roleValue1)
    this.role=this.data;
  }

  getDetails(name:string,password:string,role:string){
    this.name=name;
    this.password=password;
    this.role=role;
    console.log("name :"+this.name);
    
    return this.http.get(this.baseURL +`/${name}` + `/${password}` +`/${role}`);
  }
}

