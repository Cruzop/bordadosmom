



$('#login_google').click(function(){
	var provider = new firebase.auth.GoogleAuthProvider();
	firebase.auth() 
		.signInWithPopup(provider)
		.then(function(result) {
			console.log(result.user);
			$('#login').hide();

			$('#inicio').append("<h4 class='modal-title' >Inicio sesion como: <br> "+result.user
				.displayName+"</h4><br><img src='"+result.user
				.photoURL+"?height=600' style='height: 7.3rem;'/><h4 class='modal-title'>"+result.user
				.email+"</h4><span class='input-group-btn'><a href='store.html'><span class='mbri-success mbr-iconfont mbr-iconfont-btn'></span>Continuar</a></span>");

		});


});



$('#login_facebook').click(function(){
	var provider = new firebase.auth.FacebookAuthProvider();
	firebase.auth()
	.signInWithPopup(provider)
	.then(function(result) {
			console.log(result.user);

			$('#login').hide();
		
			$('#inicio').append("<h4 class='modal-title' >Inicio sesion como: <br> "+result.user
				.displayName+"</h4><br><img src='"+result.user
				.photoURL+"?height=600' style='height: 7.3rem;'/><h4 class='modal-title'>"+result.user
				.email+"</h4><span class='input-group-btn'><a href='store.html' ><span class='mbri-success mbr-iconfont mbr-iconfont-btn'></span>Continuar</button></span>");

		});


});



