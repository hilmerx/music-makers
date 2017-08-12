/*let Person = require('./modules/Person')

import Person from './modules/Person'

class Adult extends Person {
  payTaxes(){
    console.log(this.name + " payed taxes")
  }
}

let joel = new Person("Joel", "korv")
let michelle = new Adult("Michelle", "kimchi")

joel.greet()
michelle.greet()
michelle.payTaxes()
*/

import $ from 'jquery'
import Modal from './modules/Modal.js'
import Grid from './modules/Grid.js'
import Nav from './modules/Nav.js'
// import Plyr from './modules/Plyr.js'

let grid = new Grid()
let nav = new Nav()
let modal = new Modal()
// let plyr = new Plyr()
