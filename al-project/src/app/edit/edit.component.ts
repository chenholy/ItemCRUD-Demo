import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../services/item.service';
import { MessageService } from '../services/message.service';


declare var $:any;

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public file_src:string = "../assets/upload-avatar.png";
  item:Item;
  name:string = '';

  constructor(private router:Router,
    private itemService: ItemService,
    private messageService: MessageService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getOneItem();
  }


getOneItem(){
  var id = this.route.snapshot.params['id'];

  this.itemService.showItem(id).subscribe(
    input => {

    this.item = input;
    this.item.id = id;


  });
}

  goBack(){
    this.router.navigate(['/home']);
  }

  updateItem(){
    this.itemService
    .updateItem(this.item)
    .subscribe(response=>{
      console.log(response);
      this.messageService.showMessage("div#editmsg","alert-info","Profile has been UPDATED","glyphicon-ok");
    })
  }

}
