import { Component } from '@angular/core';
import { ActivityListComponent } from './components/activity-list/activity-list.component';

@Component({
  selector: 'app-root',
  imports: [ ActivityListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Assignmentone';
}
