import $ from 'jquery'
import plyr from 'plyr'

class Plyr {
  constructor() {
    this.openModalButton = $(".feed__image img")
    this.closeModalButton = $(".modal__close")
    this.events()
  }

  events() {

    this.plyrPlayer()
  
  }



  plyrPlayer(){
    var instances = plyr.setup({});
  }

}

