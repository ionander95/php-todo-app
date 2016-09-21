$(document).ready(function(){
    $.getJSON( "getLists.php", function( data ) {
        console.log(data);
    });
});