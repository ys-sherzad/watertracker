
/**
 * Convert mililiter to liter
 * @param value number
 * @returns number - in liter
 */
export const mililiterToLiter = (value: number) => {
    const inLiter = value / 1000;
    return toFixed(inLiter);
};

export const toFixed = (num: number) => {
    if (Math.abs(num) < 1.0) {
        var e = parseInt(num.toString().split('e-')[1]);
        if (e) {
            num *= Math.pow(10, e - 1);
            num = Number('0.' + (new Array(e)).join('0') + num.toString().substring(2));
        }
    } else {
        var e = parseInt(num.toString().split('+')[1]);
        if (e > 20) {
            e -= 20;
            num /= Math.pow(10, e);
            num += Number((new Array(e + 1)).join('0'));
        }
    }
    return num;
};

