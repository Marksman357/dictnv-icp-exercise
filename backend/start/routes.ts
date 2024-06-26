import { Router } from 'express';

import ApisController from 'App/Controllers/Http/ApisController';
import UsersController from 'App/Controllers/Http/UsersController';

import isAuth from 'App/Middleware/Auth';

const Route = Router();

/*
|--------------------------------------------------------------------------
| Authenticated Routes
|--------------------------------------------------------------------------
*/

// USER
Route.get('/user/me', isAuth, UsersController.me);
Route.post('/user/register', isAuth, UsersController.register);
Route.post('/user/update', isAuth, UsersController.update);


/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/

Route.get('/health', ApisController.health);
Route.get('/config', ApisController.config);

Route.get('/uploads/:filename', ApisController.readupload);
Route.post('/upload', isAuth, ApisController.testupload);
Route.get('/uploads/v2/:filename', ApisController.readupload_v2);

Route.get('/user/:username/info', UsersController.view_info_of_user_by_public);

export { Route as routes };