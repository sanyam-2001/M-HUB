//Getting The Path Variables
var query = localStorage.getItem('query');
var type = localStorage.getItem('type');
//Genre
function Card(img, name, id, type){
    this.img = img;
    this.name = name;
    this.id = id;
    this.type = type;

    this.create = function(){
        var div = $("<div></div>").addClass("col-md-3");
        var card = $("<div></div>").addClass("card bg-warning ");
        var card_b = $("<div></div>").addClass("card-body").html('<img src="https://image.tmdb.org/t/p/w500'+this.img+'" alt="Obj">');
        var card_f = $("<div></div>").addClass("card-footer").text(this.name);
        var id = $("<div></div>").addClass("unique").text(this.id);
        var type = $("<div></div>").addClass("unique").text(this.type);


        $(card).append(card_b, card_f, id, type);
        $(div).append(card);

        return div;

    }

}
var fav_id, fav_type;
if(localStorage.getItem('fav_id')===null){
    fav_id = [];
    fav_type=[];
}
else{
    fav_id = JSON.parse(localStorage.getItem('fav_id'));
    fav_type = JSON.parse(localStorage.getItem('fav_type'));
}
