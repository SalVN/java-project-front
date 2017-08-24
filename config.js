module.exports = {
    API_URL: function (env) {
        if (env === 'prod') return 'http://ec2-54-77-175-175.eu-west-1.compute.amazonaws.com:6061/'
        else return 'http://localhost:9092'
    }
}