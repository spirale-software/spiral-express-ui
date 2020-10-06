import {Adresse} from "./adresse";

export interface Personne {
    nom ?: string;
    prenom ?: string;
    adresse ?: Adresse;
    telephone ?: string;
    email ?: string;
}
