<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Country;

class CountryController extends Controller
{
    public function getAllCountries()
    {
        try {
            $countries = Country::all();
            return response()->json([
                'message' => 'Countries retrieved successfully',
                'data' => $countries
            ], 200);
        } catch (Exception $e) {
            return response()->json([
                'message' => 'Error retrieving countries',
                'error' => $e->getMessage()
            ], 500);
        }
    }
    
}