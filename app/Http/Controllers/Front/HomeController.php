<?php

namespace App\Http\Controllers\Front;

use App\Http\Controllers\Controller;
use App\Repositories\Repository;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function getHome()
    {

        return view('form');
    }

}
