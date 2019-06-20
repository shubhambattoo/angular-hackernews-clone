import { Injectable } from '@angular/core';
import { Adapter } from './../interfaces/adapter';

export class Story {
  constructor(
    public id: number,
    public title: string,
    public points: number,
    public user: string,
    public time: number,
    public time_ago: string,
    public comments_count: number,
    public type: string,
    public url: string,
    public domain: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class StoryAdapter implements Adapter<Story> {

  adapt(data: any): Story {
    return new Story(
      data.id,
      data.title,
      data.points,
      data.user,
      data.time,
      data.time_ago,
      data.comments_count,
      data.type,
      data.url,
      data.domain
    );
  }
}