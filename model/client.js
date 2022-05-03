module.exports = class Client {
    id = 0;
    name = "";
    phone = "";

    static getFirst() {
        return new Client();
    }

    static nameToUpper() {
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