$('.btn-holder').click(()=>{
	$('.side-menu').css({'display':'none'});
});

$('.m-nav-box-links').click(()=>{
	$('.side-menu').css({'display':'flex'});
});

window.addEventListener('mouseup',function(event){
    var pol = document.getElementById('pol');
    if(event.target != pol && event.target.parentNode != pol){
        pol.style.display = 'none';
    }
}); 

// $('#game').click(()=>{

// 	// var data = $('.map-holder').clone();

// 	$('.right-box').html('');

// 	var header = "<h1>Game Mechanics</h1>";
// 	$('.right-box').append(header);
// 	$('.right-box').append(
	
// 		"<div class'map-holder'>"+
// 			"<div class='stat-box'>"+
// 				"<ul>"+
// 					"<li>Rule #1</li>"+
// 				"</ul>"+
// 			"</div>"+
// 			"<img src='img/others/game-1.svg'>"+
// 		"</div>"
// 	);



// 	var rules = [
// 			{'rule':'1. No one is allowed to cheat during the game, if caught your team will be disqualified'},
// 			{'rule':'2. No substitution, only the 6th man of your can substitute.'},
// 			{'rule':'3'},
// 			{'rule':'4'}
// 	];
// 	$('.right-box').append(
// 		"<div class='thread'>"+
// 			"<h2 class='thread-title'>Game Rules</h2>"+
// 			"<ul class='thread-content'>"+
// 			"</ul>"+
// 		"</div>"
// 	);
// 	for(rule in rules){
// 		$('.thread-content').append(
				
// 			"<li>"+rules[rule].rule+"</li>"
				
// 		);
// 	}
	

	


// 	// $('.right-box').append("<h1>Current Event</h1>");
// 	// $('.right-box').append(data);

// }); 