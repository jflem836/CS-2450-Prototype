// Brings up the different course cards below major and ge courses on course database screen
function toggleDropdown(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  if (dropdown) {
    dropdown.classList.toggle("open");
  }
}


// Schedule Page
// ==================================
function addCourseCard(day, time, courseCode, courseId) {
    const cell = document.querySelector(`td[data-day="${day}"][data-time="${time}"]`);
    if (!cell) return;

    cell.dataset.course = courseId;

    const span = document.createElement('span');
    span.className = 'sch-course-card';
    span.textContent = courseCode;
    cell.appendChild(span);
}

function removeCourseCard(day, time) {
    const cell = document.querySelector(`td[data-day="${day}"][data-time="${time}"]`);
    if (!cell) return;

    delete cell.dataset.course;
    cell.querySelector('.sch-course-card')?.remove();
}

function removeCourse(courseId) {
    document.querySelectorAll(`td[data-course="${courseId}"]`).forEach(cell => {
        delete cell.dataset.course;
        cell.querySelector('.sch-course-card')?.remove();
    });
}
