import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { UserOrgs } from '../models/userOrgs.model';
import { UserRepos } from '../models/userRepos.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }


  getUsers(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.apiUrl);
  }
  getRepos(name: string): Observable<Array<UserRepos>> {
    return this.http.get<Array<UserRepos>>(`${this.apiUrl}/${name}/repos`);
  }
  getOrgs(name: string): Observable<Array<UserOrgs>> {
    return this.http.get<Array<UserOrgs>>(`${this.apiUrl}/${name}/orgs`);
  }

  //https://api.github.com/users/mojombo/orgs
  //https://api.github.com/users/mojombo/repos

}
