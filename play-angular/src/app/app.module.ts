import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product-component/product-component.component';
import {FormsModule} from '@angular/forms'
import { ConvertToSpace } from './shared/convert-to-space.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent,
    ConvertToSpace
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
