import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(
    private http: HttpClient,
  ) { }


  public get = (url: string, headers?: HttpHeaders): Observable<any> => {
    console.log(headers);
    return this.http.get(url, {headers});
  }

}
