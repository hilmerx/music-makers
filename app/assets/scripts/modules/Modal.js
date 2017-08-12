import $ from 'jquery'
import plyr from 'plyr'




class Modal {
  constructor() {
    this.openModalButton = $(".feed__image")
    this.modal = $(".modal")
    this.modalBox = $(".modal__box")
    this.closeModalButton = $(".modal__close")
    this.events()
  }

  events() {
    this.openModalButton
      .click(this.openModal.bind(this))
      .click(this.getMedia)


    this.closeModalButton.click(this.closeModal.bind(this))

    this.modalBox.click(function( e ) {
      e.stopPropagation();
    });

    this.modal.click(this.closeModal.bind(this))


    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if (e.keyCode === 27) {
        this.closeModal()
    }
  }

  blockClose(){

  }

  openModal() {
    this.modal.addClass("modal--is-visible")
    return false

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
          console.log(num)
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
        if (player.length===1){
          player.forEach(function(instance) {
            // instance.play();
          })
        }
      })
  }

  closeModal() {
    let players =[]

    this.modal.removeClass("modal--is-visible")


    $(".plyr__container").html("")

    return false
  }
}

export default Modal
