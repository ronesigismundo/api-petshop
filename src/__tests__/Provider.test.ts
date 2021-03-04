import request from 'supertest'
import { api } from '../api'

import createConnection from '../database'


describe("Providers", () => {
  beforeAll(async() => {
    const connection = await createConnection();
    await connection.runMigrations();
  })



  it("Should be able to create a new provider", async () => {
    const response = await request(api).post('/api/providers')
    .send({
      "company": "Company Test",
	    "email": "test@test.com",
	    "category": "Category Test"
    })

    expect(response.status).toBe(201);

  })

  it("Should be able to get a new provider", async () => {
    const response = await request(api).get('/api/providers')

    expect(response.status).toBe(200);

  })

  it("Should be able to return a 400 status if you do not create a new supplier", async () => {
    const response = await request(api).post('/api/providers')
    .send({
      "company": "Company Test",
	    "email": "test@test.com",
    })

    expect(response.status).toBe(400);

  })


  /*
  it("Should be able to return a 500 status if there is an error on the server", async () => {
    const response = await request(api).post('/api/provider')
  

    expect(response.status).toBe(500);

  })*/

})