const validateDatas = (res, data) => {
    if (!(data instanceof Array)) {
        res.render('error', { message: 'Unexpected response data', error: { status: 500 }});
    } else if (!data.length) {
        res.render('error', { message: 'No document in collection', error: { status: 500} })
    }else {
        return true;
    }
    return false;
};

module.exports = {
    validateDatas
};