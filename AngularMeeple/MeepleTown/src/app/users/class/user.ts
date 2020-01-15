import {Game} from "../../games/class/game";
import {Group} from "../../groups/group/group";
import {Session} from "../../sessions/class/session";

export class User {
    id: number;
    pseudo: string;
    mail: string;
    password: string;
    numDept: number;
    city: string;
    url: string;
    listGame: Set <Game>;
    listGroup: Set <Group>;
    listSession: Set<Session>;
    session: Set<Session>;

    constructor(pseudo?: string, mail?: string, password?: string, numDept?: number, city?: string, url?: string) {
        this.pseudo = pseudo;
        this.mail = mail;
        this.password = password;
        this.numDept = numDept;
        this.city = city;
        this.url = url;
    }


}
