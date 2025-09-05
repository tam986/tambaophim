<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // ===== USERS =====
        DB::table('users')->insert([
            [
                'name' => 'Admin',
                'email' => 'admin@example.com',
                'password' => bcrypt('123456'),
                'role' => 1,
                'phone' => '0123456789',
                'address' => '123 Admin St',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'User Test',
                'email' => 'user@example.com',
                'password' => bcrypt('123456'),
                'phone' => '0987654321',
                'address' => '456 User Ave',
                'role' => 0,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // ===== GENRES =====
        DB::table('genres')->insert([
            ['name' => 'Action', 'status' => 1],
            ['name' => 'Comedy', 'status' => 2],
            ['name' => 'Drama', 'status' => 3],
        ]);

        // ===== COUNTRIES =====
        DB::table('countries')->insert([
            ['name' => 'USA', 'status' => 1],
            ['name' => 'Korea', 'status' => 2],
            ['name' => 'Vietnam', 'status' => 3],
        ]);

        // ===== FORMATS =====
        DB::table('formats')->insert([
            ['name' => 'HD', 'status' => 1],
            ['name' => 'FullHD', 'status' => 2],
            ['name' => '4K', 'status' => 3],
        ]);

        // ===== ACTORS =====
        DB::table('actors')->insert([
            ['name' => 'Actor A', 'description' => 'Famous actor','date_of_birth' => '1980-01-01', 'gender' => 1],
            ['name' => 'Actor B', 'description' => 'Popular actress', 'date_of_birth' => '1990-01-01', 'gender' => 0],
        ]);

        // ===== DIRECTORS =====
        DB::table('directors')->insert([
            ['name' => 'Director A', 'description' => 'Hollywood director','date_of_birth' => '1975-01-01', 'gender' => 1],
        ]);

        // ===== MOVIES =====
        DB::table('movies')->insert([
            [
                'title' => 'Avengers: Endgame',
                'tags' => 'marvel,action,superhero',
                'description' => 'Final battle against Thanos.',
                'video_quality' => 'HD',
                'status' => 1,
                'cover_image' => 'cover.jpg',
                'banner_image' => 'banner.jpg',
                'trailer_link' => 'https://youtube.com/example',
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

        // ===== EPISODES =====
        DB::table('episodes')->insert([
            [
                'movie_id' => 1,
                'episode_number' => 1,
                'video_link' => 'https://example.com/video1.mp4',
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // ===== COMMENTS =====
        DB::table('comments')->insert([
            [
                'user_id' => 2,
                'movie_id' => 1,
                'content' => 'Phim này hay quá!',
                'status' => 1,
                'created_at' => now(),
                'updated_at' => now(),
            ]
        ]);

        // ===== PIVOT =====
        DB::table('movie_genre')->insert([
            ['movie_id' => 1, 'genre_id' => 1], // Action
        ]);

        DB::table('movie_actor')->insert([
            ['movie_id' => 1, 'actor_id' => 1],
            ['movie_id' => 1, 'actor_id' => 2],
        ]);

        DB::table('movie_director')->insert([
            ['movie_id' => 1, 'director_id' => 1],
        ]);

        DB::table('movie_country')->insert([
            ['movie_id' => 1, 'country_id' => 1], // USA
        ]);

        DB::table('movie_format')->insert([
            ['movie_id' => 1, 'format_id' => 1], // HD
        ]);
    }
}
