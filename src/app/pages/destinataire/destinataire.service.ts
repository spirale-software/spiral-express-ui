import {Injectable} from '@angular/core';
import {Envoi} from '../shared/model/envoi';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Destinataire} from '../shared/model/destinataire';

@Injectable({providedIn: 'root'})
export class DestinataireService {
    private url = 'api/express/destinataires';

    constructor(private http: HttpClient) {
    }

    findAllByClientId(clientId: number): Observable<HttpResponse<Destinataire[]>>  {
        return this.http.get<Destinataire[]>(`${this.url}/clients/${clientId}`, {observe: 'response'});
    }
}
