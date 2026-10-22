import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DestinationService {

  constructor(private http: HttpClient) {}

  getDestinations() {
    return this.http.get(
      `${environment.apiUrl}/${environment.prefix}/destinations`
    );
  }
  deleteDestination(id: string) {

  return this.http.delete(
    `${environment.apiUrl}/${environment.prefix}/destinations/${id}`
  );

}
postDestination(data: any) {

  return this.http.post(
    `${environment.apiUrl}/${environment.prefix}/destinations`,
    data
  );

}
updateDestination(id: string, data: any) {

  return this.http.put(
    `${environment.apiUrl}/${environment.prefix}/destinations/${id}`,
    data
  );

}
getDestinationById(id: string) {

  return this.http.get(
    `${environment.apiUrl}/${environment.prefix}/destinations/${id}`
  );

}

}