import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivityService } from '../../services/activity.service';
import { ActivityType } from '../../models/activity.model';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-activity-input',
  standalone: true,
  imports: [FormsModule, FontAwesomeModule, NgClass],
  templateUrl: './activity-input.component.html',
})
export class ActivityInputComponent {
  content = '';
  type: ActivityType = 'Chat';
  myInput: any;
  hasBeenTouched:boolean =false;
  constructor(public activityService: ActivityService) {}

  addActivity() {
    if (this.content.trim()) {
      this.activityService.addActivity(this.content, this.type);
      this.content = '';
    }
  }

  submitNote() {
    this.addActivity();
  }
  setType(type: ActivityType) {
    this.type = type;
  }
  markTouched() {
    this.hasBeenTouched = true;

  }
}
