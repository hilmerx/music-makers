import $ from 'jquery'
import plyr from 'plyr'

class Plyr {
  constructor() {
    this.openModalButton = $(".feed__image img")
    this.closeModalButton = $(".modal__close")
    this.events()
  }

  events() {
    // console.log($('.modal__close'))

    this.plyrPlayer()
    // this.closeModalButton()
  }



  plyrPlayer(){
      // This is the bare minimum JavaScript. You can opt to pass no arguments to setup.
      // e.g. just plyr.setup(); and leave it at that if you have no need for events
    var instances = plyr.setup({
      // autoplay: true,
      // debug: true
    });

  }

  }

// export default Plyr
