<?php

use Illuminate\Support\Facades\Route;

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/form', function () {
    return view('form');
});
Route::get('/table', function () {
    return view('table');
});
// Route::middleware(['auth:sanctum', 'verified'])->get('/dashboard', function () {
    // return view('dashboard');
// })->name('dashboard');


// Route::group(['prefix'=>'operator'], function () {
	

// 

Route::group(['middleware'=>['auth:sanctum']], function () {
	Route::get('/dashboard', function() {
		return view('dashboard');
	})->name('dashboard');
	
	Route::get('/add-user', 'AdminController@addDoctor');
	Route::post('/add-user', 'AdminController@addDoctorPost');
	Route::get('/users', 'AdminController@doctors');
	Route::get('/support-ticket', 'AdminController@supportTicket');
	Route::get('/add-ticket', 'AdminController@addTicket');
	Route::post('/add-ticket', 'AdminController@addTicketPost');
});	
	
	
