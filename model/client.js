module.exports = class Client{
    id = 0;
    name = "";
    phone = "";

    static getFirst(){
        return new Client();
    }
}