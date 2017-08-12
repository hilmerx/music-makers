import $ from 'jquery'

class Grid {
  constructor() {
    this.events()
  }

  events() {
    this.getGrid()
  }

  getGrid(){
    let gridList
    let title
    let filename

    $.ajax({
    type: 'GET',
    dataType: 'json',
    url:"assets/json/grid-list.json",
  }).then( (data) => {
      gridList = data.list
    })
    .then( ()=>{
      gridList.forEach(function(elm, moduleNr) {


        $.ajax({
        type: 'GET',
        dataType: 'json',
        url:"assets/json/projects/"+gridList[moduleNr]+".json",
        })
        .then( (data) => {
          filename = gridList[moduleNr]
          title = data.title
          $('#'+(moduleNr+1)+' .feed__image').attr('id', filename)
          $('#'+(moduleNr+1)+' .feed__text').html(title)

          if (moduleNr === 0){
            $('#'+(moduleNr+1)+' img').attr('srcset', "assets/images/thumbnails/"+filename+"-large-hi-dpi.jpg 310w, assets/images/thumbnails/"+filename+"-large.jpg 155w")
          } else {
            $('#'+(moduleNr+1)+' img').attr('srcset', "assets/images/thumbnails/"+filename+"-hi-dpi.jpg 318w, assets/images/thumbnails/"+filename+".jpg 159w")
          }
          $('#'+(moduleNr+1)+' img').attr('alt', title)

        })


      })
    })
  }
}

export default Grid
