import $ from 'jquery'
import PlyrControls from './PlyrControls.js'

let plyrControls = new PlyrControls()



class ModalPlayer {
    constructor() {
        this.openModalButton = $(".feed__image")
        this.modal = $(".modal")
        this.modalBox = $(".modal__box")
        this.closeModalButton = $(".modal__close")
        this.videoWrapper
        this.events()

    }

    events() {
        this.openModalButton
            .click(this.openModal.bind(this))
            .click(plyrControls.getMedia)


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


    closeModal() {
        let players =[]

        this.modal.removeClass("modal--is-visible")


        $(".plyr__container").html("")

        return false
    }
}

export default ModalPlayer
