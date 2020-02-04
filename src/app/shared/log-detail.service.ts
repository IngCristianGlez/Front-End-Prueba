import { Injectable } from '@angular/core';
import { LogDetail } from './log-detail.model';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LogDetailService {
  formData: LogDetail;
  readonly rootURL = 'http://localhost:50035/api';
  list: LogDetail[];

  constructor(private http: HttpClient) { }

  postLogDetail(formData: LogDetail) {
    return this.http.post(this.rootURL + '/Logs', formData);
  }

  refreshList() {
    this.http.get(this.rootURL + '/Logs').toPromise().then(res => this.list = res as LogDetail[]);
  }

  graficas() {
    const urlapi = 'http://localhost:50035/api/logs';
    return this.http.get(urlapi).map(res => res);
  }
}
