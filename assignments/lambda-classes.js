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
    `${studentObj.name} receives a perfect score on ${studentStr}`;
  }
}

class Students extends Person{
  constructor(attrs) {
    super(attrs);

    this.previousBackground = attrs.previousBackground;
    this.favSubjects = attrs.favSubjects;
  }

  listsSubjects() {
    this.favSubjects.forEach((element) => {
      console.log(element);
    });
  }

  PRAssignment(subject) {
    `${this.name} has submitted a PR for ${subject}`;
  }

  sprintChallenge(subject) {
    `${this.namen} has begun sprint challenge on ${subject}`;
  }
}

class ProjectManagers extends Instructors {
  constructor(attrs) {
    super(attrs);
  }
}
