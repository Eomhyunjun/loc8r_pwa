const homelist = (req, res) => {
    res.render('index', { title: 'About' });
  }
  const locationInfo = (req, res) => {
    res.render('index', { title: 'location info' });
  }
  const addReview = (req, res) => {
    res.render('index', { title: 'add review' });
  }

  module.exports = {
    homelist,
    locationInfo,
    addReview
  };
  