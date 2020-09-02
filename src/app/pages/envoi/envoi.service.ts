import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({ providedIn: "root" })
export class EnvoiService {

    constructor(private http: HttpClient) {}
}
