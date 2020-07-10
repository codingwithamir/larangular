import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form ={
    email:null,
    password:null
  }

  constructor(private httpObj:HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(){
    return this.httpObj.post('http://127.0.0.1:8000/api/auth/login',this.form).subscribe(
      data=>console.log(data),
      error=>console.log(error)
      
      
    )
    
  }

}
