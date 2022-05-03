const Client = require('../../model')

describe('Clients', () => {
    beforeEach(()=>{

    });

    it('Return all clients', () => {
        let clients = Client.returnAll();
        expect(clients.length).toEqual(10);
    });

    it('Return first client', () =>{
    let client = client.getFirst();
    expect(client.id).not.toBeUndefined();
    expect(client.name).not.toBeUndefined();
    expect(client.phone).not.toBeUndefined();
    });

    it('Name to upper', () => {
        let client = client.getFirst();
        client.name = "asdf";
        expect(client.nameToUpper()).toEqual("ASDF");
    })
})