import { test, expect } from '@playwright/test';

test.describe('API Testing Suite - REST Endpoint Verification', () => {
  const API_BASE = 'https://jsonplaceholder.typicode.com';

  test('API-01: GET /posts/1 returns 200 OK and valid schema', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts/1`);
    
    // Status Code 200: Éxito estándar
    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const data = await response.json();
    expect(data.id).toBe(1);
    expect(data.userId).toBe(1);
    expect(typeof data.title).toBe('string');
    expect(typeof data.body).toBe('string');
  });

  test('API-02: POST /posts creates new resource and returns 201 Created', async ({ request }) => {
    const payload = {
      title: 'Automated Test Post',
      body: 'Verified via Playwright API testing framework',
      userId: 10
    };

    const response = await request.post(`${API_BASE}/posts`, {
      data: payload
    });

    // Status Code 201: Recurso creado exitosamente
    expect(response.status()).toBe(201);
    const data = await response.json();
    expect(data.title).toBe(payload.title);
    expect(data.id).toBeDefined();
  });

  test('API-03: GET /posts/999999 returns 404 Not Found (Client Error)', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts/999999`);

    // Status Code 404: Recurso no encontrado (Error de cliente)
    expect(response.status()).toBe(404);
    expect(response.ok()).toBeFalsy();
  });

  test('API-04: DELETE /posts/1 returns 200 OK', async ({ request }) => {
    const response = await request.delete(`${API_BASE}/posts/1`);

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
  });
});
