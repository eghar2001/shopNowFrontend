import { Routes } from '@angular/router';
import { MainMenuComponent } from './components/main-menu/main-menu.component.js';

export const routes: Routes = [
    {
        path:'home',
        loadComponent: () =>  import('./components/main-menu/main-menu.component.js').then(c => c.MainMenuComponent)
    },
    {
        path:'login',
        loadComponent: () => import ('./components/login/login.component.js').then(c => c.LoginComponent)
    },
    {
      path:'register',
      loadComponent: () => import ('./components/register/register.component.js').then(c => c.RegisterComponent)
    },
    {
        path:'user',
        loadComponent: () => import('./components/user/user.component.js').then(c => c.UserComponent)
    },

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }

];
