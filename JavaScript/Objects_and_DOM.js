
// Part 1 data
var students = [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
]

function partOne(studentsArray){

  for (var i=0; i < students.length; i++) {

    console.log(students[i].first_name + " " + students[i].last_name);
  }

}

// partOne(students);

// Part 2 data
var users = {
 'Students': [
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function partTwo(usersObject){

  console.log('Students');
  for (var s=0; s<usersObject.Students.length; s++){
    console.log(s+1 + ' - ' + usersObject.Students[s].first_name + ' ' + usersObject.Students[s].last_name +
                    ' - ' + (usersObject.Students[s].first_name.length + usersObject.Students[s].last_name.length));
  }

  console.log('Instructors');
  for (var s=0; s<usersObject.Instructors.length; s++){
    console.log(s+1 + ' - ' + usersObject.Instructors[s].first_name + ' ' + usersObject.Instructors[s].last_name +
                    ' - ' + (usersObject.Instructors[s].first_name.length + usersObject.Instructors[s].last_name.length));
  }

}

partTwo(users);
