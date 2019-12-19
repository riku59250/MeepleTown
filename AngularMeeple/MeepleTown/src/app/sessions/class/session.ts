import {User} from '../../users/class/user';

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
    author: User;
    // gamesListSession;
}
