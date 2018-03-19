import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { Item } from '../item';
import { ItemService } from '../services/item.service';
import { MessageService } from '../services/message.service';


declare var $:any;

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public file_src: string = '../assets/upload-avatar.png';

  constructor(private router:Router,
    private itemService: ItemService,
    private messageService: MessageService
  ) { }


  ngOnInit() {
  }

  model = new Item();

  addItem(){

    this.itemService.
    addItem(this.model).
    subscribe(response =>{
      
      this.messageService.showMessage("div#popmsg","alert-info","New Item has been successfully added.","glyphicon-ok");

    })
  }

  goBack(){
    this.router.navigate(['/home']);
  }
}
