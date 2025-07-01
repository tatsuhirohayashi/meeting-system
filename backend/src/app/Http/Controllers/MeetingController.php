<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Application;
use Illuminate\Support\Facades\Log;
use App\Http\Requests\ApplicationRequest;

class MeetingController extends Controller
{
    public function index()
    {
        try {
            $applications = Application::all();

            Log::info("申込全件取得成功");

            return response()->json([
                'code' => 200,
                'meetings' => $applications->map(function ($application) {
                    return [
                        'id' => (string) $application->id,
                        'applicationDate' => $application->application_date,
                        'applicant' => $application->applicant,
                        'consultationOverview' => $application->consultation_overview,
                        'consultationContent' => $application->consultation_content,
                        'createdAt' => $application->created_at->toIso8601String(),
                        'updatedAt' => $application->updated_at->toIso8601String(),
                    ];
                })->toArray(),
                'total' => $applications->count(),
                'message' => null,
            ], 200);
        } catch (\Exception $e) {
            Log::error("申込取得エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'applications' => [],
                'total' => 0,
                'message' => 'サーバーエラーが発生しました',
            ], 500);
        }
    }

    public function show($id)
    {
        try {
            $application = Application::find($id);

            if (!$application) {
                return response()->json([
                    'code' => 404,
                    'message' => '該当の申込が見つかりません',
                ], 404);
            }

            Log::info("申込1件取得成功");

            return response()->json([
                'code' => 200,
                'id' => (string) $application->id,
                'applicationDate' => $application->application_date,
                'applicant' => $application->applicant,
                'consultationOverview' => $application->consultation_overview,
                'consultationContent' => $application->consultation_content,
                'createdAt' => $application->created_at->toIso8601String(),
                'updatedAt' => $application->updated_at->toIso8601String(),
                'messsage' => null,
            ], 200);
        } catch (\Exception $e) {
            Log::error("申込取得エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'applications' => [],
                'message' => 'サーバーエラーが発生しました'
            ], 500);
        }
    }

    public function store(ApplicationRequest $request)
    {
        try {
            Application::create([
                'application_date' => $request->input('applicationDate'),
                'applicant' => $request->input('applicant'),
                'consultation_overview' => $request->input('consultationOverview'),
                'consultation_content' => $request->input('consultationContent'),
            ]);

            Log::info("申込作成成功");

            return response()->json([
                'code' => 201,
                'message' => '申込作成成功',
            ], 201);
        } catch (\Exception $e) {
            Log::error("申込作成エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'message' => 'サーバーエラーが発生しました',
            ], 500);
        }
    }

    public function update(ApplicationRequest $request, $id)
    {
        try {
            $application = Application::find($id);

            if (!$application) {
                return response()->json([
                    'code' => 404,
                    'message' => '申込が見つかりません'
                ], 404);
            }

            $application->update([
                'application_date' => $request->input('applicationDate'),
                'applicant' => $request->input('applicant'),
                'consultation_overview' => $request->input('consultationOverview'),
                'consultation_content' => $request->input('consultationContent'),
            ]);

            Log::info("申込更新成功");

            return response()->json([
                'code' => 200,
                'message' => "申込更新成功",
            ], 200);
        } catch (\Exception $e) {
            Log::error("申込更新エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'message' => "サーバーエラーが発生しました"
            ], 500);
        }
    }

    public function destroy($id)
    {
        try {
            $application = Application::find($id);

            if (!$application) {
                return response()->json([
                    'code' => 404,
                    'message' => "該当の申込が見つかりません",
                ], 404);
            }

            $application->delete();

            Log::info("申込削除成功");

            return response()->json([
                'code' => 200,
                'message' => "申込削除成功"
            ], 200);
        } catch (\Exception $e) {
            Log::error("申込削除エラー: {$e->getMessage()}");

            return response()->json([
                'code' => 500,
                'message' => "サーバーエラーが発生しました"
            ], 500);
        }
    }
}
