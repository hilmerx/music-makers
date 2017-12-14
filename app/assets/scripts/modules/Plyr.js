import $ from 'jquery'
import plyr from 'plyr'

class Plyr {
    constructor() {
        this.events()
    }

    events() {
        this.plyrPlayer()
    }



    plyrPlayer(){
        var instances = plyr.setup({});
    }

}

