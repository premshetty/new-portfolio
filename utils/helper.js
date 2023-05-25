export const extractNumberFromString = (str) => {
    if (typeof str !== 'string') {
        return NaN; // Return NaN if the input is not a string
    }

    const numberRegex = /\d+/g; // Regular expression to match one or more digits
    const numbers = str.match(numberRegex);

    if (numbers) {
        return Number(numbers[0]); // Convert the first matched string to a number
    }

    return NaN; // Return NaN if no numbers are found
};


