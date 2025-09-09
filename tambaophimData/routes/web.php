<?php

use Illuminate\Support\Facades\Route;

Route::group([], function () {
    require __DIR__ . '/frontend.php';
    require __DIR__ . '/backend.php';
});

Route::get('/', function () {
    return view('welcome');
});
