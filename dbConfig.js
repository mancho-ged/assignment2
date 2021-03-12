// ES6 
class dbConnection {

    constructor() {

        this.user = 'root';
        this.PASSWORD = "root";
        this.DB = "test";
        this.host = "localhost"// ip address

    }
    getUserName() {
        return this.user

    }
    getPassword() {
        return this.PASSWORD
    }
    getHostName() {
        return this.host
    }
    getDataBaseName() {
        return this.DB
    }

}

module.exports = dbConnection;