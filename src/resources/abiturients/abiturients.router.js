const { StatusCodes } = require('http-status-codes');
const router = require('express').Router();
const Abiturient = require('./abiturients.model');

const abiturientsService = require('./abiturients.service');
const catchErrors = require('../../common/catchErrors');

router.route('/').get(
  catchErrors(async (req, res) => {
    const abiturients = await abiturientsService.getAll();

    res.json(abiturients.map(Abiturient.toResponse));
  })
);

router.route('/').post(async (req, res) => {
  const { lastName, firstName, numCertificate } = req.body;

  const abiturient = await abiturientsService.createAbiturient({
    lastName,
    firstName,
    numCertificate,
  });

  if (abiturient) {
    res.status(StatusCodes.CREATED).json(Abiturient.toResponse(abiturient));
  } else {
    res
      .status(StatusCodes.BAD_REQUEST)
      .json({ code: 'abiturient_NOT_CREATE', msg: 'abiturient not create' });
  }
});

router.route('/:id').get(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const abiturient = await abiturientsService.getById(id);

    if (abiturient) {
      res.json(Abiturient.toResponse(abiturient));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'abiturient_NOT_FOUND', msg: 'abiturient not found' });
    }
  })
);

router.route('/:id').put(
  catchErrors(async (req, res) => {
    const { id } = req.params;
    const { lastName, firstName, numCertificate } = req.body;

    const abiturient = await abiturientsService.updateById({
      id,
      lastName,
      firstName,
      numCertificate,
    });

    if (abiturient) {
      res.status(StatusCodes.OK).json(Abiturient.toResponse(abiturient));
    } else {
      res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'Abiturient_NOT_FOUND', msg: 'Abiturient not found' });
    }
  })
);

router.route('/:id').delete(
  catchErrors(async (req, res) => {
    const { id } = req.params;

    const abiturient = await abiturientsService.deleteById(id);

    if (!abiturient) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ code: 'Abiturient_NOT_FOUND', msg: 'Abiturient not found' });
    }

    return res
      .status(StatusCodes.NO_CONTENT)
      .json({
        code: 'Abiturient_DELETED',
        msg: 'The Abiturient has been deleted',
      });
  })
);

module.exports = router;
