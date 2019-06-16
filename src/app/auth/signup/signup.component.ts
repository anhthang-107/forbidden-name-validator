import { Component, OnInit, Directive, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import { FormControl, NG_VALIDATORS, Validator, AbstractControl, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  enteredValue: string;

  constructor() {
    this.myControl.setValidators(forbiddenNamesValidator(this.options));
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  onSubmit(form: NgForm) {
    console.log(form);
  }

}

export function forbiddenNamesValidator(names: string[]): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    // below findIndex will check if control.value is equal to one of our options or not
    const index = names.findIndex(name => {
      return (new RegExp('\^' + name + '\$')).test(control.value);
    });
    return index < 0 ? {'forbiddenNames': { value: control.value } } : null;
  };
}
