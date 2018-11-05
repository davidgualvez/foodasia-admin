@extends('layouts.app')

@section('title',"Customer's Cart")

@section('custom_css') 
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<link rel="stylesheet" href="/css/plugins/datatables.min.css">
@endsection

@section('custom_js') 
<script src="/js/plugins/moment.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/js/sweetalert.min.js"></script> 
<script src="/js/plugins/datatables.min.js"></script>
<script src="/js/pages/customers_cart.js"></script>
@endsection

@section('content')
	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb"  style="font-size: .8em;  padding: 5px 0px 5px 10px; background-color: #3C3C3B;">
	    <li class="breadcrumb-item " aria-current="page" style=" color :#f2f2f2;">Customer's</li>
	    <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Cart</li>
	  </ol>
	</nav>
	
	<div class="row">
		<div class="col-md-12">
            {{-- =========================== --}}
            <div class="dataTables_wrapper">
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div class="dataTables_length" id="">
							<label>Show 
								<select id="limit" aria-controls="tbl_shipment" class="custom-select custom-select-sm form-control form-control-sm">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
								</select> entries
							</label>
						</div>
					</div>
					<div class="col-sm-12 col-md-6">
						<div id="" class="dataTables_filter">
							<label>Search:
								<input id="search_val" type="search" class="form-control form-control-sm" placeholder="by customer code.." aria-controls="tbl_shipment">
							</label>
						</div>
					</div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-12">
                         <div >
                            <div class="list-group p-3" id="tbl-content">
                                {{-- <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                    <h5 class="mb-1">COPP0000</h5>
                                    <small> <strong  class="customer_ctr">...</strong></small>
                                    </div>
                                    <p class="mb-1">FoodFresh Global Corp.</p> 
                                    <div>
                                        <div class="container px-4">
                                            <table class="table table-striped table-responsive-lg table-sm w-100 table-dark" id="tblData">
                                                <thead class="fa-red" style="color: red;">
                                                    <tr>
                                                        <th scope="col" width="5%">#</th>
                                                        <th scope="col" class="40%">Product Name</th>
                                                        <th scope="col" class="30%">Product #</th>
                                                        <th scope="col" class="5%">Qty</th>
                                                        <th scope="col" class="10%">Price</th>
                                                        <th scope="col" width="10%">Created at</th>
                                                    </tr>
                                                </thead>
                                                <tbody id="tbl-content">
                                                    <tr>
                                                        <td>1</td>
                                                        <td>gualvezdavid@gmail.ciom</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                        <td>09/22/2018</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div> 
                                    </div>
                                </a>
                                <a href="#" class="list-group-item list-group-item-action flex-column align-items-start">
                                    <div class="d-flex w-100 justify-content-between">
                                        <h5 class="mb-1">List group item heading</h5>
                                        <small class="text-muted">3 days ago</small>
                                    </div>
                                    <p class="mb-1">FoodFresh Global Corp.</p>
                                     <div class="text-center">
                                        <h5>No Item on Cart...</h5>
                                    </div>
                                </a>  --}}
                            </div>
                        </div> 
                    </div>
                </div>
               
				<div class="row">
					<div class="col-sm-12 col-md-6">
						<div class="dataTables_length">
							page-<strong id="current_page">1</strong>
						</div>
					</div>
					<div class="col-sm-12 col-md-6">
						<nav aria-label="..." class="float-right">
						   <ul class="pagination pagination-sm">
						     <li class="page-item disabled"> 
						       <button class="page-link" id="prev_page_url">Previous</button>
						     </li> 
						     <li class="page-item">
						     	<button class="page-link" id="next_page_url">Next</button> 
						     </li>
						   </ul>
						 </nav> 
					</div>
				</div>
			</div>
            {{-- =========================== --}}
		</div>
	</div>
@endsection
