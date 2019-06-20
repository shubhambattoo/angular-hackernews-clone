import { Injectable } from '@angular/core';
import { Adapter } from './../interfaces/adapter';

export class User {
  constructor(
    public id: number,
    public created_time: number,
    public created: string,
    public karma: number,
    public avg: object,
    public about?: string
  ) { }

  showTime () {
    if (this.created) {
      return this.created;
    }
  }

  showKarma () {
    if (this.karma) {
      return this.karma;
    }
  }
}

@Injectable({
  providedIn: 'root'
})

export class UserAdapter implements Adapter<User> {

  adapt(data: any): User {
    return new User(
      data.id,
      data.created_time,
      data.created,
      data.karma,
      data.avg,
      data.about
    );
  }
}