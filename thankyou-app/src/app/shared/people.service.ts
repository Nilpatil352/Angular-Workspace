import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RandomUserResponse {
  results: Array<{
    name: { first: string; last: string };
    email: string;
    picture: { large: string; medium: string; thumbnail: string };
  }>;
}

@Injectable({ providedIn: 'root' })
export class PeopleService {
  constructor(private http: HttpClient) {}
  team(size = 6) {
    // random users as “team” members
    return this.http.get<RandomUserResponse>(`https://randomuser.me/api/?results=${size}&inc=name,email,picture`);
  }
}
