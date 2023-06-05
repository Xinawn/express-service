const Teacher = require('./board.model');

// const Boards = [new Board()];
const Teachers = [new Teacher()];

// const getAll = async () => Boards;
const getAll = async () => Teachers;

// const getById = async (id) => Boards.find((board) => board.id === id);
const getById = async (id) => Teachers.find((teacher) => teacher.id === id);

// const createBoard = async ({ id, title, columns }) => {
//   const board = new Board({ id, title, columns });
//   Boards.push(board);
//   return board;
// };
const createTeacher = async ({ id, lastName, firstName, degree }) => {
  const teacher = new Teacher({ id, lastName, firstName, degree });
  Teachers.push(teacher);
  return teacher;
};

// const deleteById = async (id) => {
//   const boardPosition = Boards.findIndex((board) => board.id === id);

//   if (boardPosition === -1) return null;

//   const boardDeletable = Boards[boardPosition];

//   Boards.splice(boardPosition, 1);
//   return boardDeletable;
// };
const deleteById = async (id) => {
  const teacherPosition = Teachers.findIndex((teacher) => teacher.id === id);

  if (teacherPosition === -1) return null;

  const teacherDeletable = Teacher[teacherPosition];

  Teacher.splice(teacherPosition, 1);
  return teacherDeletable;
};

// const updateById = async ({ id, title, columns }) => {
//   const boardPosition = Boards.findIndex((board) => board.id === id);

//   if (boardPosition === -1) return null;

//   const oldBoard = Boards[boardPosition];
//   const newBoard = { ...oldBoard, title, columns };

//   Boards.splice(boardPosition, 1, newBoard);
//   return newBoard;
// };
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
