$(document).ready(function(){
    $.getJSON( "getLists.php", function( data ) {
        console.log(data);
        $(contentDiv).html(data[0].'ID');
        $(contentDiv2).html(data[0].'Nombre');
    });
});