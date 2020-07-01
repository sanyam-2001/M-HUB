var req = new XMLHttpRequest();
req.open('GET', 'https://api.themoviedb.org/3/'+type+'/'+query+'?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US', true);
req.onload = function(){
    var tmdb = JSON.parse(this.responseText);
    var subreq = new XMLHttpRequest();
    subreq.open('GET', 'https://omdbapi.com/?i='+tmdb.imdb_id+'&plot=full&apikey=5ee63658');
    subreq.onload = function (){
        var omdb = JSON.parse(this.responseText);
        console.log(tmdb, omdb);
    }
    subreq.send();

}
req.send();