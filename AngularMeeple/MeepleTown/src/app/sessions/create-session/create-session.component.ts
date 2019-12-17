import { Component, OnInit } from '@angular/core';
import {Session} from '../../classes/session';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionValidators} from '../../validators/session-validators';
import {SessionServiceService} from "../services/session-service.service";

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {
  form: FormGroup;
  title: FormControl;
  place: FormControl;
  description: FormControl;
  nbMaxPlayers: FormControl;
  nbMinPlayers: FormControl;
  date: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  isPrivate: FormControl;


  constructor(private fb: FormBuilder, private sessionService: SessionServiceService) { }

  ngOnInit() {
    this.title = new FormControl(null, [Validators.required]);
    this.place = new FormControl(null, [Validators.required]);
    this.description = new FormControl();
    this.nbMinPlayers = new FormControl(null, [Validators.required, SessionValidators.positifNumber()]);
    this.nbMaxPlayers = new FormControl(null, [Validators.required, SessionValidators.positifNumber()]);
    this.date = new FormControl(null, [Validators.required, SessionValidators.date()]);
    this.startDate = new FormControl(null, [Validators.required]);
    this.endDate = new FormControl(null, [Validators.required]);
    this.isPrivate = new FormControl();
    this.form = this.fb.group({
      title: this.title,
      place: this.place,
      description: this.description,
      nbMinPlayers: this.nbMinPlayers,
      nbMaxPlayers: this.nbMaxPlayers,
      date: this.date,
      startDate: this.startDate,
      endDate: this.endDate,
      isPrivate: this.isPrivate
    }, {
      validators: [ SessionValidators.endDate(), SessionValidators.maxPlayers() ]
    });
  }


  createSession() {
    if (this.form.valid) {
        console.log(this.form.value);
        const session: Session = new Session();
        session.title = this.title.value;
        session.place = this.place.value;
        session.description = this.description.value;
        session.nbMaxPlayers = this.nbMaxPlayers.value;
        session.nbMinPlayers = this.nbMinPlayers.value;
        session.startDate = this.createDateFromForm(this.date.value, this.startDate.value);
        session.endDate = this.createDateFromForm(this.date.value, this.endDate.value);
        if (this.isPrivate.value == null) {
          session.isPrivate = false;
        } else {
          session.isPrivate = this.isPrivate.value;
        }


      // TODO add to DataBase
        this.sessionService.addSession(session).subscribe();
        this.form.reset();
      }
    }

  createDateFromForm(date: string, time: string) {
    const hours = Number.parseInt(time.slice(0, 2), 10);
    const minutes = Number.parseInt(time.slice(3, 5), 10);
    const d = new Date(date);
    d.setHours(hours, minutes);
    return d;
  }



  public controlEndTime(): string {
    if ( this.endDate.touched ) {
      if (this.endDate.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
      if (this.form.hasError('valid_end_date')) {
        return `La date de fin doit être située après la date de début.`;
      }
    }
    return null;
  }

  public controlDate(): string {
    if ( this.date.touched ) {
      if (this.date.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
      if (this.date.hasError('valid_date')) {
        return `La date de fin doit être située après la date d'aujourd'hui.`;
      }
    }
    return null;
  }

  public controlTitle(): string {
    if ( this.title.touched ) {
      if (this.title.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
    }
    return null;
  }
  public controlPlace(): string {
    if ( this.place.touched ) {
      if (this.place.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
    }
    return null;
  }
  public controlStartTime(): string {
    if ( this.startDate.touched ) {
      if (this.startDate.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
    }
    return null;
  }
  public controlMaxPlayers(): string {
    if ( this.nbMaxPlayers.touched ) {
      if (this.nbMaxPlayers.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
      if (this.nbMaxPlayers.hasError('valid_nb')) {
        return `Le nombre de joueurs doit être positif. `;
      }
      if (this.form.hasError('valid_nb_players')) {
        return `Le nombre maximum de joueurs doit être supérieur au nombre minimum. `;
      }
    }
    return null;
  }
  public controlMinPlayers(): string {
    if ( this.nbMinPlayers.touched ) {
      if (this.nbMinPlayers.hasError('required')) {
        return `Le champ est obligatoire.`;
      }
      if (this.nbMinPlayers.hasError('valid_nb')) {
        return `Le nombre de joueurs doit être positif. `;
      }
    }
    return null;
  }

}
