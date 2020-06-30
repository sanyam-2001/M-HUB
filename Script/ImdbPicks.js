




for(var i=0;i<5;i++){
    var temp;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://www.omdbapi.com/?t='+imdb[Math.floor(Math.random()*240)].Title+'&apikey=5ee63658', true);
    xhr.onload= function(){
        temp=JSON.parse(this.responseText);
        var div = $('<div></div>').addClass('col-md-2');
        var card = $('<div></div>').addClass('card');
        var card_b = $('<div></div>').addClass('card-body').html('<img src="'+temp.Poster+'" alt="'+temp.Title+'">');
        var card_f = $('<div></div>').addClass('card-footer text-center').text(temp.Title).css({"color": "black", "font-size":"10px"});
        $(card).append(card_b, card_f);
        $(div).append(card);
        $('.carousel').append(div)

    }
    xhr.send();
}

