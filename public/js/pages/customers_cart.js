$(document).ready(function () {
    if (!isLogin()) {
        showWarning('Warning', 'Please login to access this page');
        setTimeout(function () {
            window.location.href = "/login";
        }, 1500);
    } else {
        $('#app').css('display', 'block');
    }
    

    paginate();
    limitOnChange();
    searchValOnChange();
    btnNext();
    btnPrev();
});


//pagination=========================
function limitOnChange() {
    $('#limit').on('change', function () {
        paginate();
    });
}

function searchValOnChange() {
    $('#search_val').on('change', function () {
        paginate();
    });
}

var current_page = null;
var prev_page_url = null;
var next_page_url = null;

function paginate() {
    var limit = $('#limit').val();
    var search_val = $('#search_val').val();
    var data = {
        search_val: search_val,
        limit: limit
    }

    var url = null;

    if (current_page == null) {
        current_page = 1;
    }

    postWithHeader(api + routes.customer.carts + '?page=' + current_page, data, function (response) {
        current_page = response.data.current_page;
        $('#current_page').html(current_page);

        if (response.data.next_page_url == null) {
            $('#next_page_url').parent().addClass('disabled');
        } else {
            $('#next_page_url').parent().removeClass('disabled');
        }

        if (response.data.prev_page_url == null) {
            $('#prev_page_url').parent().addClass('disabled');
        } else {
            $('#prev_page_url').parent().removeClass('disabled');
        }
        dataDisplayer(response.data.data, response.data.from);
    });
}

function btnNext() {
    $('#next_page_url').on('click', function () {
        current_page++;
        paginate();
    });
}

function btnPrev() {
    $('#prev_page_url').on('click', function () {
        current_page--;
        paginate();
    });
}

function dataDisplayer(data, from) {
    $('#tbl-content').empty();

    if (from == null) {
        $('#current_page').html('Nothing to display...');
        return;
    }

    $.each(data, function (key, value) { 
        var carts = value.cart;
        console.log(carts.length);

        if(carts.length == 0){
            $('#tbl-content').append(
                '<a href = "#" class="list-group-item list-group-item-action flex-column align-items-start">'+
                    '<div class = "d-flex w-100 justify-content-between" >'+
                        '<h5 class="mb-1" > '+value.code+' </h5> '+
                        '<small class = "text-muted" > '+from+' </small> '+
                    '</div> '+
                    '<p class="mb-1" > '+value.company+' </p> '+
                    '<div class="text-center">'+
                    '<h5> No Item on Cart!</h5> '+
                    '</div> '+
                '</a>'
            );
        }else{
            var cartss = '';
            cartss += 
            '<table class="table table-striped table-responsive-lg table-sm w-100 table-dark" id="tblData">' +
                '<thead class="fa-red" style="color: red;">' +
                    '<tr>' +
                        '<th scope="col" width="5%">#</th>' +
                        '<th scope="col" class="30%">Product Name</th>' +
                        '<th scope="col" class="30%">Product #</th>' +
                        '<th scope="col" class="5%">Qty</th>' +
                        '<th scope="col" class="10%">Price</th>' +
                        '<th scope="col" width="20%">Created at</th>' +
                    '</tr>' +
                '</thead>' +
                '<tbody id="tbl-content">';

            $.each(carts, function (key, item) {
                var created = moment(item.created_at);
                cartss += 
                '<tr>' +
                    '<td>'+(key+1)+'</td>' +
                    '<td>'+item.part_desc+'</td>' +
                    '<td>'+item.part_no+'</td>' +
                    '<td>'+item.qty+'</td>' +
                    '<td>'+item.price+'</td>' +
                    '<td>'+created.format('lll')+'</td>' +
                '</tr>';
            }); 
            cartss += '</tbody>'+'</table>';

            $('#tbl-content').append(
                '<a href = "#" class="list-group-item list-group-item-action flex-column align-items-start">' +
                '<div class = "d-flex w-100 justify-content-between" >' +
                '<h5 class="mb-1" > ' + value.code + ' </h5> ' +
                '<small class = "text-muted" > ' + from + ' </small> ' +
                '</div> ' +
                '<p class="mb-1" > ' + value.company + ' </p> ' +
                    '<div>'+
                        '<div class="container px-4">'+
                            cartss+
                        '</div> ' +
                    '</div> ' +
                '</a>'
            );
            //console.log(cartss);
        }
         
        from++;  
    });
}
//end of pagination================