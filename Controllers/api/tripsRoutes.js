const router = require('express').Router();
const { Trip, Activities } = require('../../models');    
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  console.log("BODY", req.body);
  let { name, budget, days, airfare, hotel } = req.body;
  try {
    const newTrip = await Trip.create({
        name: name,
        budget: (budget - airfare - hotel),
        days: days, 
      user_id: req.session.user_id,
    });
    console.log(newTrip);
    res.status(200).json(newTrip);
  } catch (err) {
    console.error(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
        trip_id: req.session.trip_id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No trip found!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [Activities]
    });

    const trip = tripData.get({ plain: true });

    res.status(200).json(trip);

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;