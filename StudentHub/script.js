let students = [
    {
        id: 1,
        name: "Daniel Okafor",
        age: 22,
        course: "Software Engineering",
        email: "daniel@example.com"
    },
    {
        id: 2,
        name: "Sarah Williams",
        age: 20,
        course: "UI/UX Design",
        email: "sarah@example.com"
    },
    {
        id: 3,
        name: "Michael Adams",
        age: 24,
        course: "Data Science",
        email: "michael@example.com"
    }
];

const studentForm = document.getElementById("studentForm");
const studentsList = document.getElementById("studentsList");
const studentCount = document.getElementById("studentCount");
const studentTotal = document.getElementById("studentTotal");

const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const courseInput = document.getElementById("course");
const emailInput = document.getElementById("email");

function renderStudents() {

    studentsList.innerHTML = "";

    studentCount.textContent = students.length;

    studentTotal.textContent =
        `${students.length} ${students.length === 1 ? "Student" : "Students"}`;

    if (students.length === 0) {

        const emptyState = document.createElement("div");

        emptyState.classList.add("empty-state");

        emptyState.textContent =
            "No students registered yet.";

        studentsList.appendChild(emptyState);

        return;
    }

    students.forEach(function(student) {

        const studentCard = document.createElement("article");

        studentCard.classList.add("student-card");

        const initials = student.name
            .split(" ")
            .map(function(word) {
                return word[0];
            })
            .join("")
            .slice(0, 2)
            .toUpperCase();

        studentCard.innerHTML = `
            <div class="student-avatar">
                ${initials}
            </div>

            <div class="student-info">
                <h3>${student.name}</h3>
                <p>${student.email}</p>
            </div>

            <div class="student-meta">
                <span class="student-course">
                    ${student.course}
                </span>

                <span class="student-age">
                    ${student.age} yrs
                </span>
            </div>

            <button
                class="delete-button"
                data-id="${student.id}"
                title="Delete student"
            >
                ×
            </button>
        `;

        studentsList.appendChild(studentCard);
    });
}

studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const newStudent = {
        id: Date.now(),
        name: nameInput.value.trim(),
        age: Number(ageInput.value),
        course: courseInput.value,
        email: emailInput.value.trim()
    };

    students.push(newStudent);

    renderStudents();

    studentForm.reset();
});

studentsList.addEventListener("click", function(event) {

    if (!event.target.classList.contains("delete-button")) {
        return;
    }

    const studentId = Number(event.target.dataset.id);

    students = students.filter(function(student) {
        return student.id !== studentId;
    });

    renderStudents();
});

renderStudents();