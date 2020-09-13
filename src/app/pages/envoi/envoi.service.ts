import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Envoi} from '../shared/model/envoi';

@Injectable({ providedIn: 'root' })
export class EnvoiService {

    private envois: Envoi[] = [];

    constructor(private http: HttpClient) {}

    create(envoi: Envoi): Observable<Envoi> {
        this.envois.push(envoi);
        return of(envoi);
    }

    update(envoi: Envoi): Observable<Envoi> {
        return null;
    }

    getById(id: number): Observable<Envoi> {
        return null;
    }

    getAll(): Observable<Envoi[]> {
        return of(this.envois);
    }
}
