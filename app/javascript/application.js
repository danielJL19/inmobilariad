// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import "flowbite";
import "trix"
import "@rails/actiontext"
//variables
// Función que contiene el código para actualizar los valores del rango
function setupRangeInputs() {
    const room_input = document.getElementById('room_input');
    const room_value = document.getElementById('room_value');
    const bathroom_input = document.getElementById('bathroom_input');
    const bathroom_value = document.getElementById('bathroom_value');
  
    room_input.addEventListener("input", (event) => {
      room_value.textContent = event.target.value;
    });
  
    bathroom_input.addEventListener('input', (event) => {
      bathroom_value.textContent = event.target.value;
    });
  }
  
  // Llamar a la función para configurar los inputs del rango cuando se carga la página
  document.addEventListener('DOMContentLoaded', setupRangeInputs);
  
  // Llamar a la función de nuevo después de realizar una búsqueda
  document.addEventListener('turbo:load', setupRangeInputs);
  


import "trix"
import "@rails/actiontext"
