<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\Country;
use App\Models\Comment;

class Movie extends Model
{
    protected $fillable = ['title', 'tags', 'description', 'video_quality', 'status', 'cover_image', 'banner_image', 'trailer_link' ];

    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
    public function countries(): BelongsToMany
    {
        return $this->belongsToMany(Country::class, 'movie_country')
                    ->withTimestamps();
    }

}