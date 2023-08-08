// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "flowbite";
//variables
const room_input = document.getElementById('room_input');
const room_value = document.getElementById('room_value')
const bathroom_input = document.getElementById('bathroom_input')
const bathroom_value = document.getElementById('bathroom_value')
document.addEventListener("DOMContentLoaded",function(e){

    room_input.addEventListener("input", (event)=>{
        room_value.textContent = event.target.value
    })

    bathroom_input.addEventListener('input',(event)=>{
        bathroom_value.textContent = event.target.value
    })
})

