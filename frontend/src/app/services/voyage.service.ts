import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {

  constructor(private http: HttpClient) {}

  getVoyages() {
    return this.http.get(
      `${environment.apiUrl}/${environment.prefix}/voyages`
    );
  }
  deleteVoyage(id: string) {
  return this.http.delete(
    `${environment.apiUrl}/${environment.prefix}/voyages/${id}`
  );
}
postVoyage(data: any) {
  return this.http.post(
    `${environment.apiUrl}/${environment.prefix}/voyages`,
    data
  );
}
getVoyageById(id: string) {
  return this.http.get(
    `${environment.apiUrl}/${environment.prefix}/voyages/${id}`
  );
}

updateVoyage(id: string, data: any) {
  return this.http.put(
    `${environment.apiUrl}/${environment.prefix}/voyages/${id}`,
    data
  );
}
}