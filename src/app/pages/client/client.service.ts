import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ClientService {

    private url = 'assets/data/client.json';

    constructor(private http: HttpClient) {}

    create(client: any): Observable<any> {
        return this.http.post(this.url, client, {observe: 'response'});
    }

    update(client: any): Observable<any> {
        return this.http.put(this.url, client, {observe: 'response'});
    }

    findAll(): Observable<any> {
        return this.http.get(this.url, {observe: 'response'});
    }

    findById(clientId: number): Observable<any> {
        return this.http.get(this.url, {observe: 'response'});
    }
}
