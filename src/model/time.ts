export class Time {
    public static readonly ZERO: Time = new Time(0, 0);
    public static readonly MAXIMUM: Time = new Time(10, 0);
    public static readonly MINIMUM: Time = new Time(7, 42);
    public static readonly BREAK: Time = new Time(0, 30);

    constructor(hours: number, minutes: number) {
        this.hour = hours;
        this.minute = minutes;
    }
    hour: number;
    minute: number;

    add(time: Time): Time {
        let newHour = this.hour + time.hour;
        let newMinute = this.minute + time.minute;
        if (newMinute >= 60) {
            newHour++;
            newMinute -= 60;
        }
        return new Time(newHour, newMinute);
    }

    subtract(time: Time): Time {
        let newHour = this.hour - time.hour;
        let newMinute = this.minute - time.minute;
        if (newMinute < 0) {
            newHour--;
            newMinute += 60;
        }
        return new Time(newHour, newMinute);
    }

    toString(): string {
        const formattedHour = this.hour.toString().padStart(2, '0');
        const formattedMinute = this.minute.toString().padStart(2, '0');
        return `${formattedHour}:${formattedMinute}`;
    }
}