import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'app/@core/services/apis/users.service';
import { AlertShowcaseComponent } from 'app/@theme/components/alert/ngx-alerts.component';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  customerForm!: FormGroup;
  createData: boolean = false;
  editUser: any = {};
  
  @ViewChild(AlertShowcaseComponent) alertShowcase: AlertShowcaseComponent;
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
        this.alertShowcase.addMessage({ status: 'success', message: 'Sửa thành công!' });
        setTimeout(() => {
          this.router.navigate(['/pages/users/list-users']);
        }, 2000);
        console.log(res);
      });
    }
  }
  
}
