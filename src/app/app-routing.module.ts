import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: "", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "createItem", 
    component: ItemCreateComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "getItems", 
    component: ItemListComponent,
    canActivate:[AuthGuard]
  },
  {
    path: "warehouse", 
    component: WarehouseComponent,
    canActivate:[AuthGuard]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
