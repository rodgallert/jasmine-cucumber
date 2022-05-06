module.exports = class Client {
    constructor(id, name, phone) {
        this.Id = id;
        this.Name = name;
        this.Phone = phone;
    }

    static getFirst() {
        let c = new Client(0,'asdf', 'asdf');
        return c;
    }

    nameToUpper() {
        return this.Name.toUpperCase();
    }

    static returnAll() {
        return [
            new Client(0, "aaa", "9999-9999"),
            new Client(1, "aaa", "9999-9999"),
            new Client(2, "aaa", "9999-9999"),
            new Client(3, "aaa", "9999-9999"),
            new Client(4, "aaa", "9999-9999"),
            new Client(5, "aaa", "9999-9999"),
            new Client(6, "aaa", "9999-9999"),
            new Client(7, "aaa", "9999-9999"),
            new Client(8, "aaa", "9999-9999"),
            new Client(9, "aaa", "9999-9999")
        ]
    }
}