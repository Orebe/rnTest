/**
 * @description Calculate percentage between two values
 * @param {number} firstValue
 * @param {number} secondValue
 * @returns {number} Value betweend 0 and 1. Can return 0 if second value is zero
 */
export const computePercentage = (firstValue, secondValue) => {
    if (firstValue && secondValue && secondValue !== 0) {
        return firstValue / secondValue
    }
    return 0
}
