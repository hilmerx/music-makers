import $ from 'jquery'

class Grid {
  constructor() {
    this.events()
  }

  events() {
    this.getGrid()
  }

  getGrid(){
    let gridCommercials
    let gridFilms
    let title
    let filename

    $.ajax({
    type: 'GET',
    dataType: 'json',
    url:"assets/json/grid-list.json",
  }).then( (data) => {
      gridCommercials = data.gridCommercials
      gridFilms = data.gridFilms
    })
    .then( ()=>{
      gridCommercials.forEach(function(elm, moduleNr) {
        $.ajax({
        type: 'GET',
        dataType: 'json',
        url:"assets/json/projects/"+gridCommercials[moduleNr]+".json",
        })
        .then( (data) => {
          filename = gridCommercials[moduleNr]
          title = data.title
          $('.commercials #'+(moduleNr+1)+' .feed__image').attr('id', filename)
          $('.commercials #'+(moduleNr+1)+' .feed__text').html(title)

          if (moduleNr === 0){
            $('.commercials #'+(moduleNr+1)+' img').attr('srcset', "assets/images/thumbnails/"+filename+"-large-hi-dpi.jpg 310w, assets/images/thumbnails/"+filename+"-large.jpg 155w")
          } else {
            $('.commercials #'+(moduleNr+1)+' img').attr('srcset', "assets/images/thumbnails/"+filename+"-hi-dpi.jpg 318w, assets/images/thumbnails/"+filename+".jpg 159w")
          }
          $('.commercials #'+(moduleNr+1)+' img').attr('alt', title)
        })
      })

      gridFilms.forEach(function(elm, moduleNr) {
        $.ajax({
        type: 'GET',
        dataType: 'json',
        url:"assets/json/projects/"+gridFilms[moduleNr]+".json",
        })
        .then( (data) => {
          filename = gridFilms[moduleNr]
          title = data.title
          $('.films #'+(moduleNr+1)+' .feed__image').attr('id', filename)
          $('.films #'+(moduleNr+1)+' .feed__text').html(title)

          $('.films #'+(moduleNr+1)+' img').attr('srcset', "assets/images/thumbnails/"+filename+"-hi-dpi.jpg 1000w, assets/images/thumbnails/"+filename+".jpg 500w")

          $('.films #'+(moduleNr+1)+' img').attr('alt', title)
        })
      })


    })
  }
}

export default Grid
