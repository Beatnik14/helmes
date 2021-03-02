import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserRepos } from '../models/userRepos.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user: User;
  @Input() gridModeValue: boolean;
  userRepos: UserRepos[];
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.getRepos(this.user.login)
      .pipe(map(repo => repo.slice(0, 3)))
      .subscribe((repos) => {
        this.userRepos = repos
      })
  }


}
