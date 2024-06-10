import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/@core/services/apis/user.service';
import { UsersService } from 'app/@core/services/apis/users.service';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  customerForm!: FormGroup;
  createData: boolean = false;
  editUser: any = {};
  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.customerForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern("^0[0-9]{9}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      status: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),
    });
    const id = +this.route.snapshot.params['id'];
    this.userService.getUserById(id).subscribe(user => {
      const data = user.data;
      console.log(data);
      
      this.editUser = data[0];
        this.customerForm.patchValue({
          username: this.editUser.username,
          email: this.editUser.email,
          phone: this.editUser.phone,
          password: this.editUser.password,
          status: this.editUser.status,
          role: this.editUser.role
        });
      },
      error => {
        console.error('Error fetching user data', error);
      }
    );
  }

  update(): void {
    const id = +this.route.snapshot.params['id'];
    if (this.customerForm.valid) {
      const updatedUser = this.customerForm.value;
      this.userService.putUser(updatedUser, id).subscribe(res => {
        this.createData = true;
        setTimeout(() => {
          this.createData = false;
          this.router.navigate(['/pages/users/list-users']);

        }, 1500);
        console.log(res);
   
      });
    }
  }
}
