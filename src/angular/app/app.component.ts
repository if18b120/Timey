import { Component } from '@angular/core';
import { Time } from '../../model/time';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'timey';

  arrivalString: TimeStringWrapper = { value: '' };
  arrivalTime: TimeWrapper = { time: Time.fromMinutes(0) };

  leaveString: TimeStringWrapper = { value: '' };
  leaveTime: TimeWrapper = { time: Time.fromMinutes(0) };

  leaveTimeMin: Time = Time.fromMinutes(0);
  leaveTimeMax: Time = Time.fromMinutes(0);
  overtimeTime: Time = Time.fromMinutes(0);

  calculate(): void {
    this.calculateLeaveTime();
    this.calculateOvertimeTime();
  }

  calculateLeaveTime(): void {
    this.leaveTimeMin = this.arrivalTime.time.add(Time.MINIMUM).add(Time.BREAK);
    this.leaveTimeMax = this.arrivalTime.time.add(Time.MAXIMUM).add(Time.BREAK);
  }

  calculateOvertimeTime(): void {
    const workTime = this.leaveTime.time.subtract(this.arrivalTime.time);
    let minTime = Time.MINIMUM;
    if (workTime.hours >= 6) {
      minTime = minTime.add(Time.BREAK);
    }
    this.overtimeTime = workTime.subtract(minTime);
  }

  setNow(): void {
    const now = new Date();
    this.leaveTime.time = Time.fromHoursAndMinutes(now.getHours(), now.getMinutes());
    this.leaveString.value = this.leaveTime.time.toString();
    this.calculateOvertimeTime();
  }

  formatAndCalculate(timeStringWrapper: TimeStringWrapper, timeWrapper: TimeWrapper): void {
    const timeString: string = timeStringWrapper.value;
    switch (timeString.length) {
      case 1:
      case 2:
        timeWrapper.time = Time.fromHoursAndMinutes(parseInt(timeString), 0);
        break;
      case 3:
        timeWrapper.time = Time.fromHoursAndMinutes(parseInt(timeString[0]), parseInt(timeString[1] + timeString[2]));
        break;
      case 4:
        timeWrapper.time = Time.fromHoursAndMinutes(parseInt(timeString[0] + timeString[1]), parseInt(timeString[2] + timeString[3]));
        break;
      case 5:
        timeWrapper.time = Time.fromHoursAndMinutes(parseInt(timeString[0] + timeString[1]), parseInt(timeString[3] + timeString[4]));
    }
    timeStringWrapper.value = timeWrapper.time.toString();
    this.calculate();
  }

  selectText(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.select();
  }
}

interface TimeStringWrapper {
  value: string;
}

interface TimeWrapper {
  time: Time;
}
