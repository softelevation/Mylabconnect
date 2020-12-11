<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Ticket;
use Auth;
use App\Traits\ResponseTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AdminController extends Controller
{
	// protected $guard = 'admin';
	use ResponseTrait;
	
    public function index(){
		
		return view('dashboard');
	}
	
	public function addDoctor(){
		
		return view('add-doctor');
	}
	
	public function addDoctorPost(Request $request){
		try{
			$input = array(
							'name'=>$request->first_name.' '.$request->last_name,'email'=>$request->email,
							'password'=>Hash::make($request->password),'roll_id'=>$request->roll_id,
							'address'=>$request->address
						);
			User::insert($input);
			$response['message'] = 'User insert successfully';
			$response['url'] = 'users';
			return response($this->getSuccessResponse($response));
		}catch(\Exception $e){
            return response($this->getErrorResponse($e->getMessage()));
        }
	}
	
	public function doctors(){
		$doctors = User::all();
		return view('doctors')->with('doctors',$doctors);
	}
	
	public function supportTicket(){
		$tickets = Ticket::all();
		return view('support-ticket')->with('tickets',$tickets);
	}
	
	public function addTicket(){
		return view('add-ticket');
	}
	
	public function addTicketPost(Request $request){
		try{
			$input = array_except($request->all(),array('_token'));
			$input['user_id'] = Auth::user()->id;
			Ticket::insert($input);
			$response['message'] = 'Ticket insert successfully';
			$response['url'] = 'support-ticket';
			return response($this->getSuccessResponse($response));
		}catch(\Exception $e){
            return response($this->getErrorResponse($e->getMessage()));
        }
	}
}
