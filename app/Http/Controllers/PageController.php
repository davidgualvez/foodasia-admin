<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PageController extends Controller
{
    //
	 public function login(){
    	return view('login');
    }

    public function dashboard(){
    	return view('dashboard');
    }

    public function franchiseAccounts(){
    	return view('pages.franchise-accounts'); 
    } 

    public function changePassword(){
        return view('pages.change-password'); 
    } 

    public function emails(){
        return view('pages.emails'); 
    } 

    public function cartsPerCustomer(){
        return view('pages.customers_cart');
    }
}
