
/**
 * Convert mililiter to liter
 * @param value number
 * @returns number - in liter
 */
export const mililiterToLiter = (value: number) => {
    const inLiter = value / 1000;
    return toFixed(inLiter);
};

/**
 * Fixes to 2 decimal numbers
 * @param num 
 * @returns number
 */
export const toFixed = (num: number) => Number(num.toString().match(/^\d+(?:\.\d{0,2})?/));

