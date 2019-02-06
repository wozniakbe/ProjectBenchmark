import { Component, OnInit } from '@angular/core';

import { Team } from '../models/team';
import { TeamService } from '../providers/';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  teams: Team[];
  constructor(private teamService: TeamService) {

  }

  ngOnInit() {
    this.teamService.getTeams().subscribe(response => {
      this.teams = response;
    });
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
