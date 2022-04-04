class Student {
  registration: number;
  name: string;
  grades: [number, number, number, number];
  papers: [number, number];

  constructor(registration: number, name: string, grades: [number, number, number, number], papers:  [number, number]) {
    this.registration = registration;
    this.name = name;
    this.grades = grades;
    this.papers = papers;
  }

  sumGrades() {
    return this.grades.reduce((acc, grade) => {
      return acc + grade
    }, 0)
  }

  averageGrades() {
    const sum = this.grades.reduce((acc, grade) => {
      return acc + grade
    }, 0)

    const numberOfGrades = this.grades.length;

    const result = sum / numberOfGrades;

    return result;
  }
}