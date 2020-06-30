var response;

// To request Data From TMDB

    var explore = new XMLHttpRequest();

    explore.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US&sort_by=popularity.desc&include_adult=True&include_video=True&page=1', true);
    explore.onload= function (){
        response = JSON.parse(this.responseText).results;
        

        for (var i=0;i<response.length;i++){
            var div = $('<div></div>').addClass('col-md-3');
            var card = $('<div></div>').addClass('card');
            var card_b = $('<div></div>').addClass('card-body').html('<img src="https://image.tmdb.org/t/p/w500'+response[i].poster_path+'" alt="'+response[i].title+'">');
            var card_f = $('<div></div>').addClass('card-footer text-center').text(response[i].title).css({"color": "black", "font-size":"10px"});
            $(card).append(card_b, card_f);
            $(div).append(card);
            $('.result').append(div);
        }



    }
    explore.send();

    $('.right').on('click', function (){
        $('#scroller').animate({scrollLeft: '+=750'}, 800);
    });
  
    $('.left').on('click', function (){
        $('#scroller').animate({scrollLeft: '-=500'}, 800);
    });

function param(inp){
    switch(inp){
        case 'Popularity':
            return 'popularity.desc';
        case 'Revenue':
            return 'revenue.desc';
        case 'Local Vote Average':
            return 'vote_average.desc'
        case 'Release Date':
            return 'primary_release_date.desc';
        case 'T.V':
            return 'tv';
        case 'Movies':
            return 'movie';
    }
}
//Update The Cards
  $('#sort-submit').click(function (){
      $('.result').children().remove();
      $('.result').fadeOut();
      var f1 = $('#list').val();
      var f2 = $('#list2').val();
      if(f2=="Movies"){
        var explore = new XMLHttpRequest();

        explore.open('GET', 'https://api.themoviedb.org/3/discover/movie?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US&sort_by='+param(f1)+'&include_adult=True&include_video=True&page=1', true);
        explore.onload= function (){
            response = JSON.parse(this.responseText).results;
            var i=0;
            if(f1=="Revenue"){
                i=1;
            }
    
            for (;i<response.length;i++){
                var div = $('<div></div>').addClass('col-md-3');
                var card = $('<div></div>').addClass('card');
                var card_b = $('<div></div>').addClass('card-body').html('<img src="https://image.tmdb.org/t/p/w500'+response[i].poster_path+'" alt="'+response[i].title+'">');
                var card_f = $('<div></div>').addClass('card-footer text-center').text(response[i].title).css({"color": "black", "font-size":"10px"});
                $(card).append(card_b, card_f);
                $(div).append(card);
                $('.result').append(div);
            }
    
    
    
        }
        explore.send();
      $('.result').fadeIn();
      }
      else{
        var explore = new XMLHttpRequest();

        explore.open('GET', 'https://api.themoviedb.org/3/discover/tv?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US&sort_by='+param(f1)+'&include_adult=True&include_video=True&page=1', true);
        explore.onload= function (){
            response = JSON.parse(this.responseText).results;
            console.log(response)
    
            for (var i=0;i<response.length;i++){
                var div = $('<div></div>').addClass('col-md-3');
                var card = $('<div></div>').addClass('card');
                var card_b = $('<div></div>').addClass('card-body').html('<img src="https://image.tmdb.org/t/p/w500'+response[i].poster_path+'" alt="'+response[i].name+'">');
                var card_f = $('<div></div>').addClass('card-footer text-center').text(response[i].name).css({"color": "black", "font-size":"10px"});
                $(card).append(card_b, card_f);
                $(div).append(card);
                $('.result').append(div);
            }
    
    
    
        }
        explore.send();
      $('.result').fadeIn();
      }
      
  });