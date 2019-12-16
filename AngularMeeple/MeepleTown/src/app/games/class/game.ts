import {GameType} from "./game-type";

export class Game {
    name: string;
    type: GameType;
    description: string;
    nbrMinJoueur: number;
    nbrMaxJoueur: number;


    constructor(name?: string, type?: GameType, description?: string, nbrMinJoueur?: number, nbrMaxJoueur?: number) {
        this.name = name;
        this.type = type;
        this.description = description;
        this.nbrMinJoueur = nbrMinJoueur;
        this.nbrMaxJoueur = nbrMaxJoueur;
    }
}
