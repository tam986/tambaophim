<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    public function getAllComments()
    {
        $comments = Comment::with('user', 'movie')->get();
        try{
            return response()->json([
            "message" => "Comments retrieved successfully",
            "data" => $comments
        ], 200);
        }catch(\Exception $e){
            return response()->json([
                "message" => "An error occurred while retrieving comments",
                "error" => $e->getMessage()
            ], 500);
        } 
    }
}