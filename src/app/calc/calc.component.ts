import { Component, OnInit } from "@angular/core";
import { RegistroService } from "../registro.service";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent implements OnInit {
  arrayPrimos = new Array();
  respuesta = false;
  form: any = {};

  constructor(private servicio: RegistroService) {}


  checkNumber(num) {
    if (num > 0 && num <= 200) {
      return true;
    } else if (num == null) return true;
  }

  llenarMatriz() {
    let primo;
    let totalPrimos = 0;

    for (
      let i = Math.min(this.form.inicial, this.form.final);
      i <= Math.max(this.form.inicial, this.form.final);
      i++
    ) {
      primo = 1;

      if (i == 0 || i == 1) {
        this.arrayPrimos[totalPrimos] = i;
        totalPrimos++;
      } else {
        for (let j = 2; j < i; j++) {
          if (i % j == 0) {
            primo = 0;
            break;
          }
        }
        if (primo == 1) {
          this.arrayPrimos[totalPrimos] = i;
          totalPrimos++;
        }
      }
    }
    this.respuesta = true;
    this.form.primos = this.arrayPrimos.length
    console.log(this.form)

    this.getregistro()
    alert(`Total de numeros primos = ${this.arrayPrimos.length}`);
  }

  getregistro() {
    this.servicio.createRegistro(this.form).subscribe(registro=>{
      console.log(registro)
    });
  }


  ngOnInit() {}
}
