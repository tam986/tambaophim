<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use app\Models\Movie;

class Country extends Model
{
    protected $fillable = ['name', 'status'];

    public function movies(): BelongsToMany
    {
        return $this->belongsToMany(Movie::class, 'movie_country')->withTimestamps();
    }
}


