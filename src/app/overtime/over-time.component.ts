import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Time } from '../../model/time';

@Component({
  selector: 'over-time',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './over-time.component.html',
  styles: ``
})
export class OverTimeComponent {
  arrivalHour: string = '';
  arrivalMinute: string = '';

  leaveHour: string = '';
  leaveMinute: string = '';

  overtimeTime: Time = new Time(0, 0);

  calculateOvertimeTime(): void {
    const arrivalTime = new Time(Number(this.arrivalHour), Number(this.arrivalMinute));
    const leaveTime = new Time(Number(this.leaveHour), Number(this.leaveMinute));

    const workTime = leaveTime.subtract(arrivalTime);
    let minTime = Time.MINIMUM;
    if (workTime.hour >= 6) {
      minTime = minTime.add(Time.BREAK);
    }
    this.overtimeTime = workTime.subtract(minTime);
  }

  setNow(): void {
    const now = new Date();
    this.leaveHour = now.getHours().toString();
    this.leaveMinute = now.getMinutes().toString();
  }
}
