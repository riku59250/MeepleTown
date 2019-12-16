import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export class CustomValidator {
    public static email(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            if (control.value != null || control.value !== '') {
                const regexp = new RegExp(`^[a-z]{1}[0-9a-z._-]+@[0-9a-z\\-]{2,}\.[a-z]{2,5}$`, 'i');
                if (!regexp.test(control.value)) {
                    return {error_mail: true};
                }
                return null;
            }

        };
    }

    public  static match_password(): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
                if (control.get('password').value !== control.get('confirm').value) {
                    return  {error_password : true};
                }
                return null;
        };
    }
}
