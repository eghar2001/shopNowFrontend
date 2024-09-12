import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component.js';

export const routes: Routes = [
  { path: '', component: UserComponent }, // Ruta por defecto
  { path: 'mis-compras', component: MyPurchasesComponent }, // Ruta para Mis Compras
];
