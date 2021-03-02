import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from '../models/user.model';
import { UserOrgs } from '../models/userOrgs.model';
import { UserRepos } from '../models/userRepos.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  userName: string;
  singleUser: User;
  userRepos: UserRepos[];
  userOrgs: UserOrgs[];

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {

    this.userName = this.route.snapshot.params['username'];
    this.userService.getUsers()
      .pipe(map(data => data.filter(user => user.login === this.userName)))
      .subscribe((data) => {
        this.singleUser = data[0]
      })
    this.userService.getRepos(this.userName)
      .pipe(map(repo => repo.slice(0, 3)))
      .subscribe((repos) => {
        this.userRepos = repos
      })

    this.userService.getOrgs(this.userName)
      .pipe(map(orgs => orgs.slice(0, 3)))
      .subscribe((orgs) => {
        this.userOrgs = orgs
      })


  }

}
