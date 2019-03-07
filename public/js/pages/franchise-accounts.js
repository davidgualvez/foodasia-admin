$(document).ready(function () {
	if(!isLogin()){ 
		showWarning('Warning','Please login to access this page');
		setTimeout(function(){
             window.location.href="/login"; 
        }, 1500); 
	}else{ 
		$('#app').css('display','block');
	}
	
	paginate();
	limitOnChange();
	searchValOnChange();
	btnNext();
	btnPrev(); 
});

function btnRemove(btn_id){
	$('.btn-remove#'+btn_id).on('click',function(){
		//console.log(this.id);
		var parent = $(this).parent();
		var thirdBruh = parent.prev().prev().prev(); 
		
		
		//console.log(thirdBruh);
		$.confirm({
		    title: 'Confirmation!',
		    content: 'You are about to terminate the token for selected account. Please confirm to continue!',
		    type: 'dark',
		    buttons: { 
		        cancel: function () {
		            //$.alert('Canceled!');
		        },
		        somethingElse: {
		            text: 'Confirm',
		            btnClass: 'btn-green',
		            keys: ['enter', 'shift'],
		            action: function(){
		               //$.alert('Confirmed!');

		               var data = {
		               		token_id : btn_id
		               };
		               
		               postWithHeader(api + routes.franchiseRemoveToken , data, function(response){ 
		               		
		               		console.log(response);
		               		if(response.success == false){
		               			showWarning(response.message,'');
		               		}

		               		thirdBruh.text('...');
		               		parent.prev().prev().empty();
		               		parent.prev().prev().append('<span class="badge badge-danger">Inactive</span>');
		               		parent.empty(); 
		               });

		            }
		        }
		    }
		});
	});
}

//pagination=========================
function limitOnChange(){
	$('#limit').on('change',function(){ 
		paginate();
	});
}

function searchValOnChange(){
	$('#search_val').on('change',function(){ 
		paginate();
	});
}

var current_page 	= null;
var prev_page_url	= null;
var next_page_url 	= null;
function paginate(){ 
	var limit 		= $('#limit').val();
	var search_val	= $('#search_val').val();
	var data = {
		search_val 	: search_val,
		limit 		: limit
	}

	var url = null;

	if (current_page == null) { 
		current_page = 1;
	} 

	postWithHeader(api + routes.franchiseAccounts + '?page='+current_page, data, function(response){ 
		current_page = response.data.current_page; 
		$('#current_page').html(current_page);

		if(response.data.next_page_url == null){
			$('#next_page_url').parent().addClass('disabled');
		}else{
			$('#next_page_url').parent().removeClass('disabled');
		}

		if(response.data.prev_page_url == null){
			$('#prev_page_url').parent().addClass('disabled');
		}else{
			$('#prev_page_url').parent().removeClass('disabled');
		}  
		dataDisplayer(response.data.data, response.data.from); 
	});
}

function btnNext(){
	$('#next_page_url').on('click',function(){
		current_page++; 
		paginate();
	});
}

function btnPrev(){
	$('#prev_page_url').on('click',function(){
		current_page--; 
		paginate();
	});
}

function dataDisplayer(data, from){ 
	$('#tbl-content').empty();

	if(from == null){
		$('#current_page').html('Nothing to display...');
		return;
	}

	$.each( data, function( key, value ) {
	  //alert( key + ": " + value ); 
	  var lastLogin = moment(value.UpdDate);
	  var str = value.CustToken; 
	  var token = '';
	  if(str == null || str.length == 0){
	  	token = '...'; 
	  		  $('#tbl-content').append(
	  	  	    	'<tr>'+
	  	  	    	  '<th scope="row">'+from+'</th>'+
	  	  	    	  '<td>'+value.CustCode+'</td>'+ 
	  	  	    	  '<td>'+token+'</td>'+ 
	  	  	    	  '<td><span class="badge badge-danger">Inactive</span></td>'+ 
	  	  	    	  '<td>'+lastLogin.fromNow()+'</td>'+
	  	  	    	  '<td>'+
	  	  		  		// '<button id="'+value.CustTokenID+'" class="btn btn-sm btn-danger btn-remove" >'+
	  	  		  		// 	'<i class="fa fa-trash"></i> Logout'+
	  	  		  		// '</button>'+
	  	  	    	  '</td>'+
	  	  	    	'</tr>'  
	  		  ); 
	  }else{

	  	if(str.length > 30) str = str.substring(0,30);
	  	var lastLogin = moment(value.UpdDate);
	  	token = str+'....';
	  		  $('#tbl-content').append(
	  	  	    	'<tr>'+
	  	  	    	  '<th scope="row">'+from+'</th>'+
	  	  	    	  '<td>'+value.CustCode+'</td>'+ 
	  	  	    	  '<td>'+token+'</td>'+ 
	  	  	    	  '<td><span class="badge badge-success">Active</span></td>'+ 
	  	  	    	  '<td>'+lastLogin.fromNow()+'</td>'+
	  	  	    	  '<td>'+
	  	  		  		'<button id="'+value.CustTokenID+'" class="btn btn-sm btn-danger btn-remove" >'+
	  	  		  			'<i class="fa fa-trash"></i> Logout'+
	  	  		  		'</button>'+
	  	  	    	  '</td>'+
	  	  	    	'</tr>'  
	  		  ); 
	  		  btnRemove(value.CustTokenID);
	  } 
	  
	   from++; 
	   
	});
}
//end of pagination================