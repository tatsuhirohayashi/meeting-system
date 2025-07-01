<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ApplicationsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('applications')->insert([
            [
                'application_date' => '2025-06-01',
                'applicant' => '鈴木一郎',
                'consultation_overview' => 'フロントの開発相談',
                'consultation_content' => '優先的にテストコードをどこに入れたらいいかわからない。',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'application_date' => '2025-06-02',
                'applicant' => '佐藤太郎',
                'consultation_overview' => 'フロントの設計相談',
                'consultation_content' => '適切なコンポーネントの設計方法がわからない。',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
