const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

/*1-Crie uma função para adicionar o turno da manhã na lesson2 . Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.*/

const newLesson = (obj, key, value) => {
  obj[key] = value;
};

newLesson(lesson2, "turno", "noite");

/*2-Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listKeys = (obj) => Object.keys(obj);

/*3-Crie uma função para mostrar o tamanho de um objeto.*/

const showObjSize = (obj) => Object.keys(obj).length;

/*4- Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.*/

const listValues = (obj) => Object.values(obj);

/*5-Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do Object.assign . Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1 , lesson2 e lesson3 . Ao executar o comando console.log(allLessons) , a saída deverá ser a seguinte:*/

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

/*6-Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.*/

const countStudents = obj => 

/*7-Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.*/


