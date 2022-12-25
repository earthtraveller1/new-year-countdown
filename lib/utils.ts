class TimeRange {
    private _weeks: number;
    private _days: number;
    private _hours: number;
    private _minutes: number;
    private _seconds: number;
    private _range: number;
    
    constructor(start: number, end: number) {
        this._range = end - start
        
        this._seconds = Math.floor(this._range / 1000)
        this._minutes = Math.floor(this._seconds / 60)
        this._seconds %= 60
        this._hours = Math.floor(this._minutes / 60)
        this._minutes %= 60
        this._days = Math.floor(this._hours / 24)
        this._hours %= 24
        this._weeks = Math.floor(this._days / 7)
        this._days %= 7
    }
    
    public get weeks(): number {
        return this._weeks;
    }
    
    public get days(): number {
        return this._days;
    }
    
    public get hours(): number {
        return this._hours;
    }
    
    public get minutes(): number {
        return this._minutes;
    }
    
    public get seconds(): number {
        return this._seconds;
    }
    
    public fractionOfYearOver(): number {
        const thisYear = new Date().getFullYear()
        const nextYear = thisYear + 1
        
        const yearRange = new Date(nextYear, 1, 1).getTime() - new Date(thisYear, 1, 1).getTime()
        
        return ((yearRange - this._range) / yearRange)
    }
}

/**
 * @brief Pads a number with a minimum number of digits.
 * @param num The number that you want to pad.
 * @param digits The number of digits you want to have.
 */
function padNumber(num: number, digits: number): string {
    let result = num.toString()
    if (result.length < digits) {
        const missingDigits = digits - result.length;
        for (let i = 0; i < missingDigits; i++) {
            result = '0' + result;
        }
    }
    
    return result;
}

export {
    TimeRange
}