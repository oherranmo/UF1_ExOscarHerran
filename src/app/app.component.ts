import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UF1ExOscarHerran';
  constructor(private http: HttpClient) {
    // this.http.post('http://localhost:3020/imatge1',{}).subscribe(response =>{
    // });
    // this.http.post('http://localhost:3020/imatge1errmsg',{}).subscribe(response =>{
    // });
    // this.http.post('http://localhost:3020/fitxerorigendesti',{}).subscribe(response =>{
    // });
    this.http.post('http://localhost:3020/mostarnomsifitxers',{}).subscribe(response =>{
    });
  }
}
