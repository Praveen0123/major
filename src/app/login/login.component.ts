import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginUser!: string;

  constructor(private activatedRoute: ActivatedRoute, private fb: FormBuilder) {
    this.activatedRoute.queryParams.subscribe((data) => {
      console.log(data.loginUser);
      this.loginUser = data.loginUser;
    });

    this.loginForm = this.fb.group({
      email: [null, Validators.compose([Validators.required])],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
    });
  }

  identification = 'admin';
  ngOnInit(): void {}

  public onSubmit(values: Object): void {
    console.log(values);
  }
}
