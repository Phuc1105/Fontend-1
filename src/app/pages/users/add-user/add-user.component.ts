import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/@core/services/apis/user.service';
import { UsersService } from 'app/@core/services/apis/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  userForm!: FormGroup;
  createData: boolean = false;
  constructor(
    private userService: UsersService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.validate();
  }
  validate(){
    this.userForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    })
  }
  onSubmit(): void {
    if(this.userForm.valid){
      const formData = this.userForm.value;
      console.log(formData);
      this.userService.postUsers(formData).subscribe(res=>{
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
        }, 1500);
      },err=>{
        console.error(err);
      })
    }
  }
}
