import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private http: Http) { }

  // url = "http://localhost:3000/"
  url = '/'


  createRegistro(obj) :Observable<String> {
    console.log(obj)
    return this.http
      .post(this.url + "new", obj)
      .pipe(map((res: Response) => res.json()));
  }



}
