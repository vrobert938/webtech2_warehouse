import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { WarehouseComponent } from './components/warehouse/warehouse.component';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { ItemCreateComponent } from './components/item-create/item-create.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemUpdateComponent } from './components/item-update/item-update.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WarehouseComponent,
    ItemCreateComponent,
    ItemListComponent,
    ItemUpdateComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [AuthInterceptorProvider,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue:
      {
        appearance: 'fill',
        floatLabel: 'always'
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
