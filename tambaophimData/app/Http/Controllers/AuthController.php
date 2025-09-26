<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Cache;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
        'name'     => 'required|string|max:255',
        'email'    => 'required|string|email|max:255|unique:users,email',
        'password' => 'required|string|confirmed',
        'phone'    => 'nullable|string|max:15',
        'address'  => 'nullable|string|max:255',
        ]);
        if ($validator->fails()) {
        return response()->json([
            'message' => 'Validation error',
            'errors'  => $validator->errors(),
        ], 422);
        }   
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
            'phone' => $request->phone,
            'address' => $request->address,
        ]);
        if (!$user) {
            return response()->json([
                'message' => 'User registration failed'
            ], 500);
        }
        return response()->json([
            'message' => 'User registered successfully',
            'data' => $user
        ], 201);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);

        $user = User::where('email', $request->email)->first();

        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'message' => 'Login successful',
            'access_token' => $token,
            'token_type' => 'Bearer',
            'data' => $user
        ], 200);
    }
    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'message' => 'Logout successful'
        ], 200);
    }

    public function sendResetLinkEmail(Request $request)
    {
        $request->validate(['email' => 'required|email']);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'User with this email does not exist'
            ], 404);
        }
        else{
            $otp = rand(000000, 999999);
            Cache::put('otp_'.$request->email, $otp, now()->addMinutes(5));
            Mail::to($request->email)->send(new \App\Mail\OtpMail($otp));
            return response()->json([
                'message' => 'OTP sent to your email',
                'otp' => $otp
            ], 200); 
        }
    }
    public function verifyOtp(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'otp' => 'required|digits:6',
        ]);

        $cachedOtp = Cache::get('otp_'.$request->email);

        if ($cachedOtp && $cachedOtp == $request->otp) {
            Cache::forget('otp_'.$request->email);
            return view('reset-password', ['email' => $request->email]);
        } else {
            return response()->json([
                'message' => 'Invalid or expired OTP'
            ], 400);
        }
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::where('email', $request->email)->first();
        if (!$user) {
            return response()->json([
                'message' => 'User with this email does not exist'
            ], 404);
        }
        
        $user->password = Hash::make($request->password);
        $user->save();

        return response()->json([
            'message' => 'Password reset successful'
        ], 200);
    }
}

