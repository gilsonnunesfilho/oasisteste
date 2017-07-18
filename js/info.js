var btnAlmoco = document.querySelector('#almoco .card_actions button');
var titleAlmoco = document.querySelector('#almoco .card_content-header');
var almoco = document.querySelector('#almoco .card_content-food');
var foodNames = document.querySelectorAll('#almoco .food-names');



btnAlmoco.onclick = function(){
  "use strict";
  titleAlmoco.classList.toggle('hidden');
  almoco.classList.toggle('card_content-food-visible');
  foodNames[0].classList.toggle('food-names-visible');
  foodNames[1].classList.toggle('food-names-visible');
};