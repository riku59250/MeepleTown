
import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { GroupService} from '../services/group.service';
import {Group} from '../group/group';
import {User} from "../../users/class/user";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {LoginService} from "../../login/services/login.service";

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
  descriptionMax = 300;
  groupForm: FormGroup;

  constructor(private formB: FormBuilder, private dialog: MatDialog, private groupService: GroupService, private router: Router, private loginService: LoginService) { }

    onSubmit() {
      if ( this.groupForm.valid) {
        if (this.loginService.log().value !== null) {
          let group = new Group(0, this.groupForm.value.nameGroup, this.groupForm.value.groupType, this.groupForm.value.description, this.groupForm.value.city, this.groupForm.value.nameDept, new Array<User>());
          group.type = group.type.toUpperCase();
          group.membersList.push(this.loginService.log().value);

          this.openDialogCreate(group);
          this.groupForm.reset();
        }
      }
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
      if(this.nameGroup.hasError('minlength')) {
        return 'Le nom du Groupe est trop court, il doit contenir ' + this.nameGroupMinLength
            + ' caractéres minimum (actuellement ' + this.nameGroup.value.length + ')';
      }
    }
    return null;
  }

  public controlGroupType() {
    if (this.groupType.dirty) {
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
    return null;
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
    return null;
  }

  public controlDescription() {
    if(this.description.touched){
      if(this.description.hasError('maxlength')){
        return 'La description est trop longue, elle doit contenir ' + this.descriptionMax + ' caractères' + ' (actuellement ' +
            this.description.value.length + ')';
      }
    }
    return null;
  }
  public annuler(): void {
    this.onpenDialogAnnuler();
  }
  openDialogCreate(group: Group) {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Creation groupe',
        message: `Etes-vous sure de vouloir crée le groupe ${group.name} ?  `, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupForm.reset();
        console.log(group);
        this.groupService.createGroupe(group, this.loginService.log().value.id).subscribe((success) => {
              console.log(success);
              this.router.navigateByUrl(`/pageGroup/${success}`);

        }, (error) => {
          console.log(error);
        });
      }
    });
  }

  onpenDialogAnnuler() {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Creation groupe',
        message: `Etes-vous sure de vouloir annuler  ?  `, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupForm.reset();
        }
      });
  }

}


