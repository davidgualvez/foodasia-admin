<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', 					'PageController@dashboard'); 
Route::get('/login', 				'PageController@login');
Route::get('/franchise/accounts', 	'PageController@franchiseAccounts');
Route::get('/change-password', 		'PageController@changePassword');
Route::get('/emails', 				'PageController@emails');
Route::get('/customer/carts',       'PageController@cartsPerCustomer');