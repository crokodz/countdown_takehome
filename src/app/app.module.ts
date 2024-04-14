import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { HttpClientModule } from '@angular/common/http';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProductItemComponent } from './components/product-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent,ProductItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 50, logOnly: true }),
    EffectsModule.forRoot([ProductEffects]),
    FormsModule
  ],

  providers: [provideClientHydration()],
  bootstrap: [AppComponent]
})
export class AppModule { }
