@extends('layouts.app')

@section('title','Accounts')

@section('content')
	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb"  style="font-size: .8em;  padding: 5px 0px 5px 10px; background-color: #3C3C3B;">
	    <li class="breadcrumb-item " aria-current="page" style=" color :#f2f2f2;">Franchise</li>
	    <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Accounts</li>
	  </ol>
	</nav>
	
	<div class="row">
		<div class="col-md-12">
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
				<table class="table table-striped table-responsive-lg table-sm w-100 table-dark" id="tblData">
					<thead class="fa-red">
						<tr style="color: red;">
							<th scope="col" width="5%">#</th>
							<th scope="col" width="20%" >Customer Code</th>
							<th scope="col" width="30%" >Token</th>
							<th scope="col" width="10%" >Status</th>
							<th scope="col" width="25%" >Last login</th>
							<th scope="col" width="10%" >Action</th>
						</tr>
					</thead>
					<tbody id="tbl-content"> 
					</tbody>
				</table>
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
			
		</div>
	</div>
@endsection

@section('custom_css')
<link rel="stylesheet" href="/css/plugins/datatables.min.css">
@endsection

@section('custom_js')
<script src="/js/plugins/datatables.min.js"></script>
<script src="/js/plugins/moment.js"></script>
<script src="/js/pages/franchise-accounts.js"></script>
@endsection