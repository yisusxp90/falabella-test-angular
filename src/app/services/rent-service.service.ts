import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Landing} from '../models/Landing';
import {catchError, map} from 'rxjs/operators';
import {throwError} from 'rxjs';
import { URL_BACKEND } from '../config/config';


@Injectable({
  providedIn: 'root'
})
export class RentServiceService {

  private url: string = URL_BACKEND;
  constructor(private httpClient: HttpClient, private router: Router) { }

  save(landing: Landing) {

    const urlEndPoint = this.url + '/api/rent';
    return this.httpClient.post(urlEndPoint, landing).pipe(map(resp => resp as Landing),
      catchError(e => {
        return throwError(e);
      }));
  }
}
