import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styles: []
})
export class FormRegisterComponent implements OnInit {

  public formData: FormGroup;
  @Output() formSubmit = new EventEmitter();

  constructor(
    private Builder: FormBuilder
  ) { }

  private resetForm = ()  => {
    this.formData = this.Builder.group({
      first_name: [ 'John', Validators.required ],
      last_name: [ 'Doee', Validators.required ],
      email: [ 'john@doe.com', Validators.required ],
      password: [ 'azerty123', Validators.required ],
      password_repeate: [ 'azerty123', Validators.required ],
      street: [ '21, boulevard de la République', Validators.required ],
      city: [ 'Lol sur seine', Validators.required ],
      country: [ 'France', Validators.required ],
      birthdate: [ '01/01/1970', Validators.required ],
      position: [ 'NULL', Validators.required ],
      type: [ 'admin', Validators.required ],
      zip_code: [ '95500', Validators.required ],
      cgu: [ true, Validators.required ],
    });
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value)
  }

  ngOnInit() {
    this.resetForm();
  }

}
