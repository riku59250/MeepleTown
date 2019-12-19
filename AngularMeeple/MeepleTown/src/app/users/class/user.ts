export class User {
    id: number;
    pseudo: string;
    mail: string;
    password: string;
    numDept: number;
    city: string;
    url: string;


    constructor(pseudo?: string, mail?: string, password?: string, numDept?: number, city?: string, url?: string) {
        this.pseudo = pseudo;
        this.mail = mail;
        this.password = password;
        this.numDept = numDept;
        this.city = city;
        this.url = url;
    }


}
