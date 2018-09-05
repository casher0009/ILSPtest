import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-calc",
  templateUrl: "./calc.component.html",
  styleUrls: ["./calc.component.css"]
})
export class CalcComponent implements OnInit {
  constructor() {}
  num1;
  num2;
  arrayPrimos = new Array();
  respuesta = false
  checkNumber(num) {
    if (num > 0 && num <= 200) {
      return true;
    } else if (num == null) return true;
  }

  llenarMatriz() {
    var primo;
    var totalPrimos = 0;

    for (
      var i = Math.min(this.num1, this.num2);
      i <= Math.max(this.num1, this.num2);
      i++
    ) {
      primo = 1;

      if (i == 0 || i == 1) {
        this.arrayPrimos[totalPrimos] = i;
        totalPrimos++;
      } else {
        for (var j = 2; j < i; j++) {
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
    this.respuesta=true
    alert(`Total de numeros primos = ${this.arrayPrimos.length}`);
  }

  ngOnInit() {
    new CalcComponent()
  }
}
