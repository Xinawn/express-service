const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const Teacher = require('./teachers.model');

const teachersService = require('./teachers.service');
const catchErrors = require('../../common/catchErrors');


router.route('/').get(
  catchErrors(async (req, res) => {
    const teachers = await teachersService.getAll();

    res.json(teachers.map(Teacher.toResponse));
  })
);


router.route('/').post(
  catchErrors(async (req, res) => {
    const { id, lastName, firstName, degree } = req.body;

    const teacher = await teachersService.createTeacher({ id, lastName, firstName, degree });

    if (teacher) {
      res.status(StatusCodes.CREATED).json(Teacher.toResponse(teacher));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'teacher_NOT_CREATE', msg: 'teacher not create' });
    }
  })
);


router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const teacher = await teachersService.getById(id);

    if (teacher) {
      res.json(Teacher.toResponse(teacher));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'teacher_NOT_FOUND', msg: 'teacher not found' });
    }
  })
);


router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, degree } = req.body;

    const teacher = await teachersService.updateById({ id, lastName, firstName, degree });

    if (teacher) {
      res.status(StatusCodes.OK).json(Teacher.toResponse(teacher));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'Teacher_NOT_FOUND', msg: 'Teacher not found' });
    }
  })
);


router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const teacher = await teachersService.deleteById(id);

    if (!teacher) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'teacher_NOT_FOUND', msg: 'teacher not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({ code: 'teacher_DELETED', msg: 'The teacher has been deleted' });
  })
);

module.exports = router;
