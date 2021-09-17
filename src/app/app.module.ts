import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ProductComponent} from './components/product/product.component';
import {NavBarProductComponent} from './components/product/nav-bar-product/nav-bar-product.component';
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {StoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";
import {productReducer} from "./ngrx/products/product.reducer";
import {ProductEffects} from "./ngrx/products/product.effects";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    NavBarProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({productsState: productReducer}),
    EffectsModule.forRoot([ProductEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
