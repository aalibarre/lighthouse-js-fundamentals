const ageCalculator = function(name, yearOfBirth, currentYear) {
  const age =  currentYear - yearOfBirth 
  return name + " is " + age + " years old." 
}

console.log(ageCalculator("Asha", 1997, 2021));
console.log(ageCalculator("Ferdinand", 1988, 2015));