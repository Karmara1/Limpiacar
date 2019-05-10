/*Script que permite "pasar" al siguiente header una vez se mueve el scroll*/

$(document).ready(function(){

	$(window).scroll(function(){
		if( $(this).scrollTop() > 0 ){
			$('header').addClass('header2');
		} else {
			$('header').removeClass('header2');
		}
	});
});

function Numero(evt){
    var ch = String.fromCharCode(evt.which);
    
    if(!(/[0-9]/.test(ch))){
        evt.preventDefault();
    }
}

/*Función para el usio del JQuery*/
$(document).ready(function(){
    $(".twentytwenty-container").twentytwenty();
});