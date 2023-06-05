const { StatusCodes } = require('http-status-codes');
const router = require('express').Router({ mergeParams: true });
const Exams = require('./exams.model');

const examsService = require('./exams.service');
const catchErrors = require('../../common/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const examses = await examsService.getAll();

    res.json(examses.map(Exams.toResponse));
  })
);

router.route('/').post(
  catchErrors(async (req, res) => {
    const { teacherId } = req.params;
    const { id, subject, date, score, abiturientId } = req.body;

    const task = await examsService.createExams({
      id,
      subject,
      date,
      score,
      abiturientId,
      teacherId,
    });

    if (task) {
      res.status(StatusCodes.CREATED).json(Exams.toResponse(task));
    } else {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
);

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const exams = await examsService.getById(id);

    if (exams) {
      res.json(Exams.toResponse(exams));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'exams_NOT_FOUND', msg: 'exams not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id, teacherId } = req.params;
    const { subject, date, score, abiturientId } = req.body;

    const exams = await examsService.updateById({
      id,
      subject,
      date,
      score,
      abiturientId,
      teacherId,
    });

    if (exams) {
      res.status(StatusCodes.OK).json(Exams.toResponse(exams));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'exams_NOT_FOUND', msg: 'exams not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const exams = await examsService.deleteById(id);

    if (exams) {
      res
        .status(StatusCodes.NO_CONTENT)
        .json({ code: 'exams_DELETED', msg: 'The exams has been deleted' });
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'exams_NOT_FOUND', msg: 'exams not found' });
    }
  })
);

module.exports = router;
