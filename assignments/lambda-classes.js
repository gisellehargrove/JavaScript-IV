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

class Students extends Person{
  constructor(attrs) {
    super(attrs);
  }
}

class Instructors extends Person {
  constructor(attrs) {
    super(attrs);
  }
}


class ProjectManagers extends Instructors {
  constructor(attrs) {
    super(attrs);
  }
}
