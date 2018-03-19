import { Injectable } from '@angular/core';
import { Http,Headers,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ItemService {

  server = "http://item/";
  headers: Headers = new Headers;
  options : any;
  constructor(private http:Http) {

    this.headers.append('enctype','multipart/form-data');
    this.headers.append('Content-type','application/json');
    this.headers.append('X-Request-With','XMLHttpRequest');
    this.options = new RequestOptions({ headers: this.headers });
   }

   addItem(info){

     var data = JSON.stringify(info);

     return this.http.post(this.server + 'addItem',data,this.options).map(
       res => res.json()
     );
   }

   showAllItems(){
     return this.http.get(this.server+"items")
     .map(res => res.json());
   }

}
