// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

document.addEventListener('submit', function(e){
    e.preventDefault()
    validatefields()
})

function validatefields(){
    var elemento1 = document.querySelector('#form1')
    var elemento2 = document.querySelector('#form2')
    var elemento3 = document.querySelector('#form3')
}