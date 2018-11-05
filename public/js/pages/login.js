$(document).ready(function () { 
    if(isLogin()){ 
        window.location.href="/"; 
    }else{
        $('#app').css('display','block');
    }

    btnLogin();
});

function btnLogin(){ 
	$('#btn_login').on('click',function(){
		var username = $('#username').val();
		var password = $('#password').val(); 

		//validation
		if(username == '' || username == null){
			showWarning('Warning','Username is required!', function(){
				$('#username').focus();
			}); 
			return;
		}
		if(password == '' || password == null){
			showWarning('Warning','Password is required!',function(){
				$('#password').focus();
			});
			
			return;
		} 
		login( username,password );

	});
}

function login( username,password ){ 	
	var data = {
		username : username,
		password : password
	};

	post(api + routes.login, data, function(response){ 
		if(response.status == 200){

			if(response.success == false){
				showWarning('Warning',response.message,function(){
					$('#username').val('');
					$('#password').val('');
					$('#username').focus();
				}); 
				return;
			}

			showSuccess('Success','Access granted',function(){
				localStorage.setItem('token',response.token);
				 window.location.href="/";
			});  
			return;
		}
	});

}