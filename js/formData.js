'use strict';
// ? Action variables selected
const profile = document.querySelector('#profile');
const userName = document.getElementById('userName').value;
const email = document.querySelector('#email').value;
const savebtn = document.querySelector('#savebtn');
const bio = document.querySelector('#bio');
const divContent = document.querySelector('.main__right');
savebtn.addEventListener('click',function(e){
   console.log(userName);
});