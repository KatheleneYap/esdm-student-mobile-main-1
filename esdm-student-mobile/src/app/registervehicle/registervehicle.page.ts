import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registervehicle',
  templateUrl: './registervehicle.page.html',
  styleUrls: ['./registervehicle.page.scss'],
})
export class RegistervehiclePage implements OnInit {
  constructor(private formBuilder: FormBuilder,private router: Router) { }
  get platenumber() {
    return this.registrationForm.get("platenumber");
  }
  get vmodel() {
    return this.registrationForm.get('vmodel');
  }
  get vcolor() {
    return this.registrationForm.get('vcolor');
  }
  get vtype() {
    return this.registrationForm.get('vtype');
  }

  public errorMessages = {
    platenumber: [
      { type: 'required', message: 'Plate number is required' },
      { type: 'maxlength', message: 'Plate number cannot be longer than 8 characters' }
    ],
    vmodel: [
      { type: 'required', message: 'Vehicle model is required' }
    ],
    vcolor: [
      { type: 'required', message: 'Vehicle color is required' }
    ],
    vtype: [
      { type: 'required', message: 'Type of vehicle is required' }
    ]
  };
  registrationForm = this.formBuilder.group({
    platenumber: ['', [Validators.required, Validators.maxLength(8)]],
    vmodel: [
      '',
      [
        Validators.required
      ]
    ],
    vcolor: [
      '',
      [
        Validators.required
      ]
    ],
    vtype: [
      '',
      [
        Validators.required
      ]
    ]

  });
  public submit() {
    console.log(this.registrationForm.value);
  }

  ngOnInit() {
  }

  govehicle(){
  	this.router.navigate(['./vehicle'])
  }

}

