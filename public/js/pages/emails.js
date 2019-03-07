$(document).ready(function () {
	if(!isLogin()){ 
		showWarning('Warning','Please login to access this page');
		setTimeout(function(){
             window.location.href="/login"; 
        }, 1500); 
	}else{ 
		$('#app').css('display','block');
	}
	 
	$( "#datepicker_from" ).datepicker();
	$( "#datepicker_to" ).datepicker();

	fromChange();
	toChange();
	sortChange();
	limitChange();
	functionChange();
	btnExport();

	var selected = $('#function').val();
	getSelectedFilter(selected);
});

var ps 		= null;
var sort 	= null;
var limit 	= null;
var dFrom 	= null;
var dTo 	= null;

function sortChange(){
	$('#sort').on('change',function(){
		sort = this.value;
		// showEmails();
		/*-----------------*/
		var filter = $('#function').val();		
		getSelectedFilter(filter);
	});
}

function limitChange(){
	$('#limit').on('change',function(){
		limit = this.value;
		// showEmails();
		/*-----------------*/
		var filter = $('#function').val();		
		getSelectedFilter(filter);
	});
}

function fromChange(){
	$('#datepicker_from').on('change',function(){
		var result = isValidDate(this.value); 
		
		/*-----------------*/
		var filter = $('#function').val();	
		/*-----------------*/
		
		if(!result){
			showWarning('Message','You enter invalid date');
			dFrom = null;
			this.value = '';
			this.focus();

			//showEmails(); 
			getSelectedFilter(filter); 
			return;
		}
		dFrom = this.value; 
		// showEmails();
		/*-----------------*/
		getSelectedFilter(filter);
	});
}

function toChange(){
	$('#datepicker_to').on('change',function(){
		var result = isValidDate(this.value);

		/*-----------------*/
		var filter = $('#function').val();	
		/*-----------------*/
		
		if(!result){
			showWarning('Message','You enter invalid date');
			dTo = null;
			this.value = '';
			this.focus();
 
			//showEmails(); 
			// showEmails();
			getSelectedFilter(filter); 
			return;
		}
		dTo = this.value + " 23:59:59";
		// showEmails();
		/*-----------------*/
				
		getSelectedFilter(filter);
	});
}

function isValidDate(str) {
  var d = moment(str,'M/D/YYYY');
  if(d == null || !d.isValid()) return false;

  return str.indexOf(d.format('M/D/YYYY')) >= 0 
      || str.indexOf(d.format('MM/DD/YYYY')) >= 0
      || str.indexOf(d.format('M/D/YY')) >= 0 
      || str.indexOf(d.format('MM/DD/YY')) >= 0;
}

function btnExport(){
	$('#nani').on('click',function(e){
		var now = moment().format('MMMM Do YYYY, h:mm:ss a');
		var filename = 'Email List as of ' + now; 

		//exportToExcel('tblData', filename);

		downloadCSV(csv, fileName);
	});
}

function downloadCSV(csv, fileName) {
	var data, filename, link;
	var csv = csv;

	if (csv == null) return;

	filename = fileName + '.csv';

	if (!csv.match(/^data:text\/csv/i)) {
		csv = 'data:text/csv;charset=utf-8,' + csv;
	}
	data = encodeURI(csv);

	link = document.createElement('a');
	link.setAttribute('href', data);
	link.setAttribute('download', filename);
	link.click();
}

function exportToExcel(tableID, filename = ''){
	var downloadurl;
	var dataFileType = 'application/vnd.ms-excel';
	var tableSelect = document.getElementById(tableID);
	var tableHTMLData = tableSelect.outerHTML.replace(/ /g, '%20');

	// Specify file name
	filename = filename ? filename + '.xls' : 'export_excel_data.xls';

	// Create download link element
	downloadurl = document.createElement("a");

	document.body.appendChild(downloadurl);

	if (navigator.msSaveOrOpenBlob) {
		var blob = new Blob(['\ufeff', tableHTMLData], {
			type: dataFileType
		});
		navigator.msSaveOrOpenBlob(blob, filename);
	} else {
		// Create a link to the file
		downloadurl.href = 'data:' + dataFileType + ', ' + tableHTMLData;

		// Setting the file name
		downloadurl.download = filename;

		//triggering the function
		downloadurl.click();
	}
}

function exportTableToExcel(tableID, filename = ''){
    var downloadLink;
    var dataType = 'application/vnd.ms-excel';
    var tableSelect = document.getElementById(tableID);
    var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
    
    // Specify file name
    filename = filename?filename+'.xls':'excel_data.xls';
    
    // Create download link element
    downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob){
        var blob = new Blob(['\ufeff', tableHTML], {
            type: dataType
        });
        navigator.msSaveOrOpenBlob( blob, filename);
    }else{
        // Create a link to the file
        downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
    
        // Setting the file name
        downloadLink.download = filename;
        
        //triggering the function
        downloadLink.click();
    }
}

function functionChange(){
	$('#function').on('change', function(){
		var selected = $(this).val();
		getSelectedFilter(selected);
	});
}

// gets the selected filter (eg. subscribers, contact inquiry, )
function getSelectedFilter(selected){
	if (selected == 's') {
		showSubscribers();
	}else if (selected == 'ci') {
		showContactInq();
	}else if (selected == 'fi' ) {
		showFranchiseInq();
	}else{
		return;
	}
}

function showSubscribers(){
	sort = $('#sort').val();
	var data = {
		password : ps,
		sort 	 : sort,
		limit    : limit,
		date_from: dFrom,
		date_to  : dTo
	};
	console.log(data);
	postWithHeader(api+routes.mailSubscribers,data,function(response){
		console.log(response);
		if(response.success == false){
			if(response.status == 401){
				showWarning('Message',response.message,function(){});
				ps = null;
				//auth();
				return;
			}
			showWarning(response.message);
			return;
		}

		if(dFrom == null || dTo == null){
			//showWarning('Message','Email list result was not filterd by Dates. Make sure you fill the two dates with valid date');
			msg('Email list result was not filterd by Dates. Make sure you fill the two dates with valid date');
		}
		
		showTblSubs(response.data);
	});	
}

function showTblSubs(lists){
	
	showSubsHeader();
	var ctr = 1;
	$('#tbl-content').empty();
	console.log(lists);
	// console.log(Object.keys(lists[0]).length);
	lists.forEach((item)=>{ 
		console.log(item);
		var date = moment(item.created_at).format('L');
		$('#tbl-content').append( 
			'<tr>'+
			'<td>'+ctr+'</td>'+
			'<td>'+item.email+'</td>'+
			'<td>'+date+'</td>'+
			'</tr>'
		);
		ctr++;
	});
}

function showSubsHeader(){
	
	$('#tblData > thead').empty();
	$('#tblData > thead').append(
		'<tr>'+
			'<th scope="col" width="5%">#</th>'+
			'<th scope="col" class="w-75">Email</th>'+
			'<th scope="col" width="w-25">Date Subscribed</th>'+
		'</tr>'

	);
}

function showFranchiseInq(){

	sort = $('#sort').val();

	var data = {
		password : ps,
		sort 	 : sort,
		limit    : limit,
		date_from: dFrom,
		date_to  : dTo
	};

	postWithHeader(api+routes.mailFranchiseInquiry,data,function(response){
		console.log('showFranchiseInq');
		console.log(response);
		if(response.success == false){
			if(response.status == 401){
				showWarning('Message',response.message,function(){});
				ps = null;
				auth();
				return;
			}
			showWarning(response.message);
			return;
		}

		if(dFrom == null || dTo == null){
			//showWarning('Message','Email list result was not filterd by Dates. Make sure you fill the two dates with valid date');
			msg('Email list result was not filterd by Dates. Make sure you fill the two dates with valid date');
		}
		
		showTblFranchInq(response.data);
	});	
}

function showFranchiseHeader(){
	
	$('#tblData > thead').empty();
	$('#tblData > thead').append(
		'<tr>'+
		'<th scope="col">#</th>'+
		'<th scope="col">First name</th>'+
		'<th scope="col">Last name</th>'+
		'<th scope="col">Locality</th>'+
		'<th scope="col">Brand</th>'+
		'<th scope="col">Location</th>'+
		'<th scope="col">Email</th>'+
		'<th scope="col">Contact Number</th>'+
		'<th scope="col">Home Address</th>'+
		'<th scope="col">Remarks</th>'+
		'<th scope="col">Date Sent</th>'+
		'</tr>'
	);
}

function showTblFranchInq(lists){
	showFranchiseHeader();
	var ctr = 1;
	$('#tbl-content').empty();
	console.log(lists);
	// console.log(Object.keys(lists[0]).length);
	lists.forEach((item)=>{ 
		console.log(item);
		var date = moment(item.created_at).format('L');
		$('#tbl-content').append( 
			'<tr>'+
				'<td>'+ctr+'</td>'+
				'<td>'+item.first_name+'</td>'+
				'<td>'+item.last_name+'</td>'+
				'<td>'+item.locality+'</td>'+
				'<td>'+item.brand+'</td>'+
				'<td>'+item.proposed_location+'</td>'+
				'<td>'+item.email+'</td>'+
				'<td>'+item.contact_number+'</td>'+
				'<td>'+item.home_address+'</td>'+
				'<td>'+item.remarks+'</td>'+
				'<td>'+date+'</td>'+
			'</tr>'
		);
		ctr++;
	});
}

function showContactInq(){

	sort = $('#sort').val();

	var data = {
		password : ps,
		sort 	 : sort,
		limit    : limit,
		date_from: dFrom,
		date_to  : dTo
	};


	postWithHeader(api+routes.mailContactInquiry,data,function(response){
		console.log('showContactInq');
		console.log(response);
		if(response.success == false){
			if(response.status == 401){
				showWarning('Message',response.message,function(){});
				ps = null;
				auth();
				return;
			}
			showWarning(response.message);
			return;
		}

		if(dFrom == null || dTo == null){
			msg('Email list result was not filterd by Dates. Make sure you fill the two dates with valid date');
		}
		
		showTblContactInq(response.data);
	});	
}

function showContactInqHeader(){

	$('#tblData > thead').empty();
	$('#tblData > thead').append(
		'<tr>'+
		'<th scope="col">#</th>'+
		'<th scope="col">First name</th>'+
		'<th scope="col">Last name</th>'+
		'<th scope="col">Email</th>'+
		'<th scope="col">Contact Number</th>'+
		'<th scope="col">Subject</th>'+
		'<th scope="col" class="w-25">Message</th>'+
		'<th scope="col">Date Sent</th>'+
		'</tr>'
	);
}
  
function showTblContactInq(lists){
	showContactInqHeader();
	var ctr = 1;
	$('#tbl-content').empty();
	console.log(lists);
	// console.log(Object.keys(lists[0]).length);
	lists.forEach((item)=>{ 
		console.log(item);
		var date = moment(item.created_at).format('L');
		$('#tbl-content').append( 
			'<tr>'+
				'<td>'+ctr+'</td>'+
				'<td>'+item.first_name+'</td>'+
				'<td>'+item.last_name+'</td>'+
				'<td>'+item.email+'</td>'+
				'<td>'+item.contact_number+'</td>'+	
				'<td>'+item.subject+'</td>'+
				'<td>'+item.message+'</td>'+
				'<td>'+date+'</td>'+
			'</tr>'
		);
		ctr++;
	});
}