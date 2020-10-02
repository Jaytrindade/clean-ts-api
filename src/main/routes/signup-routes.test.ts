import request from 'supertest'
import app from '../config/app'

describe('SignUp Routes', () => {
  test('Should return account on success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'Jay',
        email: 'joaotrindade.soft@gmail.com',
        password: '123',
        passwordConfirmation: '123'
      })
      .expect(200)
  })
})
