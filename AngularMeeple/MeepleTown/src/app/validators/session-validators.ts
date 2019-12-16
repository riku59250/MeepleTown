import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class SessionValidators {
    public static endDate(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.get('startDate').value > control.get('endDate').value) {
                return { valid_end_date: true};
            }
            return null;
        };
    }

    public static maxPlayers(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.get('nbMinPlayers').value > control.get('nbMaxPlayers').value) {
                return { valid_nb_players: true};
            }
            return null;
        };
    }

    public static positifNumber(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value <= 0) {
                return { valid_nb: true};
            }
            return null;
        };
    }

    public static date(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (new Date(control.value) <= new Date() ) {
                return { valid_date: true};
            }
            return null;
        };
    }
}
