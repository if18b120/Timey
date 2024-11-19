export class Time {
    public static readonly ZERO: Time = this.fromHoursAndMinutes(0, 0);
    public static readonly MAXIMUM: Time = this.fromHoursAndMinutes(10, 0);
    public static readonly MINIMUM: Time = this.fromHoursAndMinutes(7, 42);
    public static readonly BREAK: Time = this.fromHoursAndMinutes(0, 30);

    public static fromMinutes(minutes: number): Time {
        return new Time(minutes);
    }

    public static fromHoursAndMinutes(hours: number, minutes: number): Time {
        return new Time(hours* 60 + minutes);
    }

    private constructor(minutes: number) {
        this.internalMinutes = minutes;
    }

    private readonly internalMinutes: number;

    get minutes(): number {
        return this.internalMinutes;
    }

    get hours(): number {
        return Math.floor(this.minutes / 60);
    }

    add(time: Time): Time {
        return new Time(this.minutes + time.minutes);
    }

    subtract(time: Time): Time {
        return new Time(this.minutes - time.minutes);
    }

    toString(): string {
        const hour = Math.floor(this.minutes / 60);
        const minute = Math.abs(this.minutes % 60);

        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        return `${formattedHour}:${formattedMinute}`;
    }
}