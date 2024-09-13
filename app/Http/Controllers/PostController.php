<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;
use App\Http\Resources\PostResource;

class PostController extends Controller
{
    public function index()
    {
        //$posts = Post::all();
        $posts = Post::with('user')->get();
        return Inertia::render('Posts/Index', [
            //'posts' => $posts
            'posts' => PostResource::collection($posts)
        ]);
    }
}
