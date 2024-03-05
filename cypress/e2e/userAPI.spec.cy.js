/// <reference types='cypress'/>

import { faker } from '@faker-js/faker';
import UserPage from '../POM/userPage';
import user from "../fixtures/userData.json"

describe('API Tests', () => {
    let userId;
    const fakeEmail = faker.internet.email(); // Generate a fake email address

    it('Create User and Retrieve User Info', () => {
        UserPage.createUser(fakeEmail).then((id) => {
            userId = id; // Store the userId for later use
            return UserPage.getUser(userId);
        }).then((userData) => {
            console.log(userData)
            expect(userData.data.email).to.eq(fakeEmail);
            // Add more assertions as needed
        });
    });

    it('Update User Info', () => {
        // const newName = 'TestUser2';
        // const newGender = 'female';
        UserPage.updateUser(userId, user.newName, user.newGender, fakeEmail);
    });

    it('Delete User', () => {
        UserPage.deleteUser(userId);
    });
});

        
