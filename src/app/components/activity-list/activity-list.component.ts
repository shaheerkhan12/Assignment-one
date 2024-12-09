import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivityService } from '../../services/activity.service';
import { Activity } from '../../models/activity.model';
import { ActivityInputComponent } from '../activity-input/activity-input.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faList, faSortDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-activity-list',
  standalone: true,
  imports: [CommonModule, ActivityInputComponent, FontAwesomeModule],
  templateUrl: './activity-list.component.html',
})
export class ActivityListComponent {
  activityService = inject(ActivityService);
  activities$ = this.activityService.getActivities();
  activityId: string ='';
  faSortDown = faSortDown;

  constructor() {}

  getActivityIcon(type: string) {
    const icon = this.activityService.buttons.find((button) => {
      return button.title === type;
    });
    return icon ? icon.icon : faList;
  }

  getRelativeTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 1) return 'just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  }

  deleteActivity(id: string): void {
    this.activityService.deleteActivity(id);
  }
  onMouseEnter(id: string) {
    this.activityId = id;
  }
  onMouseLeave() {
    this.activityId = '';
  }
}
