import { Time } from "./time";

export class TimeCalculator {
    minimumTime: Time = new Time(7, 42);
    maximumTime: Time = new Time(10, 0);
    breakTime: Time = new Time(0, 30);

    calculateLeaveTime(idHours: string, idMinutes: string, idOutputMin: string, idOutputMax: string): void {
        const hoursInput = document.getElementById(idHours) as HTMLInputElement;
        const minutesInput = document.getElementById(idMinutes) as HTMLInputElement;
        const hours = parseInt(hoursInput.value);
        const minutes = parseInt(minutesInput.value);

        const arrivalTime = new Time(hours, minutes);

        const leaveTimeMin = arrivalTime.add(this.minimumTime).add(this.breakTime);
        const leaveTimeMax = arrivalTime.add(this.maximumTime).add(this.breakTime);

        const outputMin = document.getElementById(idOutputMin);
        if (outputMin) {
            outputMin.textContent = leaveTimeMin.toString();
        }

        const outputMax = document.getElementById(idOutputMax);
        if (outputMin) {
            outputMin.textContent = leaveTimeMax.toString();
        }
    }
}