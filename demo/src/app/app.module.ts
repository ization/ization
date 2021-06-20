import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreDemoModule } from './core-demo/core-demo.module';
import { TranslateDemoModule } from './translate-demo/translate-demo.module';
import { TemporalDemoModule } from './temporal-demo/temporal-demo.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CoreDemoModule,
    TemporalDemoModule,
    TranslateDemoModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
