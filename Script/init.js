$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});
// Loading Local JSON
// var imdb;
// var lJson = new XMLHttpRequest();
// lJson.open('GET', './JSON/imdb.json', false);
// lJson.onload = function (){
//   imdb=JSON.parse(this.responseText)
// }
// lJson.send();

var fav_id = JSON.parse(localStorage.getItem('fav_id'));
var fav_type = JSON.parse(localStorage.getItem('fav_type'));
