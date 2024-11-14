import { Component } from '@angular/core';
import { LeaveTimeComponent } from "./leavetime/leave-time.component";
import { OverTimeComponent } from "./overtime/over-time.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LeaveTimeComponent, OverTimeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timey';
}
