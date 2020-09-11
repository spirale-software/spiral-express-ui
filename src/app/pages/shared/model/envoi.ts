import {Coli} from './coli';
import {Client} from './client';
import {Personne} from './personne';
import {StatutEnvoi} from './statut-envoi';

export interface Envoi {
    date ?: number;
    statut ?: StatutEnvoi;
    reference ?: string;
    coli ?: Coli;
    expediteur ?: Client;
    destinataire ?: Personne;
    rapportQuai ?: string;
    rapportLivraisaon ?: string;
}
