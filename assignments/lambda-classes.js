// CODE here for your Lambda Classes
class Person {
  constructor(attrs) {
    this.name = attrs.name;
    this.location = attrs.location;
    this.age = attrs.age;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructors extends Person {
  constructor(attrs) {
    super(attrs);

    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subj) {
    return `Today we are learning about ${subj}`;
  }

  grade(studentObj, studentStr) {
    // generate a random number between 1 and 100
    let randomNum = Math.floor(Math.random() * 100);
    // subtract the random num from the students grade
    let grade = studentObj.grade - randomNum;
    // set the grade to the new calculated grade
    studentObj.grade = grade;
    return `${studentObj.name} receives a score of ${grade} on ${studentStr}`;
  }
}

class Students extends Person{
  constructor(attrs) {
    super(attrs);

    this.previousBackground = attrs.previousBackground;
    this.favSubjects = attrs.favSubjects;
    // Stretch
    this.grade = 100;
  }

  listsSubjects() {
    this.favSubjects.forEach((element) => {
      console.log(element);
    });
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    return `${this.name} has begun sprint challenge on ${subject}`;
  }

  graduate() {
    // here's your ternary WILL!
    let graduated = (this.grade > 70) ? true : false;
    let passStr = `Congratulations ${this.name}, you have graduated with a score of ${this.grade}!`;
    let failStr = `I'm sorry ${this.name}, you have been held back because of your current grade of ${this.grade}`;
    // here's another ternary WILL!
    return (graduated) ? passStr : failStr;
  }
}

class ProjectManagers extends Instructors {
  constructor(attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel) {
    return `${this.name} announces to ${channel}, @channel standby times!`
  }

  debugsCode(studentObj, subject) {
    return `${this.name} debugs ${studentObj.name}'s code on ${subject}`
  }
}


// Test to see if everything works correctly
const fred = new Instructors({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});


// New Student
const mike = new Students({
  name: 'Mike',
  location: 'USA',
  age: 21,
  previousBackground: 'Civil Engineer',
  favSubjects: ['Math', 'Spanish', 'Javascript']
})

console.log(fred.specialty);
console.log(fred.speak());
console.log(fred.catchPhrase);
console.log(fred.grade(mike, 'math'));


//check student class
console.log(mike.name);
console.log(mike.listsSubjects());
console.log(mike.graduate());
