const apiUrl = {
    url: 'http://127.0.0.1:3000'
};

if (process.env.NODE_ENV === 'production') {
    apiUrl.url = 'https://foret.azurewebsites.net'
}

module.exports = apiUrl;