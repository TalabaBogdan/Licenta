import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  //apiKey = '45e0157a-c4ea-4891-8322-0204893fcdd9';
  url = 'http://localhost:8080/';

  constructor(private http : HttpClient) {

  }

   getObservable(): Observable<any> {
    const headers= new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    return this.http.get(this.url,{'headers' : headers});
   }
}
