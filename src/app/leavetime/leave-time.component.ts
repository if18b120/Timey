import { Component } from '@angular/core';
import { Time } from '../../model/time';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'leave-time',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './leave-time.component.html',
  styles: ``
})
export class LeaveTimeComponent {
  arrivalHours: string = '';
  arrivalMinutes: string = '';

  leaveTimeMin: Time = new Time(0, 0);
  leaveTimeMax: Time = new Time(0, 0);

  calculateLeaveTime(): void {
    const arrivalTime = new Time(Number(this.arrivalHours), Number(this.arrivalMinutes));

    this.leaveTimeMin = arrivalTime.add(Time.MINIMUM).add(Time.BREAK);
    this.leaveTimeMax = arrivalTime.add(Time.MAXIMUM).add(Time.BREAK);
  }
}
