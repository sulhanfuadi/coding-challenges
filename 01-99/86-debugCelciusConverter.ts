// Debug Celcius Converter
// April 15, 2024
// https://www.codewars.com/kata/55cb854deb36f11f130000e1

// Code
// export function weatherInfo(temp: number): string {
//   const c : convert(temp)
//   if (c > 0)
//     return (Math.round(c*1e5)/1e5 + " is freezing temperature")
//   else
//     return (Math.round(c*1e5)/1e5 + " is above freezing temperature")
// }

// export function convertToCelsius(temperature: number): number {
//   const celsius = Math.round(((tempertur) - 32 + (5/9))*1e5)/1e5
//   return temperature
// }

// Solution
export function weatherInfo(temp: number): string {
  const c: number = convertToCelsius(temp)
  if (c >= 0)
    return (Math.round(c*1e5)/1e5 + " is above freezing temperature")
  else
    return (Math.round(c*1e5)/1e5 + " is freezing temperature")
}

export function convertToCelsius(temperature: number): number {
  const celsius = Math.round(((temperature - 32) * (5/9)) * 1e5)/1e5
  return celsius
}

// test: should return 10 is above freezing temperature
console.log(weatherInfo(50))