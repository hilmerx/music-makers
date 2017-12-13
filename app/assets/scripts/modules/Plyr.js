import $ from 'jquery'
import plyr from 'plyr'

class Plyr {
    constructor() {
        this.videoWrapper = $(".plyr__video-wrapper")
        this.events()
    }

    events() {
        this.plyrPlayer()
    }



    plyrPlayer(){
        var instances = plyr.setup({});
    }

}

