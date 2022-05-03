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
})