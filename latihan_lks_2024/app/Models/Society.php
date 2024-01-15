<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Society extends Model
{
    use HasFactory;

    protected $table = "societies";
    protected $primaryKey = "id";
    protected $guarded = [];
    public $timestamps = false;
}
