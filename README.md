# 🚀 QA Automation Showcase & Framework

[![Playwright](https://img.shields.io/badge/Playwright-v1.42+-2EAD33?logo=playwright&logoColor=white)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Status](https://img.shields.io/badge/Tests-100%25%20Passing-brightgreen)]()

Framework profesional de automatización de pruebas E2E y API Testing diseñado con **Playwright**, **TypeScript** y el patrón de diseño **Page Object Model (POM)**.

---

## 🎯 Arquitectura del Framework

```text
qa-automation-showcase/
├── src/
│   └── pages/
│       └── LoginPage.ts       # Page Object Model (encapsulamiento de locators y acciones)
├── tests/
│   ├── login.spec.ts          # Pruebas E2E de UI (Login positivo, negativo y validación)
│   └── api.spec.ts            # Pruebas de API REST (Status codes 200, 201, 404, payloads)
├── playwright.config.ts       # Configuración global (timeouts, workers, reporters)
├── package.json
└── README.md
```

### 1. Page Object Model (POM)
- Separa la lógica de navegación y los selectores del DOM de los casos de prueba.
- Selectores mantenibles (`#username`, `#password`, `button[type="submit"]`).
- Métodos atómicos reutilizables (`goto`, `login`, `verifySuccessMessage`, `verifyErrorMessage`).

### 2. API Testing Nativo
- Validación directa de endpoints REST sin dependencias externas pesadas.
- Verificación rigurosa de Códigos de Estado HTTP:
  - `200 OK` / `201 Created` (Respuestas exitosas).
  - `404 Not Found` (Manejo correcto de errores del cliente).
- Aserciones de esquema JSON y consistencia de datos.

---

## 🛠️ Instalación y Ejecución

### Prerrequisitos
- Node.js >= 18.x
- Navegadores de Playwright instalados (`npx playwright install chromium`)

### Instalación de dependencias
```bash
npm install
```

### Ejecutar todas las pruebas (Headless)
```bash
npm test
```

### Ejecutar con Navegador Visible (Headed)
```bash
npm run test:headed
```

### Abrir Interfaz Gráfica Interactiva (Playwright UI Mode)
```bash
npm run test:ui
```

### Ver Reporte HTML de Resultados
```bash
npm run test:report
```

---

## 📊 Matriz de Pruebas Automatizadas

| ID | Capa | Descripción | Validación Clave |
|---|---|---|---|
| **TC-01** | UI / E2E | Login exitoso con credenciales válidas | Mensaje de éxito visible en DOM |
| **TC-02** | UI / E2E | Login fallido por contraseña inválida | Mensaje de error correspondiente |
| **TC-03** | UI / E2E | Login fallido por usuario inexistente | Mensaje de error correspondiente |
| **API-01**| API REST | `GET /posts/1` | Status `200 OK`, validación de campos JSON |
| **API-02**| API REST | `POST /posts` | Status `201 Created`, ID asignado en payload |
| **API-03**| API REST | `GET /posts/999999` | Status `404 Not Found`, respuesta no-ok |
| **API-04**| API REST | `DELETE /posts/1` | Status `200 OK` |

---

## 👤 Autor
- **Jeiser Gutiérrez**
- Rol: QA Automation Engineer / SDET
- GitHub: [@jeiserlabs](https://github.com/jeiserlabs)
