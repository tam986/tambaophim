<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\CountryController;


Route::prefix('admin')->group(function () {
    Route::get('/dashboard', function () {
        return view('admin.dashboard');
    });

    Route::get('/comments', [CommentController::class, 'getAllComments']);

    Route::get('/countries', [CountryController::class, 'getAllCountries']);
    
});