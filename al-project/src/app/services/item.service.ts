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

   addItem(input){

     var data = JSON.stringify(input);

     return this.http.post(this.server + 'addItem',data,this.options).map(
       res => res.json()
     );
   }

   showAllItems(){
     return this.http.get(this.server+"items")
     .map(res => res.json());
   }

   showItem(id){
     return this.http.get(this.server + 'select_item/' + id)
     .map(res => res.json());

   }

   updateItem(input){
     var data = JSON.stringify(input);
     return this.http.post(this.server + 'edit_item',data,this.options).map(
      res => res.json()
    );

   }

   deleteItem(id){
     return this.http.get(this.server+ 'delete_item/' + id)
     .map(res => res.json());
   }

}
