import { Type } from '@angular/compiler';
import {User} from "../../users/class/user";

export class Group {
	 id: number;
	// tslint:disable-next-line:variable-name
	 name: string;
	// tslint:disable-next-line:variable-name
	 type: boolean;
	// tslint:disable-next-line:variable-name
	 nameDept: string;
	// tslint:disable-next-line:variable-name
	city: string;
	// tslint:disable-next-line:variable-name
	 description: string;
	membersList: Array<User>;


	constructor( id?: number, nameGroup?: string, groupType?: boolean,  description?: string, city?: string, nameDept?: string, membersList?: Array<User>) {
		this.id = id;
		this.name = nameGroup;
		this.type = groupType;
		this.nameDept = nameDept;
		this.city = city;
		this.description = description;
		this.membersList = membersList;
	}


}
