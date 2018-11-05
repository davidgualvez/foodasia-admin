@extends('layouts.app')

@section('title','Home')

@section('content')
	<nav aria-label="breadcrumb">
	  <ol class="breadcrumb"  style="font-size: .8em;  padding: 5px 0px 5px 10px; background-color: #3C3C3B;">
	    <li class="breadcrumb-item active" aria-current="page" style=" color :#f2f2f2;">Home</li>
	  </ol>
	</nav>
@endsection

@section('custom_css')
@endsection

@section('custom_js')
<script src="/js/pages/dashboard.js"></script>  
@endsection