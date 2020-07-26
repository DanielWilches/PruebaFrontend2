import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { catchError, pluck } from 'rxjs/operators';

import { Response } from '../interfaces/response.interface';
import { ClassField } from '@angular/compiler';
import { ViewFlags } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  private URL = 'https://rel.ink/api/links/';
  constructor(private http: HttpClient) {
    // this.postLink('').subscribe(console.log);
    // this.postLink('https://www.youtube.com/').subscribe(console.log);
  }

  postLink(link: string): Observable<object> {
    return ajax({
      url: this.URL,
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: { url: link }
    }).pipe(
      pluck<AjaxResponse, Response>('response'),
      catchError<Response, Observable<any>>((error: any) => {
        return of(error).pipe(pluck('response'));
      }));
  }
}

