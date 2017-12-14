import plyr from 'plyr'
import $ from 'jquery'


export default class PlyrControls {
    constructor() {
        this.divs

    }

    getMedia() {
        let moduleName = $(this).attr('id')
        let player = []
        let source = []

        $.ajax({
        type: 'GET',
        dataType: 'json',
        url:"assets/json/projects/"+moduleName+'.json',
        })
        .done( (data) => {

            $(".modal__title").html(data.title)
            $(".modal__director").html(data.directorText)



            data.movies.forEach(function(val, num) {

                if(data.movies.length === 2){
                    $(".plyr__container").append('<video poster="" controls crossorigin class="modal__video-player"><source src="" type="video/mp4" class="modal__video-source"></video>')
                } else {
                    $(".plyr__container").append('<video poster="" controls crossorigin class="modal__video-player"><source src="" type="video/mp4" class="modal__video-source"></video>')
                }


                player[num] = $(".modal__video-player")[num]
                source[num] = $(".modal__video-source")[num]
            })

            var instances = plyr.setup({
                // autoplay: true,
                // debug: true
            });


            source.forEach(function(instance, num) {
                instance.setAttribute('src', data.movies[num])
            });

            if (player.length===1){
                $('.plyr').css("display", "block").css("max-width", "100%")
            }else if (player.length===2){
                $('.plyr').css("display", "inline-block").css("max-width", "50%")
            } else {
                $('.plyr').css("display", "inline-block").css("max-width", "50%")
            }


            player.forEach(function(instance) {
                instance.load();
            })


            $(".modal__descripitive-text").html(data.text)
        })
        .done(() => {            
            let instances = plyr.get();

            this.divs = $(".modal__video-player")

            for (let x =  0; x < instances.length; x++) {
                const instance = instances[x]
                const activeDiv = this.divs[x]
                activeDiv.addEventListener('click', () => {
                    if (!instance.isPaused()) {
                        setTimeout( () => {
                            instance.pause()
                        }, 50)
                    }
                })
            }

        })
    }

}