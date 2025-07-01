<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MeetingController;
use App\Http\Controllers\AuthController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('v1')->group(function () {
    // --- 認証系API ---
    Route::post('/auth/signup', [AuthController::class, 'signup']); // ユーザー登録
    Route::post('/auth/login', [AuthController::class, 'signin']);       // ログイン
    Route::post('/auth/authentication', [AuthController::class, 'authentication'])      // ログイン認証
        ->middleware('auth:api'); // ← JWT認証が必要（トークン必須）

    // --- Meeting関連API ---
    Route::middleware('auth:api')->group(function () {
        Route::get('/meetings', [MeetingController::class, 'index']);       // 一覧
        Route::get('/meetings/{id}', [MeetingController::class, 'show']);   // 詳細
        Route::post('/meetings', [MeetingController::class, 'store']);      // 作成
        Route::put('/meetings/{id}', [MeetingController::class, 'update']); // 更新
        Route::delete('/meetings/{id}', [MeetingController::class, 'destroy']); // 削除
    });
});
