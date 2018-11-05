<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="shortcut icon" type="image/png" href="/images/favico.png"/>
	<title>Admin| FoodasiaGroup</title>
	
	<!-- global css -->
	<link rel="stylesheet" href="/css/app.css">
	<link rel="stylesheet" href="/css/all.css">
	<link rel="stylesheet" href="/css/master.css">
	
	{{-- custom --}} 
	<!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
	<style type="text/css">
		 html, body {
            background-color: #383838;
            color: #636b6f;
            font-family: 'Nunito', sans-serif;
            font-weight: 200; 
            margin: 0;
        }
	</style>
</head>
<body>
	<div id="app" style="display: none;">

		<div class="container h-100">
		  <div class="row h-100 justify-content-center align-items-center">
		    <div class="col-6" style="margin-top: 15%;">
				<div class="mb-3" style="margin-bottom: 0px">
				    <img src="/images/fa-header.png" alt="" class="img-fluid">
				</div>
				<div style="text-align: center; color: #f2f2f2; padding: 10px;">
					<h2>Login</h2>
				</div>
			    <div class="form-group">
			       {{--  <label for="formGroupExampleInput">&nbsp;</label> --}}
			        <input type="text" class="form-control is-invalid" id="username" placeholder="Enter Username">
			    </div>
			    <div class="form-group">
			        {{-- <label for="formGroupExampleInput2">&nbsp;</label> --}}
			        <input type="password" class="form-control is-invalid" id="password" placeholder="Enter Password">
			    </div>
			    <button id="btn_login" type="button" class="btn btn-danger float-right">Login</button>
		    </div>   
		  </div>
		</div>
	</div>
	 
	<input type="text" id="api_url" value="{{config('app.api_url')}}" hidden="">
	{{-- global js --}}
	<script src="/js/axios.min.js"></script>
	<script src="/js/jquery.min.js"></script> 
	<script src="/js/sweetalert.min.js"></script>
	{{-- <script src="/js/app.js"></script> --}}
	<script src="/js/settings.js"></script>
	{{-- custom js --}}
	<script src="/js/pages/login.js"></script>

</body>
</html>