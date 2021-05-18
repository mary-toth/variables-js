function main() {
  //Practice Creating Variables

  let numberOfCupsOfCoffee = 1
  let fullName = 'Mary Toth'

  console.log(
    `My name is ${fullName} and today I drank ${numberOfCupsOfCoffee} cup of coffee today.`
  )

  const aboutMe = {
    fullName: 'Mary Toth',
    luckyNumber: 12,
    favoriteMovies: ['Midsommar', 'Inglorious Basterds', 'Donnie Darko'],
  }

  //Practice Getting Input From User

  userName = window.prompt("What's your name?")
  console.log(`Hi, your name is ${userName}!`)

  // Converting String Input Into Numbers

  let firstOperand = parseFloat(window.prompt('Enter a number!'))
  let secondOperand = parseFloat(window.prompt('Enter a second number!'))

  console.log(firstOperand)
  console.log(secondOperand)

  // Doing Math

  let sum = firstOperand + secondOperand
  let difference = firstOperand - secondOperand
  let product = firstOperand * secondOperand
  let quotient = firstOperand / secondOperand
  let remainder = firstOperand % secondOperand

  console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}.`)
  console.log(
    `The difference of ${firstOperand} and ${secondOperand} is ${difference}.`
  )
  console.log(
    `The product of ${firstOperand} and ${secondOperand} is ${product}.`
  )
  console.log(
    `The quotient of ${firstOperand} and ${secondOperand} is ${quotient}.`
  )
  console.log(
    `The remainder of ${firstOperand} and ${secondOperand} is ${remainder}.`
  )

  // Using Arrays

  let numbers = [39, 9, 55, 48, 19, 8, 1, 75, 81, 3, 7, 6, 28, 4, 9, 26, 7]

  let smallest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] < smallest) {
      smallest = numbers[index]
    }
  }
  let largest = numbers[0]
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] > largest) {
      largest = numbers[index]
    }
  }
  let arraySum = 0
  for (var index = 0; index < numbers.length; index++) {
    arraySum = arraySum + numbers[index]
  }

  let average = arraySum / numbers.Length

  const stats = {
    smallest: smallest,
    largest: largest,
    sum: arraySum,
    average: average,
  }

  let sumOfOdd = 0
  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
      sumOfOdd += numbers[index]
    }
  }

  console.log(`The sum of all the odd numbers: ${sumOfOdd}.`)
}
document.addEventListener('DOMContentLoaded', main)
