import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Envoi} from '../shared/model/envoi';

@Injectable({ providedIn: 'root' })
export class EnvoiService {

    private url = 'api/express/envois';

    private envois: Envoi[] = [];

    constructor(private http: HttpClient) {}

    create(envoi: Envoi): Observable<Envoi> {
        this.envois.push(envoi);
        return of(envoi);
    }

    update(envoi: Envoi): Observable<Envoi> {
        return null;
    }

    getById(envoiId: number): Observable<Envoi> {
        return this.http.get(`${this.url}/${envoiId}`);
    }

    findByReference(reference: string): Observable<Envoi> {
        return this.http.get(`${this.url}/${reference}/reference`);
    }

    getAll(): Observable<Envoi[]> {
       return  this.http.get<Envoi[]>(this.url);
    }

    genererDocument(envoiId: number): Observable<any> {
        return this.http.get(`${this.url}/${envoiId}/generer-fiche-envoi`, {
            headers: new HttpHeaders().set('Accept', 'application/pdf'), responseType: 'blob'});
    }

    calculerVolume(envoi: Envoi) {
        return envoi.coli.hauteur * envoi.coli.largeur * envoi.coli.longueur;
    }
}
