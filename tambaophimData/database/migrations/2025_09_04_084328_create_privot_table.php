<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
  public function up(): void
    {

        Schema::create('movie_genre', function (Blueprint $table) {
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->foreignId('genre_id')->constrained()->onDelete('cascade');
            $table->primary(['movie_id', 'genre_id']); // Khóa chính kép
        });

        Schema::create('movie_actor', function (Blueprint $table) {
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->foreignId('actor_id')->constrained()->onDelete('cascade');
            $table->primary(['movie_id', 'actor_id']);
        });

        Schema::create('movie_director', function (Blueprint $table) {
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->foreignId('director_id')->constrained()->onDelete('cascade');
            $table->primary(['movie_id', 'director_id']);
        });

        Schema::create('movie_country', function (Blueprint $table) {
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->foreignId('country_id')->constrained()->onDelete('cascade');
            $table->primary(['movie_id', 'country_id']);
        });

        Schema::create('movie_format', function (Blueprint $table) {
            $table->foreignId('movie_id')->constrained()->onDelete('cascade');
            $table->foreignId('format_id')->constrained()->onDelete('cascade');
            $table->primary(['movie_id', 'format_id']);
        });
    }



    /**
     * Reverse the migrations.
     */
       public function down(): void
    {
        Schema::dropIfExists('movie_genre');
        Schema::dropIfExists('movie_actor');
        Schema::dropIfExists('movie_director');
        Schema::dropIfExists('movie_country');
        Schema::dropIfExists('movie_format');
    }
};