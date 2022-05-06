const Client = require('../../model/client');

describe('Clients', () => {
    beforeEach(() => {

    })

    test('Validates a clients properties', () => {
        let client = Client.getFirst();
        
        expect(client.Id).not.toBeUndefined();
        expect(client.Name).not.toBeUndefined();
        expect(client.Phone).not.toBeUndefined();
    });

    test('Returns all clients', () =>{
        let clients = Client.returnAll();
        expect(clients.length).toEqual(10);
    });

    test('Client name to Upper', () =>{
        let client = Client.getFirst();
        client.Name = 'asdf';
        expect(client.nameToUpper()).toEqual('ASDF');
    });
})