import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';
import { Repository } from './repository';
import { Organization } from './organization';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  [x: string]: any;

  private userUrl: string = '';

  constructor(private http: HttpClient) {
    this.userUrl = `${environment.apiUrl}/users/${environment.username}`;
  }

  getUser(): Observable<User> {
    const userUrl = `${environment.apiUrl}/users/${environment.username}`;
    return this.http.get<User>(userUrl);
  }



  getRepos(): Observable<Repository[]> {
    return this.http.get<Repository[]>(this.userUrl +
      '/repos');
  }

  getOrganizations(): Observable<Organization[]> {
    return this.http.get<Organization[]>(this.userUrl +
      '/orgs');
  }

}
