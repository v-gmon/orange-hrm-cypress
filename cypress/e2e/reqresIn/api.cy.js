describe('Reqres API Automation Test', () => {
    const baseUrl = 'https://reqres.in/api';

    it('GET - List users', () => {
        cy.apiRequest({
            url: `${baseUrl}/users?page=2`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
            expect(response.body.data[0]).to.have.property('first_name');
            expect(response.body.data[0].first_name).to.eq('Michael');
            expect(response.duration).to.be.lessThan(500);
            expect(response.body.page).to.eq(2);
            expect(response.body.per_page).to.eq(6);
            expect(response.body.data[0].first_name).to.include('Michael');
        });
    });

    it('GET - Single user found', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/users/2`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('first_name', 'Janet');
            expect(response.body.data).to.have.property('last_name', 'Weaver');
            expect(response.duration).to.be.lessThan(500);
        });
    });

    it('POST - Create user', () => {
        cy.apiRequest({
            method: 'POST',
            url: `${baseUrl}/users`,
            body: {
                name: 'John Doe',
                job: 'QA Engineer'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('name', 'John Doe');
            expect(response.body).to.have.property('job', 'QA Engineer');
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('createdAt');
        });
    });

    it('PUT - Update user', () => {
        cy.apiRequest({
            method: 'PUT',
            url: `${baseUrl}/users/2`,
            body: {
                name: 'Jane Doe',
                job: 'Senior QA Engineer'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'Jane Doe');
            expect(response.body).to.have.property('job', 'Senior QA Engineer');
            expect(response.body).to.have.property('updatedAt');
        });
    });

    it('DELETE - Delete user', () => {
        cy.apiRequest({
            method: 'DELETE',
            url: `${baseUrl}/users/2`
        }).then((response) => {
            expect(response.status).to.eq(204);
            expect(response.body).to.be.empty;
        });
    });

    it('POST - Login successful', () => {
        cy.apiRequest({
            method: 'POST',
            url: `${baseUrl}/login`,
            body: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
        });
    });

    it('GET - Single user not found', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/users/23`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty;
        });
    });

    it('GET - List resources', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/unknown`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
            expect(response.body.data[0]).to.have.property('name');
            expect(response.body.data[0].name).to.include('cerulean');
        });
    });

    it('GET - Single resource found', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/unknown/2`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('name', 'fuchsia rose');
            expect(response.body.data).to.have.property('year', 2001);
        });
    });

    it('GET - Single resource not found', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/unknown/23`,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty;
        });
    });

    it('PATCH - Update resource', () => {
        cy.apiRequest({
            method: 'PATCH',
            url: `${baseUrl}/unknown/2`,
            body: {
                name: 'Jon Doeeeee'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'Jon Doeeeee');
        });
    });

    it('POST - Register successful', () => {
        cy.apiRequest({
            method: 'POST',
            url: `${baseUrl}/register`,
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id');
            expect(response.body).to.have.property('token');
        });
    });

    it('POST - Register unsuccessful', () => {
        cy.apiRequest({
            method: 'POST',
            url: `${baseUrl}/register`,
            body: {
                email: 'sydney@fife'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });

    it('POST - Login unsuccessful', () => {
        cy.apiRequest({
            method: 'POST',
            url: `${baseUrl}/login`,
            body: {
                email: 'peter@klaven'
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });

    it('GET - Delayed response', () => {
        cy.apiRequest({
            method: 'GET',
            url: `${baseUrl}/users?delay=3`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.length.greaterThan(0);
            expect(response.duration).to.be.greaterThan(3000);
        });
    });
});
