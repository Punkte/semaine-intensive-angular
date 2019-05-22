import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styles: []
})
export class FormLoginComponent implements OnInit {

  @Output() formSubmit = new EventEmitter();
  public formData: FormGroup;

  constructor(
    private Builder: FormBuilder
  ) { }

  private resetForm = ()  => {
    this.formData = this.Builder.group({
      email: [ 'john@doe.com', Validators.required ],
      password: [ 'azerty123', Validators.required ],
    });
  }

  public submitForm = () => {
    this.formSubmit.emit(this.formData.value);
  }

  ngOnInit() {
    this.resetForm();
  }

}
