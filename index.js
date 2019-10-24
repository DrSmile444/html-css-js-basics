const courseNameInput = document.querySelector('#course-name');
const coursePeopleCountInput = document.querySelector('#course-people__count');
const courseAddButton = document.querySelector('#course-add__button');
const courseListNode = document.querySelector('#course-list');

const courseStudentsCountNode = document.querySelector('#course-total-students__count');

const courses = [];

const colorArray = [
  '#fe9e06', '#fe2d06', '#8efe06', '#06fe85',
  '#06b4fe'
];

courseAddButton.addEventListener('click', handleCourseAdd);
coursePeopleCountInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    handleCourseAdd()
  }
});

function handleCourseAdd() {
  const courseName = courseNameInput.value;
  const courseCount = +coursePeopleCountInput.value;

  if (courseName && courseCount) {
    createCourse(courseName, courseCount);

    clearInputs();
  }
}


function createCourse(name, count) {
  const course = { name, count };

  courses.push(course);
  updateCoursesList();
}

function updateCoursesList() {
  clearCourseList();
  const multiplier = 15;
  const totalStudents = courses.reduce((accumulator, currentCourse) => accumulator + currentCourse.count, 0);

  courses.forEach(course => {
    const listItem = document.createElement('li');
    listItem.className = 'course-list__item';
    listItem.style.backgroundColor = getRandomColor();
    listItem.style.width = course.count * multiplier + 'px';
    listItem.innerText = `${course.name} (${course.count})`;

    courseListNode.appendChild(listItem);
  });

  courseStudentsCountNode.innerHTML = totalStudents;
}

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colorArray.length);
  return colorArray[randomIndex];
}

function clearCourseList() {
  courseListNode.innerHTML = '';
}

function clearInputs() {
  courseNameInput.value = '';
  coursePeopleCountInput.value = '';
}
