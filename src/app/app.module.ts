import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CanvasBoxComponent } from './components/canvas-box/canvas-box.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, CanvasBoxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
