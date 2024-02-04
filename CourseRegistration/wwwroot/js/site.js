// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

function deleteCourse(courseId) {
    if (confirm("Are you sure you want to delete this course?")) {
        $.ajax({
            url: '/Courses/' + courseId,
            type: 'DELETE',
            success: function (result) {
                window.location.href = "/Courses";
            }
        });
    }
}

function deleteInstructor(instructorId) {
    if (confirm("Are you sure you want to delete this instructor?")) {
        $.ajax({
            url: '/Instructors/' + instructorId,
            type: 'DELETE',
            success: function (result) {
                window.location.href = "/Instructors";
            }
        });
    }
}

function deleteStudent(studentId) {
    if (confirm("Are you sure you want to delete this student?")) {
        $.ajax({
            url: '/Students/' + studentId,
            type: 'DELETE',
            success: function (result) {
                window.location.href = "/Students";
            }
        });
    }
}



function editCourse(courseId, courseNumber, name, description) {
    document.getElementById("label").innerText = "Edit Course";

    document.getElementById("courseId").value = courseId;
    document.getElementById("courseNumber").value = courseNumber;
    document.getElementById("name").value = name;
    document.getElementById("description").value = description;

    document.getElementById("submit").innerText = "Update";
    $("#modal").modal("show");
}

function newCourse() {
    document.getElementById("label").innerText = "Add Course";
    document.getElementById("courseId").value = "";
    document.getElementById("courseNumber").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";

    document.getElementById("submit").innerText = "Create";

    $("#modal").modal("show");
}


function editInstructor(instructorId, firstName, lastName, email, courseId) {
    document.getElementById("label").innerText = "Edit Instructor";

    document.getElementById("instructorId").value = instructorId;
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("email").value = email;
    document.getElementById("courseId").value = courseId;
    document.getElementById("submit").innerText = "Update";
    $("#modal").modal("show");
}

function newInstructor() {
    document.getElementById("label").innerText = "Add Instructor";
    document.getElementById("instructorId").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("courseId").value = "";
    document.getElementById("submit").innerText = "Create";

    $("#modal").modal("show");
}


function editStudent(studentId, firstName, lastName, email, phoneNumber) {
    document.getElementById("label").innerText = "Edit Student";

    document.getElementById("studentId").value = studentId;
    document.getElementById("firstName").value = firstName;
    document.getElementById("lastName").value = lastName;
    document.getElementById("email").value = email;
    document.getElementById("phoneNumber").value = phoneNumber;
    document.getElementById("submit").innerText = "Update";
    $("#modal").modal("show");
}

function newStudent() {
    document.getElementById("label").innerText = "Add Student";
    document.getElementById("studentId").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("submit").innerText = "Create";

    $("#modal").modal("show");
}