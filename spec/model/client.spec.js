describe('Clients', () => {
    beforeEach(()=>{

    });

    it('Return all clients', () => {
        let clients = Client.returnAll();
        expect(clients.length).toEqual(10);
    })
})