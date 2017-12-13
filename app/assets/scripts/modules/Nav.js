import $ from 'jquery'

class Nav {
  constructor() {
    this.nextArrow = $(".content-area__arrow--next")
    this.prevArrow = $(".content-area__arrow--prev")
    this.feed = $("#feed__selector")
    this.events()
  }

  events() {
    this.nextArrow.click(function() {
      $(this).attr('disabled', true);

      this.nextPage()
      $(this).removeAttr('disabled');
    }.bind(this))

    this.prevArrow.click(function() {
      $(this).attr('disabled', true);
      this.prevPage()
      $(this).removeAttr('disabled');
    }.bind(this))

    $(document).keyup(this.keyPressHandler.bind(this));

  }

  keyPressHandler(e) {
    if (e.keyCode === 37) {
        this.prevPage()
    }
    if (e.keyCode === 39) {
      this.nextPage()
    }
  }



  nextPage() {
    let page = Number($(this.feed).attr('data-page'))

    if (page === 1) {
      this.feed.attr('data-page', "2")

      this.feed.removeClass("feed--1")
      this.feed.addClass("feed--2")

    }
    if (page === 2) {
      this.feed.attr('data-page', "3")

      this.feed.removeClass("feed--2")
      this.feed.addClass("feed--3")

    }
    if (page === 3) {
      this.feed.attr('data-page', "1")

      this.feed.removeClass("feed--3")
      this.feed.addClass("feed--1")

    }


  }

  prevPage() {

    let page = Number($(this.feed).attr('data-page'))

    if (page === 1) {
      this.feed.attr('data-page', "3")

      this.feed.removeClass("feed--1")
      this.feed.addClass("feed--3")
    }
    if (page === 2) {
      this.feed.attr('data-page', "1")

      this.feed.removeClass("feed--2")
      this.feed.addClass("feed--1")

    }
    if (page === 3) {
      this.feed.attr('data-page', "2")

      this.feed.removeClass("feed--3")
      this.feed.addClass("feed--2")

    }


  }
}

export default Nav
