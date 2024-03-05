import user from "../fixtures/userData.json"

export default class UserPage {
    static createUser(fakeEmail) {
        return cy.request({
            method: 'POST',
            url: 'https://gorest.co.in/public-api/users',
            headers: {
                'Authorization': 'Bearer 92fca0bc2c004fc18489396d54bbc9ef13b6a3dffdec621f3ecefc45bd09ba2e',
                'Content-Type': 'application/json',
            },
            body: {
                name: user.name,
                email: fakeEmail,
                gender: user.gender,
                status: user.status
            }
        }).then((response) => {
            expect(response.status).to.eq(200); 
            expect(response.body.data.name).to.eq(user.name)
            expect(response.body.data.gender).to.eq(user.gender)
            expect(response.body.data.status).to.eq(user.status)
            return response.body.data.id;
        });
    }

    static getUser(userId) {
        return cy.request({
            method: 'GET',
            url: `https://gorest.co.in/public-api/users/${userId}`,
            headers: {
                'Authorization': 'Bearer 92fca0bc2c004fc18489396d54bbc9ef13b6a3dffdec621f3ecefc45bd09ba2e',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            return response.body;
        });
    }

    static updateUser(userId, newName, newGender, fakeEmail) {
        return cy.request({
            method: 'PUT',
            url: `https://gorest.co.in/public-api/users/${userId}`,
            headers: {
                'Authorization': 'Bearer 92fca0bc2c004fc18489396d54bbc9ef13b6a3dffdec621f3ecefc45bd09ba2e',
                'Content-Type': 'application/json',
            },
            body: {
                name: newName,
                email: fakeEmail,
                gender: newGender,
                status: user.status
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data.id).to.eq(userId);
            expect(response.body.data.name).to.eq(newName);
            expect(response.body.data.gender).to.eq(newGender);
        });
    }

    static deleteUser(userId) {
        return cy.request({
            method: 'DELETE',
            url: `https://gorest.co.in/public-api/users/${userId}`,
            headers: {
                'Authorization': 'Bearer 92fca0bc2c004fc18489396d54bbc9ef13b6a3dffdec621f3ecefc45bd09ba2e',
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    }
}

