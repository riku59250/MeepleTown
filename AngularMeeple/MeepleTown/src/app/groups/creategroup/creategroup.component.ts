import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { GroupService} from '../services/group.service';
import {Group} from '../group/group';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.scss']
})
export class CreategroupComponent implements OnInit {

  /*
     private nameGroup: string;
     private city: string;
     private nameDept: string;
     private groupType: boolean;
  */

  nameGroup: FormControl;
  nameGroupMinLength = 8;
  nameGroupMaxLength = 30;
  groupType: FormControl;
  nameDept: FormControl;
  city: FormControl;
  nameCityMinLength = 1;
  nameCityMaxLength = 45;
  description: FormControl;
  descriptionMax = 250;
  groupForm: FormGroup;


  constructor(private formB: FormBuilder) { }

    onSubmit() {
      console.log(this.groupForm.value);
      this.groupForm.reset();
    }

  ngOnInit() {
    this.nameGroup = new FormControl(null, [Validators.required, Validators.minLength(this.nameGroupMinLength),
    Validators.maxLength(this.nameGroupMaxLength)]);
    this.groupType = new FormControl(null, [Validators.required]);
    this.nameDept = new FormControl(null, [Validators.required]);
    this.city = new FormControl(null, [Validators.required, Validators.minLength(this.nameCityMinLength),
    Validators.maxLength(this.nameCityMaxLength)]);
    this.description = new FormControl(null, [Validators.maxLength(this.descriptionMax)]);

    this.groupForm = this.formB.group({
      nameGroup: this.nameGroup,
      groupType: this.groupType,
      nameDept: this.nameDept,
      city: this.city,
      description: this.description
    });
  }

//  public createGroup(group: Group) {
//    if (this.groupForm.valid) {
//      console.log(this.groupForm.value);
//      // tslint:disable-next-line:max-line-length
//      // tslint:disable-next-line:max-line-length
//      // tslint:disable-next-line:max-line-length
//      group = new Group(this.groupForm.value.nameGroup,
//      this.groupForm.value.groupType,
//      this.groupForm.value.nameDept, this.groupForm.value.city);
//      console.log(group);
//      // tslint:disable-next-line:no-unused-expression
//      this.groupForm.reset();
//    }
//  }

  public controlGroupName() {
    if (this.nameGroup.touched) {
      if (this.nameGroup.hasError('required')) {
        return 'Un nom de groupe est obligatoire';
      }

      if (this.nameGroup.hasError('maxlength')) {
        return 'Le nom du groupe est trop long, il doit contenir ' + this.nameGroupMaxLength
          + ' caract�res maximum (actuellement ' + this.nameGroup.value.length + ')';
      }
    }
  }

  public controlGroupType(){
    if(this.groupType.dirty) {
      if (this.groupType.hasError('required')) {
        return 'Veuillez choisir un type de groupe';
      }
    }
    return null;
  }


/*
  public controlGroupType() {
    if (this.groupType.touched) {
      if (this.groupType.hasError('required')) {
        return 'Veuillez choisir un type de groupe';
      }
      if (this.groupType.value === true) {
        console.log('Particulier');
      }
      if (this.groupType.value === false) {
        console.log('Association');
      }
    }
  }
*/
  public controlNameDept() {
    if (this.nameDept.touched) {
      if (this.nameDept.hasError('required')) {
        return 'Veuillez choisir un d�partement';
      }
    }
  }

  public controlCity() {
    if (this.city.touched) {
      if (this.city.hasError('required')) {
        return 'Un nom de ville est obligatoire';
      }
      if (this.city.hasError('maxlength')) {
        return 'Le nom de la ville est trop long, il doit contenir ' + this.nameCityMaxLength
            + ' caract�res maximum (actuellement ' + this.city.value.length + ')';
      }
    }
  }

  public controlDescription() {
    if(this.description.touched){
      if(this.description.hasError('maxlength')){
        return 'La description est trop longue, elle doit contenir ' + this.descriptionMax + ' caractères' + ' (actuellement ' +
            this.description.value.length + ')';
      }
    }
  }




}


