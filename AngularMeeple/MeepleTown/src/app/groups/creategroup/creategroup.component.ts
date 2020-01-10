import { Component, Input, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor, FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { GroupService} from '../services/group.service';
import {Group} from '../group/group';
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.scss']
})
export class CreategroupComponent implements OnInit {
  nameGroup: FormControl;
  nameGroupMinLength = 8;
  nameGroupMaxLength = 30;
  groupType: FormControl;
  nameDept: FormControl;
  city: FormControl;
  nameCityMinLength = 1;
  nameCityMaxLength = 45;
  groupForm: FormGroup;

  constructor(private dialog: MatDialog, private formB: FormBuilder) { }

    onSubmit() {
      if (this.groupForm.valid) {
        console.log(this.groupForm.value);
        this.groupForm.reset();
      }
    }

  ngOnInit() {
    this.nameGroup = new FormControl(null, [Validators.required, Validators.minLength(this.nameGroupMinLength),
    Validators.maxLength(this.nameGroupMaxLength)]);
    this.groupType = new FormControl(null, [Validators.required]);
    this.nameDept = new FormControl(null, [Validators.required]);
    this.city = new FormControl(null, [Validators.required, Validators.minLength(this.nameCityMinLength),
    Validators.maxLength(this.nameCityMaxLength)]);

    this.groupForm = this.formB.group({
      nameGroup: this.nameGroup,
      groupType: this.groupType,
      nameDept: this.nameDept,
      city: this.city,
    });
  }

  public controlGroupName() {
    if (this.nameGroup.touched) {
      if (this.nameGroup.hasError('required')) {
        return 'Un nom de groupe est obligatoire.';
      }
      if (this.nameGroup.hasError('minlength')) {
        return 'Le nom du groupe est trop court, il doit contenir au moins ' + this.nameGroupMinLength
            + ' caractères (actuellement ' + this.nameGroup.value.length + ').';
      }
      if (this.nameGroup.hasError('maxlength')) {
        return 'Le nom du groupe est trop long, il doit contenir ' + this.nameGroupMaxLength
          + ' caractères maximum (actuellement ' + this.nameGroup.value.length + ').';
      }
    }
  }

  public controlGroupType() {
    if (this.groupType.dirty) {
      if (this.groupType.hasError('required')) {
        return 'Le type de groupe est obligatoire.';
      }
    }
    return null;
  }

  public controlNameDept() {
    if (this.nameDept.touched) {
      if (this.nameDept.hasError('required')) {
        return 'Le département est obligatoire';
      }
    }
  }

  public controlCity() {
    if (this.city.touched) {
      if (this.city.hasError('required')) {
        return 'La ville est obligatoire';
      }
      if (this.city.hasError('maxlength')) {
        return 'Le nom de la ville est trop long, il doit contenir ' + this.nameCityMaxLength
            + ' caractères maximum (actuellement ' + this.city.value.length + ')';
      }
    }
  }

  openDialogCancel() {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Annuler la création',
        message: `Êtes-vous sûr de vouloir annuler la création de ce groupe ? Toutes les données vont être effacées du formulaire.`, close: true}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.groupForm.reset();
      }
    });
  }



}


