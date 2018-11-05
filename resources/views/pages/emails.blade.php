@extends('layouts.app')

@section('title','Change Password')

@section('content')
	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb"  style="font-size: .8em;  padding: 5px 0px 5px 10px; background-color: #3C3C3B;">
	    <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Emails</li>
	    {{-- <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Change Password</li> --}}
	  </ol>
	</nav>
	
	<div class="row">
		<div class="col-md-12"> 
			<div class="container mt-3" id="content" style="" >
				<div class="row d-flex justify-content-center">
					<div class="col text-right">
						<button class="btn btn-primary btn-sm" id="nani">Export to Excel</button>
					</div>
				</div>
				<div class="row pt-1 pb-2 mt-3" >
					<div class="col-md-4">
						<div class="form-group">
							<label for="" class="col-form-label text-light">Sort</label>
							<select name="" id="function" class="form-control form-control-sm">
								<option value="s">Subscribers</option>
								<option value="ci">Contact Inquiry</option>
								<option value="fi">Franchise Inquiry</option>
							</select>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="col-form-label text-light">Sort</label>
								<select name="" id="sort" class="form-control form-control-sm">
									<option value="asc">ASC (date)</option>
									<option value="desc">DESC (date)</option>
							</select>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="col-form-label text-light">Limit</label>
							<select name="" id="limit" class="form-control form-control-sm">
									<option value="10">10</option>
									<option value="25">25</option>
									<option value="50">50</option>
									<option value="100">100</option>
							</select>
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="col-form-label text-light">Date From</label>
							<input type="text" id="datepicker_from" class="form-control form-control-sm">
						</div>
					</div>
					<div class="col-md-2">
						<div class="form-group">
							<label for="" class="col-form-label text-light">Date To</label>
							<input type="text" id="datepicker_to" class="form-control form-control-sm">
						</div>
					</div>
				</div>
				
				<div class="">
					<div class="container px-4">
						<table class="table table-striped table-responsive-lg table-sm w-100 table-dark" id="tblData">
							<thead class="fa-red" style="color: red;" >
							</thead>
							<tbody id="tbl-content">

							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
@endsection

@section('custom_css')
<link rel="stylesheet" href="/css/plugins/datatables.min.css">
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
@endsection

@section('custom_js')
<script src="/js/plugins/datatables.min.js"></script>
<script src="/js/plugins/moment.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="/js/sweetalert.min.js"></script> 
<script src="/js/pages/emails.js"></script>
@endsection