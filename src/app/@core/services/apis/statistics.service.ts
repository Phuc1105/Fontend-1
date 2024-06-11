import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_STATISTICS } from 'app/@core/config/api-endpoint.config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsServiceService {

  constructor(
    private http: HttpClient,
  ) { }
  getStatistics(): Observable<any>{
    return this.http.get(API_STATISTICS);
  }
}