const router = require('express').Router();
const axios = require('axios');

router.route('/units/:id')
  .get((req, res) => {
    const { id } = req.params;
    axios.get(`http://54.211.210.36:2100/api/units/${id}`)
      .then(({ data }) => {
        res.send(data);
      });
  });

module.exports = router;
