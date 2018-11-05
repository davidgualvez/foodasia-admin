$(document).ready(function () {
	if(!isLogin()){ 
		showWarning('Warning','Please login to access this page');
		setTimeout(function(){
             window.location.href="/login"; 
        }, 1500); 
	}else{ 
		$('#app').css('display','block');
	}
	
});