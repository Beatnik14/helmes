import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }
  @Input() users: User[];
  ngOnInit(): void {
  }

  gridMode: boolean = false;
  OnToggle() {
    this.gridMode = true;
  }

  OnColumn() {
    this.gridMode = false;
  }

}

