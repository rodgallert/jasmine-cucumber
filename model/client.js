module.exports = class Client {
    constructor() {
        this.id = 0;
        this.name = "";
        this.phone = "";
    }

    static getFirst() {
        return new Client();
    }

    nameToUpper() {
        return this.name.toUpperCase();
    }

    static returnAll() {
        return [
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client(),
            new Client()
        ]
    }
}