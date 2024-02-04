Assignment 2
============

   > **Task:** Submit to complete this assignment  
   > 30 Marks

For this assignment, re-visit the Course Registration website you created in Assignment 1.

You must enhance the website to include forms that allow you to create and edit students, instructors, and courses. The Student entry page should also allow students to register for existing courses. The entry forms can be placed on the same screen as the existing pages that show the list of students, instructors, and courses, or they can be added on new pages.

Use Entity Framework Core migrations to take the classes for students, instructors, and courses and create a database. Since students can enroll in multiple courses and courses can hold multiple students, this is a many-to-many relationship. You'll need to define a class and table called StudentCourse that holds records linking students to courses. Use LINQ to generate a list of Students for each course and display it in the modal dialog you developed in Assignment 1.

You do not need to add validation at this point to the front-end, but you should have validation on the back-end that prevents bad data from entering the database. Define a data access layer that can do validation and error-handling.

Your application should also use DTOs between the data layer and the controller rather than passing around the actual database entity classes.


_________________________________
Instructions to run application:
=================================
Run Commands in the folder CourseRegistration.Data:
>>  dotnet tool install --global dotnet-ef
>>
>>  dotnet ef database update



