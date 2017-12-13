import $ from 'jquery'

class Menu {
  constructor() {
    this.toggleMenuButtons = $(".menu-modal--close")
    this.menuIcon = $(".backbone__menu-icon")
    this.menuModal = $(".menu-modal")
    this.modalBox = $(".menu-modal__box")

    this.logoButton = $(".backbone__logo")

    this.commercialsButtonDesktop = $(".content-area__menu--commercials")
    this.filmsButtonDesktop = $(".content-area__menu--films")
    this.aboutButtonDesktop = $(".content-area__menu--about")
    this.studioButtonDesktop = $(".content-area__menu--studio")
    this.contactButtonDesktop = $(".content-area__menu--contact")

    this.commercialsButton = $(".menu-modal__text--commercials")
    this.filmsButton = $(".menu-modal__text--films")
    this.aboutButton = $(".menu-modal__text--about")
    this.studioButton = $(".menu-modal__text--studio")
    this.contactButton = $(".menu-modal__text--contact")

    this.commercialsDiv = $(".commercials")
    this.filmsDiv = $(".films")
    this.studioDiv = $(".studio")
    this.aboutDiv = $(".about")
    this.contactDiv = $(".contact")

    this.currentMenuElementDesktop = this.commercialsButtonDesktop
    this.currentMenuElement = this.commercialsButton
    this.currentActiveDiv = this.commercialsDiv

    this.events()
  }

  events() {

    this.toggleMenuButtons.unbind('click').click(function() {
      this.toggleMenu();
    }.bind(this));

    //Desktop events
    this.commercialsButtonDesktop.click( function() {
      this.openPageModal(this.commercialsButtonDesktop)
    }.bind(this))

    this.filmsButtonDesktop.click( function() {
      this.openPageModal(this.filmsButtonDesktop)
    }.bind(this))

    this.studioButtonDesktop.click( function() {
      this.openPageModal("studio")
    }.bind(this))

    this.aboutButtonDesktop.click( function() {
      this.openPageModal(this.aboutButtonDesktop)
    }.bind(this))

    this.contactButtonDesktop.click( function() {
      this.openPageModal(this.contactButtonDesktop)
    }.bind(this))

    //Modal events
    this.logoButton.click( function() {
      this.openPageModal(this.commercialsButton)
    }.bind(this))

    this.commercialsButton.click( function() {
      this.openPageModal(this.commercialsButton)
      this.toggleMenu()
    }.bind(this))

    this.filmsButton.click( function() {
      this.openPageModal(this.filmsButton)
      this.toggleMenu()

    }.bind(this))

    this.studioButton.click( function() {
      this.openPageModal("studio")
      this.toggleMenu()

    }.bind(this))

    this.aboutButton.click( function() {
      this.openPageModal(this.aboutButton)
      this.toggleMenu()

    }.bind(this))

    this.contactButton.click( function() {
      this.openPageModal(this.contactButton)
      this.toggleMenu()

    }.bind(this))


    this.modalBox.click(function( e ) {
      e.stopPropagation();
    });

  }

  toggleMenu() {
    this.menuIcon.toggleClass('backbone__menu-icon--close-x')
    this.menuModal.toggleClass('menu-modal--is-visible')
  }

  openPageModal(element) {
    let connectedDivName
    let connectedDiv
    //changes the underline
    this.currentMenuElement.removeClass("menu-modal__text--is-active")
    this.currentMenuElementDesktop.removeClass("menu-modal__text--is-active")
    element.addClass("menu-modal__text--is-active")
    this.currentMenuElement = element

    //changes the div

    this.currentActiveDiv.removeClass("content-area--is-visible")

    //gets connected Div tag from menu
    connectedDivName = element.attr('data-connectedDiv')
    connectedDiv = $(connectedDivName)

    connectedDiv.addClass("content-area--is-visible")
    this.currentActiveDiv = connectedDiv
  }



}

export default Menu
