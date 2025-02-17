/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    // 开氏度
    const kelvin = celsius + 273.15;
    // 华氏度
    const fahrenheit = celsius * 1.8  + 32;

    return [kelvin, fahrenheit]; 
};