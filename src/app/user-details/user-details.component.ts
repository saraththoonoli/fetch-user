import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {

  allUsers: any[] = [];
  userDetails: any;
  userId: number | undefined;

  constructor(private userService:UserService){}

  getAllDetails() {
    this.userService.getAllUsers().subscribe((data: any) => {
      this.allUsers = data;
      this.userDetails = null;
    });
  }

  getUserDetails() {
    if (this.userId) {
      this.userService.getUserById(this.userId).subscribe((data: any) => {
        this.userDetails = data;
      });
    }
  }

}
