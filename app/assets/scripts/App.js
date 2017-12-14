import $ from 'jquery'
import ModalPlayer from './modules/ModalPlayer.js'
import Grid from './modules/Grid.js'
import Nav from './modules/Nav.js'
import Menu from './modules/Menu.js'
import {runGoogleAnalytics} from './modules/GoogleAnalytics.js'

let grid = new Grid()
let nav = new Nav()
let modalPlayer = new ModalPlayer()
let menu = new Menu()
runGoogleAnalytics()