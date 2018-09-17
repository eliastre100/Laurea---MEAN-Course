const index = (req, res, next) => {
    res.render('index', { title: 'Band\'s corner' });
};

module.exports = {
    index
};