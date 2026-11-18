const findTheOldest = function(people) {
  function getAge(person) {
    const endYear = person.yearOfDeath ?? new Date().getFullYear();
    return endYear - person.yearOfBirth;
  }

  return people.reduce((oldestSoFar, currentPerson) => {
    if (getAge(oldestSoFar) < getAge (currentPerson)) {
      return currentPerson;
    }
    return oldestSoFar;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
