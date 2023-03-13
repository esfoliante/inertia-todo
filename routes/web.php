<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\TasksController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/tasks', [TasksController::class, 'index']);

Route::prefix('/tasks')->group(function () {
    Route::get('/', [TasksController::class, 'index'])->name('tasks.index');
    Route::get('/create', [TasksController::class, 'create'])->name('tasks.create');
    Route::get('/{id}', [TasksController::class, 'edit'])->name('tasks.edit');

    Route::post('/', [TasksController::class, 'store'])->name('tasks.store');
    Route::post('/change-state', [TasksController::class, 'change_state'])->name('tasks.change-state');

    Route::patch('/{id}', [TasksController::class, 'update'])->name('tasks.update');

    Route::delete('/{id}', [TasksController::class, 'destroy'])->name('tasks.destroy');
})->middleware(['auth', 'verified']);

require __DIR__.'/auth.php';
