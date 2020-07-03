var req = new XMLHttpRequest();
req.open('GET', 'https://api.themoviedb.org/3/'+type+'/'+query+'?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US&append_to_response=external_ids, images', true);
req.onload = function(){
    var tmdb = JSON.parse(this.responseText);
    var x;
    if(type=='tv'){x=tmdb.external_ids.imdb_id;}
    else{x = tmdb.imdb_id;}
    var subreq = new XMLHttpRequest();
    subreq.open('GET', 'https://omdbapi.com/?i='+x+'&plot=full&apikey=5ee63658');
    subreq.onload = function (){
        var omdb = JSON.parse(this.responseText);
        console.log(tmdb, omdb);
       $('.poster').html('<img src="'+omdb.Poster+'" alt=""><div class="card-footer text-center"><button class="btn btn-primary" style="box-shadow: 1px 1px 5px black;">Add to Favourites <i class="fas fa-heart"></i></button></div>');
        $('#plot').text(tmdb.overview);
        $('#year').text(omdb.Year);
        $('#time').text(omdb.Runtime);
        $('#syn').text(omdb.Plot);
      
      $('.porps').append($('<div></div>').addClass('bg-primary my-3 p-2 text-light rounded').html("<span class='h5'>Directed By:- </span>  "+omdb.Director), $('<div></div>').addClass('bg-primary my-3 p-2 text-light rounded').html("<span class='h5'>Written By:- </span>  "+omdb.Writer), $('<div></div>').addClass('bg-primary my-3 p-2 text-light rounded').html("<span class='h5'>Starcast:- </span>  "+omdb.Actors), $('<div></div>').addClass('bg-primary my-3 p-2 text-light rounded').html("<span class='h5'>Accolades:-</span> "+omdb.Awards));
        
        
        $('#tag').text(tmdb.tagline);
        $('#title').text(omdb.Title);
        $('#r1').text(omdb.imdbRating);
        $('#r2').text(omdb.Rated);
        $('#r3').text(omdb.Ratings[omdb.Ratings.length-1].Value);
        for(var i=0;i<tmdb.genres.length;i++){
            $('#rate').append(tmdb.genres[i].name+ "-");
        }
        $('.preloader').fadeOut();
            $('.whole').fadeIn();


        
    }
    subreq.send();
    var xml  =new XMLHttpRequest();
        xml.open('GET', 'https://api.themoviedb.org/3/'+type+'/'+query+'/similar?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US&page=1');
        xml.onload = function (){
            var similar = JSON.parse(this.responseText).results;
            for(var i =0;i<similar.length;i++){
                $('.suggest').append(new Card(similar[i].poster_path, similar[i].original_title, similar[i].id, type).create());
            }



            
        }
        xml.send();

    

}
req.send();



window.addEventListener('click', function(e){
    if(e.target.parentElement.classList.contains('card')){
        localStorage.setItem('query', e.target.parentElement.children[2].innerText);
        localStorage.setItem('type', e.target.parentElement.children[3].innerText);
        window.location.reload();
    }
    else if(e.target.parentElement.parentElement.classList.contains('card')){
        localStorage.setItem('query',e.target.parentElement.parentElement.children[2].innerText );
        localStorage.setItem('type',e.target.parentElement.parentElement.children[3].innerText );
        window.location.reload();
    }
});