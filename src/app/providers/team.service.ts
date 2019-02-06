import { Injectable } from '@angular/core';

import { Team } from '../models/team';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class TeamService {

  private teamsCollection: AngularFirestoreCollection<Team>;
  private teams: Observable<Team[]>;

  constructor(db: AngularFirestore) {
    this.teamsCollection = db.collection<Team>('teams');

    // team: See comment on line 31
    this.teams = this.teamsCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }

  getTeams() {
    // team: Should snapshotChanges() be moved to this method for data efficiency?
    return this.teams;
  }

  getTeam(id) {
    return this.teamsCollection.doc<Team>(id).valueChanges();
  }

  updateTeam(team: Team, id: string) {
    return this.teamsCollection.doc(id).update(team);
  }

  addTeam(team: Team) {
    // team: Probably should remove this
    return this.teamsCollection.add(team);
  }

  removeTeam(id) {
    // team: Probably should remove this
    return this.teamsCollection.doc(id).delete();
  }

}
