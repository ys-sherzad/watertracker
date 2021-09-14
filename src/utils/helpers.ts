
/**
 * Convert mililiter to liter
 * @param value number
 * @returns number - in liter
 */
export const mililiterToLiter = (value: number) => {
    const inLiter = value / 1000;
    return Number(inLiter.toFixed(1));
};