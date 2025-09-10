import { Component, OnInit } from '@angular/core';
import { PeopleService, RandomUserResponse } from '../../shared/people.service';

interface TeamMember {
  name: string;
  email: string;
  avatar: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  members: TeamMember[] = [];
  loading = true;
  error = '';

  constructor(private people: PeopleService) {}

  ngOnInit(): void {
    this.people.team(6).subscribe({
      next: (res: RandomUserResponse) => {
        this.members = res.results.map(r => ({
          name: `${r.name.first} ${r.name.last}`,
          email: r.email,
          avatar: r.picture.large
        }));
        this.loading = false;
      },
      error: () => { this.error = 'Unable to load team right now.'; this.loading = false; }
    });
  }
}
