var explore = new XMLHttpRequest();

    explore.open('GET', 'https://api.themoviedb.org/3/trending/all/week?api_key=7ce6f3444cda42a6506370e782b2e857', true);
    explore.onload= function (){
        response = JSON.parse(this.responseText).results;
        
        
        for (var i=0;i<response.length;i++){
           if(response[i].media_type=="movie"){
            var div = $('<div></div>').addClass('col-md-3');
            var card = $('<div></div>').addClass('card bg-warning');
            var card_b = $('<div></div>').addClass('card-body').html('<img src="https://image.tmdb.org/t/p/w500'+response[i].poster_path+'" alt="'+response[i].title+'">');
            var card_f = $('<div></div>').addClass('card-footer text-center').text(response[i].title).css({"color": "black", "font-size":"10px"});
            var id  = $('<div></div>').addClass('unique').text(response[i].id);
            var type = $('<div></div>').addClass('unique').text('movie');

            $(card).append(card_b, card_f, id, type);
            $(div).append(card);
            $('.trend').append(div);
           }
           else{
            var div = $('<div></div>').addClass('col-md-3');
            var card = $('<div></div>').addClass('card bg-warning');
            var card_b = $('<div></div>').addClass('card-body').html('<img src="https://image.tmdb.org/t/p/w500'+response[i].poster_path+'" alt="'+response[i].name+'">');
            var card_f = $('<div></div>').addClass('card-footer text-center').text(response[i].name).css({"color": "black", "font-size":"10px"});
            var id  = $('<div></div>').addClass('unique').text(response[i].id);
            var type = $('<div></div>').addClass('unique').text('tv');

            
            $(card).append(card_b, card_f, id, type);
            $(div).append(card);
            $('.trend').append(div);
           }
        }

        

    }
    explore.send();




    
    $('.rtrend').on('click', function (){
        $('#trendscroll').animate({scrollLeft: '+=750'}, 800);
    });
  
    $('.ltrend').on('click', function (){
        $('#trendscroll').animate({scrollLeft: '-=500'}, 800);
    });

    