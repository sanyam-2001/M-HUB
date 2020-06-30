
function disable(){
    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });
}
function enable(){
    $('html, body').css({
        overflow: 'auto',
        height: 'auto'
    });
}

$('#search-submit').on('click', function(){
    
    $('.search-result-options').fadeOut();
    $('.search-result-options').children().remove();
        
   if($('#search').val()==""){
       $('.error-head').text("Client Side Error");
       $('.chest').text("The input field cannot be empty. PLease enter a valid query")
       $('.container-fluid').fadeIn();
       disable();
   }else{
        var req = new XMLHttpRequest();
        req.open('GET', 'https://www.omdbapi.com/?s='+$('#search').val()+'&apikey=5ee63658', true);
        req.onload= function (){
            var obj = JSON.parse(this.responseText);
            console.log(obj)
            if(obj.Response=="True"){
               
                for(var i=0;i<obj.Search.length && i<5;i++){
                    var div = $('<div></div>').addClass('card');
                    var col = $('<div></div>').addClass('col-md-2');
                    var text = $('<div></div>').addClass('card-footer').text(obj.Search[i].Title);
                    var image = $('<div></div>').addClass('card-body').html('<img src="'+obj.Search[i].Poster+'" style="height:100px; width:100px;" alt="">');
                    $(div).append(image, text);
                    $(col).append(div);
                    $('.search-result-options').append(col);
                }
                $('.search-result-options').fadeIn();
                
                
            }else{
                $('.error-head').text(obj.Error);
                $('.chest').text("Sorry Our Data Base is unable to find your request. Clearly your taste is better than ours :)")
                $('.container-fluid').fadeIn();
                disable();
            }

        }
        req.send();
   }
});

$('.fa-times-circle').click(function (){
    $('.container-fluid').fadeOut();
    enable();
});

document.getElementById('search').addEventListener('keydown', function (e) {
    if(e.keyCode==13){
        document.getElementById('search-submit').click();
    }
    })