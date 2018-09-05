import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { CalcComponent } from "./calc/calc.component";
import { RegistroService } from "./registro.service";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [AppComponent, CalcComponent],
  imports: [BrowserModule, FormsModule,HttpModule],
  providers: [RegistroService],
  bootstrap: [AppComponent]
})
export class AppModule {}
