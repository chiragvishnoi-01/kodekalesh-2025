import request from 'supertest';
import app from '../../src/app';
import connectDB from '../../src/config/database';

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    // Mongoose disconnect is handled automatically
});

describe('Authentication Integration Tests', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/auth/signup')
            .send({
                username: 'testuser',
                password: 'testpassword',
                email: 'testuser@example.com'
            });
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('token');
    });

    it('should login an existing user', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'testpassword'
            });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    it('should fail to login with incorrect credentials', async () => {
        const response = await request(app)
            .post('/api/auth/login')
            .send({
                username: 'testuser',
                password: 'wrongpassword'
            });
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });
});