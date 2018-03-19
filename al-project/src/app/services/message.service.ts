import { Injectable } from '@angular/core';

declare var $:any;

@Injectable()
export class MessageService {

  constructor() { }

  showMessage(selector, msgColor, msgText, icon){

    $(selector).removeClass();
    $(selector).addClass("alert" + msgColor + " alert-dismissable");
    $(selector).html(
      '<h4><span class = "glyphicon ' +
                                 icon +
                  '"</span>&nbsp;<b>' +
                              msgText +
                          '</b></h4>'
                                   );
    $(selector).show().delay(2000).fadeIn().delay(2000).fadeOut();



  }

}
