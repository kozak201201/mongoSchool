okey some 'school' project on mongodb;

Models: TEACHER, STUDENT, COURSE;

The teacher:
Can (CRUD) a course that will be led; --> TeachersCourses table in db;

The student:
Can join/leave the teacher course --> StudentsTeachersCourses table in db;


Teacher --> (id, name, surname, age);
Student --> (id, name, surname, age);
Course --> (id, name);

TeachersCourses(id, teacherId);
StudentsTeachersCourses(id, studentId, teachersCoursesId);