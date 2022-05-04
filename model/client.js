module.exports = class Client {
    constructor(id, name, phone) {
        this.Id = id;
        this.Name = name;
        this.Phone = phone;
    }

    static getFirst() {
        return new Client();
    }

    nameToUpper() {
        return this.name.toUpperCase();
    }

    static returnAll() {
        return [
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999"),
            new Client(0, "aaa", "9999-9999")
        ]
    }
}