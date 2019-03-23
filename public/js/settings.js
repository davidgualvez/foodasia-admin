$(document).ready(function () {

	$('#logout').on('click',function(){
		logout();
	});

	$("#sidebar").mCustomScrollbar({
	    theme: "minimal"
	});

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar 
        $('#sidebar, #container-content, #nav-top').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});

//global variable for all page 
var api 		= $('#api_url').val();
var api2 		= $('#api2_url').val();
var routes	= { 
	login 					: 'api/portal/login', 
	franchiseAccounts 		: 'api/portal/headoffice/account/index',
	franchiseRemoveToken 	: 'api/portal/headoffice/account/remove-token',
	mailSubscribers 		: 'api/subscribe/index',
	mailFranchiseInquiry 	: 'api/mail/franchise_inquiry/index',
	mailContactInquiry 		: 'api/mail/contact_inquiry/index',
	customer : {
		carts: 'api/portal/headoffice/customer/carts'
	}
};

//
// Requests GET | POST 
//
function post( url, request, callback ){ 
	// axios({
	//   	method: 'POST',
	//   	url: url,
	//   	data: request,
	//   	// `responseType` indicates the type of data that the server will respond with
 	//    	// options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 	//    	responseType: 'json', // default 
	// })
	// .then(function (response) {
	//   	callback(response);
	//     //console.log(response);
	//   })
	// .catch(function (error) {
	//   	showError('Server error','Please ask the system administrator about this!');
	//     //console.log('Systen error',error);
	// }); 
	$.ajax({
        url: url,
        type: "POST",
        dataType: "json",
        data : request,
        // header : getHeader(),
        success: function(data){
            callback(data);
        },
        error: function(data){
            console.log(data); 
        }
    });
}

function postWithHeader( url, request, callback ){
	var token = localStorage.getItem('token'); 
	console.log(token);
		$.ajax({
	        url: url,
	        type: "POST",
	        dataType: "json",
	        data : request,
	        headers : { token : token },
	        success: function(data){
	            callback(data);
	        },
	        error: function(data){
	            console.log(data); 
	        }
	    });
	// axios({
	//   	method: 'POST',
	//   	url: url,
	//   	data: request,
	//   	// `headers` are custom headers to be sent
	//   	headers: {'token': token},
	//   	// `responseType` indicates the type of data that the server will respond with
 //    	// options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
 //    	responseType: 'json', // default 
	// })
	// .then(function (response) {
	//   	callback(response);
	//     //console.log(response);
	//   })
	//   .catch(function (error) {
	//   	showError('Server error','Please ask the system administrator about this!');
	//     //console.log('Systen error',error);
	//   });
}

function get( url, request, callback ){ 
	axios({
	  	method: 'GET',
	  	url: url,
	  	data: request,
	  	// `responseType` indicates the type of data that the server will respond with
    	// options are 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
    	responseType: 'json', // default 
	})
	.then(function (response) {
	  	callback(response);
	    //console.log(response);
	  })
	  .catch(function (error) {
	  	showError('Server error','Please ask the system administrator about this!');
	    //console.log('Systen error',error);
	  });
}

//
// Authentication Handler
//
function isLogin(){
	var token = localStorage.getItem('token');
	if(token == '' || token == null){
		return false; //says that the use is not loggedin
	}
	return true; // says that the user is current loggedin
}

function logout(){
	localStorage.clear();
	window.location.href="/login";
}

function clearStorage(){
	localStorage.clear(); 
}

function redirectTo(link){ 
	window.location.href=link;
}

// message box -- sweetalert
function showSuccess(
		title,
		message, 
		callback
	){
	swal(title, message, "success").then( (value) => {
	   callback();
	});
}

function showWarning(
		title,
		message,
		callback
	){
	swal(title, message, "warning").then( (value) => {
	   callback();
	});
}

function showError(
		title,
		message
	){
	swal(title, message, "error");
}

function showInfo(
		title,
		message
	){
	swal(title, message, "info");
}

function msgWithTimeout(
		title,
		message
	){
	swal(title, message, "info",{ timer: 3000 });
}

function msg(msg){
	alertify.message(msg); 
}