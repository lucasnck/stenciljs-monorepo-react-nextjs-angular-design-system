import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CoreComponentsModule } from '../../../angular/src/core-components.module';

// import { applyPolyfills, defineCustomElements } from '@ds/core/loader';

// applyPolyfills().then(() => {
//   defineCustomElements(window);
// });

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CoreComponentsModule
  ],
  providers: [],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})

export class AppModule { }