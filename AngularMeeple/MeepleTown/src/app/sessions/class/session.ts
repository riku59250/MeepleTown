import {User} from '../../users/class/user';
import {Game} from "../../games/class/game";

export class Session {
    id: number;
    title: string;
    place: string;
    description: string;
    nbMaxPlayers: number;
    nbMinPlayers: number;
    startDate: Date;
    endDate: Date;
    isPrivate: boolean;
    sessionType: string;
    playersList: User[];
    gamesListSession: Game[];
    author: User;
}
