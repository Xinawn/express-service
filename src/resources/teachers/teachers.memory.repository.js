const Teacher = require('./teachers.model');

const Teachers = [new Teacher()];

const getAll = async () => Teachers;

const getById = async (id) => Teachers.find((teacher) => teacher.id === id);

const createTeacher = async ({ id, lastName, firstName, degree }) => {
  const teacher = new Teacher({ id, lastName, firstName, degree });
  Teachers.push(teacher);
  return teacher;
};

const deleteById = async (id) => {
  const teacherPosition = Teachers.findIndex((teacher) => teacher.id === id);

  if (teacherPosition === -1) return null;

  const teacherDeletable = Teacher[teacherPosition];

  Teacher.splice(teacherPosition, 1);
  return teacherDeletable;
};

const updateById = async ({ id, lastName, firstName, degree }) => {
  const teacherPosition = Teachers.findIndex((teacher) => teacher.id === id);

  if (teacherPosition === -1) return null;

  const oldTeacher = Teachers[teacherPosition];
  const newTeacher = { ...oldTeacher, lastName, firstName, degree };

  Teachers.splice(teacherPosition, 1, newTeacher);
  return newTeacher;
};

module.exports = {
  Teachers,
  getAll,
  getById,
  createTeacher,
  deleteById,
  updateById,
};
