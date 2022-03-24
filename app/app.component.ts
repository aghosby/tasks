import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { TasksAssignmentService } from 'src/app/services/tasks-assignment.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'team-management';

  menuStat: boolean = false;

  public getStatus(status: any):void {
    this.menuStat = status;

    console.log(this.menuStat);
  }


}


