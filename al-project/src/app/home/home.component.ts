import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ItemService } from '../services/item.service';
import { MessageService } from '../services/message.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private itemService: ItemService,
    private router: Router,
    private messageService: MessageService
  ) { }

  items: any ;

  ngOnInit() {
    this.getAllItems();
  }

  getAllItems(){
    this.itemService
     .showAllItems()
     .subscribe(something =>{
        this.items = something;
      })

  }

}
