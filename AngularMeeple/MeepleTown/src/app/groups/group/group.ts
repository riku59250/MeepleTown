import { Type } from '@angular/compiler';

export class Group {
	private _id: number;
	// tslint:disable-next-line:variable-name
	private _nameGroup: string;
	// tslint:disable-next-line:variable-name
	private _groupType: boolean;
	// tslint:disable-next-line:variable-name
	private _nameDept: string;
	// tslint:disable-next-line:variable-name
	private _city: string;
	// tslint:disable-next-line:variable-name
	private _description: string;



	constructor( id?: number, nameGroup?: string, groupType?: boolean, nameDept?: string, city?: string, description?: string) {
		this._id = id;
		this._nameGroup = nameGroup;
		this._groupType = groupType;
		this._nameDept = nameDept;
		this._city = city;
		this._description = description;
	}

	get id(): number{
		return this._id;
	}

	set id(value: number){
		this._id = value;
	}
	get nameGroup(): string {
		return this._nameGroup;
	}
	set nameGroup(value: string) {
		this._nameGroup = value;
	}

	get groupType(): boolean {
		return this._groupType;
	}
	set groupType(value: boolean) {
		this._groupType = value;
	}
	get nameDept(): string {
		return this._nameDept;
	}
	set nameDept(value: string) {
		this._nameDept = value;
	}
	get city(): string {
		return this._city;
	}
	set city(value: string) {
		this._city = value;
	}
	get description(): string {
		return this._description;
	}
	set description(value) {
		this._description = value;
	}
}
