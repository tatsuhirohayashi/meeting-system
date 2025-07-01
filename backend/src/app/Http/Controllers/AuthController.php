<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\SignupRequest;
use App\Http\Requests\SigninRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function signup(SignupRequest $request)
    {
        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);
            Log::info("トークン取得前");
            $token = JWTAuth::fromUser($user);

            Log::info("登録成功");

            return response()->json([
                'code' => 201,
                'token' => $token,
                'user' => [
                    'id' => (string) $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => $user->created_at->toIso8601String(),
                    'updated_at' => $user->updated_at->toIso8601String(),
                ],
                'message' => null,
            ], 201);
        } catch (\Exception $e) {
            Log::error("登録エラー: {$e->getMessage()}");
            return response()->json([
                'code' => 500,
                'message' => 'サーバーエラーが発生しました',
            ], 500);
        }
    }

    public function signin(SigninRequest $request)
    {
        try {
            $credentials = $request->only(['email', 'password']);

            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json([
                    'code' => 401,
                    'message' => 'メールアドレスまたはパスワードが正しくありません',
                ], 401);
            }

            $user = JWTAuth::user();

            Log::info("ログイン成功");

            return response()->json([
                'code' => 200,
                'token' => $token,
                'user' => [
                    'id' => (string) $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => $user->created_at->toIso8601String(),
                    'updated_at' => $user->updated_at->toIso8601String(),
                ],
                'message' => null,
            ], 200);
        } catch (\Exception $e) {
            Log::error("ログインエラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'message' => 'サーバーエラーが発生しました',
            ], 500);
        }
    }

    public function authentication(Request $request)
    {
        try {
            $user = Auth::user(); // JWTトークンに基づくユーザー

            if (!$user) {
                return response()->json([
                    'code' => 401,
                    'message' => '認証されていません',
                ], 401);
            }

            Log::info("認証確認成功");

            return response()->json([
                'code' => 200,
                'token' => $request->bearerToken(),
                'user' => [
                    'id' => (string) $user->id,
                    'name' => $user->name,
                    'email' => $user->email,
                    'created_at' => $user->created_at->toIso8601String(),
                    'updated_at' => $user->updated_at->toIso8601String(),
                ],
                'message' => null,
            ], 200);
        } catch (\Exception $e) {
            Log::error("認証確認エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'message' => 'サーバーエラーが発生しました',
            ], 500);
        }
    }
}
