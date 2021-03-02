import { Component, OnInit } from '@angular/core';
import { User } from '../userComponents/models/user.model';
import { UserService } from '../userComponents/services/user.service';

@Component({
  selector: 'app-users-managment',
  templateUrl: './users-managment.component.html',
  styleUrls: ['./users-managment.component.css'],
})
export class UsersManagmentComponent implements OnInit {
  constructor(private userService: UserService) {}
  users: User[];

  searchHistory: string[] = [];
  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
  searchResult(searchResult: string) {
    if (searchResult === '') {
      this.users = [];
      this.userService.getUsers().subscribe((data) => {
        this.users = data;
      });
    } else {
      this.userService.getUsers().subscribe((data) => {
        this.users = data.filter((user) => user.login.includes(searchResult));
      });
      let first = localStorage.getItem('1');
      localStorage.setItem('1', searchResult);
      let second = localStorage.getItem('2');
      localStorage.setItem('2', first);
      localStorage.setItem('3', second);
    }
  }
  onSearchResultHistory(searchResultHistory: string) {
    this.userService.getUsers().subscribe((data) => {
      this.users = data.filter((user) =>
        user.login.includes(searchResultHistory)
      );
    });
    let first = localStorage.getItem('1');
    localStorage.setItem('1', searchResultHistory);
    let second = localStorage.getItem('2');
    localStorage.setItem('2', first);
    localStorage.setItem('3', second);
  }
}
