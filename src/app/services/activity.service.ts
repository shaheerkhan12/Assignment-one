import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Activity, ActivityType } from '../models/activity.model';
import { faBeerMugEmpty, faCoffee, faComment, faList, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private activities: Activity[] = [];
  private activitiesSubject = new BehaviorSubject<Activity[]>([]);
  buttons: {title:ActivityType,icon:any}[] = [
    { title: 'Chat', icon: faComment },
    { title: 'Call', icon: faPhone },
    { title: 'Coffee', icon: faCoffee },
    { title: 'Beer', icon: faBeerMugEmpty },
    { title: 'Meeting', icon: faUser },
  ];
  getActivities(): Observable<Activity[]> {
    let storage = localStorage.getItem('activites')
    if(storage){ 
      this.activities=JSON.parse(storage)
      this.activitiesSubject.next(this.activities)
    }
    return this.activitiesSubject.asObservable();
  }

  addActivity(content: string, type: ActivityType): void {
    const newActivity: Activity = {
      id: Math.random().toString(),
      content,
      timestamp: new Date(),
      user: 'Milton Romaguera',
      type
    };
    this.activities = [newActivity, ...this.activities];
    this.activitiesSubject.next(this.activities);
    localStorage.setItem('activites',JSON.stringify(this.activities))
  }

  deleteActivity(id: string): void {
    this.activities = this.activities.filter(activity => activity.id !== id);
    this.activitiesSubject.next(this.activities);
    localStorage.setItem('activites',JSON.stringify(this.activities))
  }
}