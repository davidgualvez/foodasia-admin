@extends('layouts.app')

@section('title','Change Password')

@section('content')
	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb"  style="font-size: .8em;  padding: 5px 0px 5px 10px; background-color: #3C3C3B;">
	    <li class="breadcrumb-item " aria-current="page" style=" color :#f2f2f2;">My Account</li>
	    <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Change Password</li>
	  </ol>
	</nav>
	
	<div class="row">
		<div class="col-md-12">
 
		</div>
	</div>
@endsection

@section('custom_css')
<link rel="stylesheet" href="/css/plugins/datatables.min.css">
@endsection

@section('custom_js')
<script src="/js/plugins/datatables.min.js"></script>
<script src="/js/plugins/moment.js"></script>
{{-- <script src="/js/pages/franchise-accounts.js"></script> --}}
@endsection