import {Component, OnInit} from '@angular/core';
import {Session} from '../class/session';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {SessionValidators} from '../../validators/session-validators';
import {SessionServiceService} from '../services/session-service.service';
import {SessionType} from '../../enums/session-type.enum';
import {LoginService} from "../../login/services/login.service";
import {BehaviorSubject} from "rxjs";
import {User} from "../../users/class/user";
import {ConfirmationComponent} from "../../popup/confirmation/confirmation.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from '@angular/router';
import { GamesServicesService } from 'src/app/games/services/games-services.service';


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
  type: FormControl;
  gamesListSession: FormControl;
  listGames;

  // sessionTypes: SessionType[] = [SessionType.JDP, SessionType.JDR, SessionType.FIG, SessionType.GN]
  user: BehaviorSubject<User>;

  constructor(private gameService: GamesServicesService, private dialog: MatDialog, private fb: FormBuilder, private sessionService: SessionServiceService, private logService: LoginService, private router: Router) { }

  ngOnInit() {
    this.gameService.getGames().subscribe( (games) => {
      this.listGames = games;
    });

    this.title = new FormControl(null, [Validators.required]);
    this.place = new FormControl(null, [Validators.required]);
    this.description = new FormControl();
    this.nbMinPlayers = new FormControl(null, [Validators.required, SessionValidators.positifNumber()]);
    this.nbMaxPlayers = new FormControl(null, [Validators.required, SessionValidators.positifNumber()]);
    this.date = new FormControl(null, [Validators.required, SessionValidators.date()]);
    this.startDate = new FormControl(null, [Validators.required]);
    this.endDate = new FormControl(null, [Validators.required]);
    this.isPrivate = new FormControl();
    this.gamesListSession = new FormControl();
    this.type = new FormControl();
    this.form = this.fb.group({
      title: this.title,
      place: this.place,
      description: this.description,
      nbMinPlayers: this.nbMinPlayers,
      nbMaxPlayers: this.nbMaxPlayers,
      date: this.date,
      startDate: this.startDate,
      endDate: this.endDate,
      isPrivate: this.isPrivate,
      type: this.type,
      gamesListSession: this.gamesListSession
    }, {
      validators: [ SessionValidators.endDate(), SessionValidators.maxPlayers() ]
    });
  }


  createSession() {
    if (this.form.valid) {
      const session: Session = new Session();
      session.title = this.title.value;
      session.place = this.place.value;
      session.description = this.description.value;
      session.nbMaxPlayers = this.nbMaxPlayers.value;
      session.nbMinPlayers = this.nbMinPlayers.value;
      session.startDate = this.createDateFromForm(this.date.value, this.startDate.value);
      session.endDate = this.createDateFromForm(this.date.value, this.endDate.value);
      session.gamesListSession = this.listGames.filter(item => item.id === Number.parseInt(this.gamesListSession.value, 10));

      if (this.isPrivate.value == null) {
        session.isPrivate = false;
      } else {
        session.isPrivate = this.isPrivate.value;
      }
      this.user = this.logService.log();
      session.sessionType = SessionType[this.type.value];
      console.log(this.user)
      this.sessionService.addSessionWithGames(session, this.user.getValue()).subscribe( (id) => {
        console.log(id);
       this.router.navigateByUrl(`/sessionPage/${id}`);
        this.form.reset();
      });
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
        return `L'heure est obligatoire.`;
      }
      if (this.form.hasError('valid_end_date')) {
        return `L'heure de fin doit être située après l'heure de début.`;
      }
    }
    return null;
  }

  public controlDate(): string {
    if ( this.date.touched ) {
      if (this.date.hasError('required')) {
        return `La date est obligatoire.`;
      }
      if (this.date.hasError('valid_date')) {
        return `La date doit être située après la date d'aujourd'hui.`;
      }
    }
    return null;
  }

  public controlTitle(): string {
    if ( this.title.touched ) {
      if (this.title.hasError('required')) {
        return `Le titre est obligatoire.`;
      }
    }
    return null;
  }
  public controlPlace(): string {
    if ( this.place.touched ) {
      if (this.place.hasError('required')) {
        return `Le lieu est obligatoire.`;
      }
    }
    return null;
  }
  public controlStartTime(): string {
    if ( this.startDate.touched ) {
      if (this.startDate.hasError('required')) {
        return `L'heure est obligatoire.`;
      }
    }
    return null;
  }
  public controlMaxPlayers(): string {
    if ( this.nbMaxPlayers.touched ) {
      if (this.nbMaxPlayers.hasError('required')) {
        return `Le nombre de joueurs est obligatoire.`;
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
        return `Le nombre de joueurs est obligatoire.`;
      }
      if (this.nbMinPlayers.hasError('valid_nb')) {
        return `Le nombre de joueurs doit être positif. `;
      }
    }
    return null;
  }

  openDialogCancel() {
    const dialogRef = this.dialog.open(ConfirmationComponent, { data: {title: 'Annuler la création',
          message: `Êtes-vous sûr de vouloir annuler la création de cette partie ? Toutes les données vont être effacées du formulaire.`, close: true}
      });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.form.reset();
      }
    });
  }

}
