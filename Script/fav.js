


if(fav_id!=null){
    $('.error').css({display:"none"});
}


for(var i=0;i<fav_type.length;i++){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.themoviedb.org/3/'+fav_type[i]+'/'+fav_id[i]+'?api_key=7ce6f3444cda42a6506370e782b2e857&language=en-US', false);
    
    
    xhr.onload = function (){
        var x = JSON.parse(this.responseText);
        //console.log(x);
        var main = $('<div></div>').addClass('main col-md-3  p-4');
        var card = $('<div></div>').addClass('card');
        var card_b = $('<div></div>').addClass('card-body').html('<img style="width:100%;" src="https://image.tmdb.org/t/p/w500'+x.poster_path+'">');;
        if(x.original_title){
        var card_f = $('<div></div>').addClass('card-footer text-center').css({height:"10vh"}).text(x.original_title);

        }else{
        var card_f = $('<div></div>').addClass('card-footer text-center').css({height:"10vh"}).text(x.name);

        }
        
        
        var button = $('<button></button>').css({width: "100%"}).addClass('btn btn-primary my-2 remove').html('Remove From Favourites<i class = "fas fa-heart mx-1"></i>');
        
        var query = $('<div></div>').addClass('unique').text(fav_id[i]);
        var type = $('<div></div>').addClass('unique').text(fav_type[i]);
        
       
        $(card).append(card_b,card_f);
        $(main).append(card, button, query, type);
        $('.fav-list').append(main);

    }
    xhr.send();
    
}


document.addEventListener('click', function(e){
    
    if(e.target.parentElement.classList.contains('card')){
  

        localStorage.setItem('query', e.target.parentElement.parentElement.children[2].innerText);
        localStorage.setItem('type', e.target.parentElement.parentElement.children[3].innerText);
        window.open('search.html',"_self")

    }
    else if(e.target.parentElement.parentElement.classList.contains('card')){
        
        localStorage.setItem('query', e.target.parentElement.parentElement.parentElement.children[2].innerText);
        localStorage.setItem('type', e.target.parentElement.parentElement.parentElement.children[3].innerText);
        window.open('search.html',"_self")
    }
});

document.addEventListener('mousemove', function(){
    if(fav_id.length==0){
        $('.error').css({display:"block"});
    }
});




document.addEventListener('click', function(e){
    if(e.target.classList.contains('remove')){
        //console.log(e.target.parentElement.children[2].innerText, e.target.parentElement.children[3].innerText);
        for(var i =0;i<fav_id.length;i++){
            if(fav_id[i]==e.target.parentElement.children[2].innerText){
                fav_id.splice(i, 1);
                fav_type.splice(i, 1);
                break;
            }
        }
        localStorage.setItem('fav_id', JSON.stringify(fav_id));
        localStorage.setItem('fav_type', JSON.stringify(fav_type));
        $(e.target.parentElement).fadeOut();
        if(fav_id.length==0){
            $('.error').css({display:"block"});
        }
    }
});

