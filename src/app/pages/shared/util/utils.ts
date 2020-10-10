import {Coli} from "../model/coli";
import {Client} from "../model/client";

export class Utils {

    public static getVolume(coli: Coli): number {
        let volume = 0;
        if (coli) {
            volume = coli.longueur * coli.largeur * coli.hauteur;
        }
        return volume;
    }

    public static getExpediteur(expediteur: Client): string {
        let expediteurNom = '';
        if (expediteur) {
            expediteurNom = expediteur.prenom + ' ' + expediteur.nom;
        }
        return expediteurNom;
    }
}
