<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/png" href="/images/favico.png"/>
	<title>@yield('title') | FoodasiaGroup</title>
	
	<!-- global css -->
	<link rel="stylesheet" href="/css/app.css"> <!-- default laravel  -->
	<link rel="stylesheet" href="/css/all.css"> <!-- font awesome  -->
	<link rel="stylesheet" href="/css/plugins/jquery.mCustomScrollbar.css" />	
	<link rel="stylesheet" href="/css/plugins/jquery-confirm.min.css" />
	<link rel="stylesheet" href="/css/plugins/alertify.min.css"/>
	<link rel="stylesheet" href="/css/plugins/default.min.css"/>
	<link rel="stylesheet" href="/css/master.css"> <!-- master  -->

	
	<!-- custom css -->
	@yield('custom_css')
</head>
<body>
	<div id="app" style="display: none;">
		<div class="wrapper">
			<!-- Sidebar -->
			@include('layouts.sidebar')
			<!-- Page Content -->
		   <div id="container-content">
		       <!-- We'll fill this with dummy content -->
		       <nav id="nav-top" class="navbar navbar-expand-lg fixed-top navbar-light bg-light bs-mat2 ">
		       	<div class="container-fluid">
		       		<button type="button" id="sidebarCollapse" class="btn">
		       			<i class="fas fa-bars"></i>
		       		</button>
		       		<img src="/images/fa-header.png" alt="" class="img-fluid" height="20px" width="100px">
		       		
		       	</div>
		       </nav>
		       <div id="content" class="pt-5">
			       	<div class="container pt-3" >
			       		 @yield('content')
			       	</div>
		   		   
		       </div>
		   </div>
		</div>
	</div> 
	
	<input type="text" id="api_url" value="{{config('app.api_url')}}" hidden="">
	<input type="text" id="api2_url" value="{{config('app.api2_url')}}" hidden="">
	<!-- global js -->

	{{-- <script src="/js/axios.min.js"></script> --}}
	<script src="/js/jquery.min.js"></script>
	{{-- <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script> --}}
	{{-- <script src="/js/app.js"></script> --}} 

	<script src="/js/plugins/alertify.min.js"></script>
	<script src="/js/plugins/jquery.mCustomScrollbar.concat.min.js"></script> 
	<script src="/js/plugins/jquery-confirm.min.js"></script> 
	<script src="/js/sweetalert.min.js"></script> 
	<script src="/js/settings.js"></script> 
	<!-- custom js -->
	@yield('custom_js')
	
</body>
</html>