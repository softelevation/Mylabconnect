<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
	// protected $guard = 'admin';
	
    public function index(){
		
		return view('dashboard');
	}
	
	public function addDoctor(){
		
		return view('add-doctor');
	}
	
	public function addDoctorPost(Request $request){
		
		$input = array(
						'name'=>$request->first_name.' '.$request->last_name,'email'=>$request->email,
						'password'=>Hash::make($request->password),'roll_id'=>$request->roll_id,
						'address'=>$request->address
					);
		User::insert($input);
		return redirect('add-doctor');
	}
	
	public function doctors(){
		$doctors = User::all();
		return view('doctors')->with('doctors',$doctors);
	}
}
