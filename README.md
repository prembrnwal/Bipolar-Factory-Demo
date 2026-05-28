# Bipolar Factory — Fullstack Demo Application

This repository contains a full-stack web application featuring a modern, highly interactive **React frontend** and a robust **Spring Boot backend** with database persistence using **PostgreSQL**.

---

## 🏗️ Project Architecture

The project is structured as a multi-module repository containing:

1. **[bipolar-factory-react](file:///c:/Users/prem/Downloads/Bipolar_Factory/bipolar-factory-react)**: The frontend user interface built with React, Vite, and CSS Modules. It provides smooth animations, a custom interactive cursor, and a styled contact submission form.
2. **[BipolarFactory_Backend](file:///c:/Users/prem/Downloads/Bipolar_Factory/BipolarFactory_Backend/BipolarFactory_Backend)**: The backend REST API powered by Spring Boot (Spring Web MVC) and Hibernate/JPA, persisting contact form data to a PostgreSQL database.

---

## 🛠️ Tech Stack & Requirements

### Frontend
- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** CSS Modules
- **Routing:** React Router DOM (v7)

### Backend
- **Framework:** Spring Boot 4.0.6
- **Database:** PostgreSQL
- **ORM:** Spring Data JPA / Hibernate
- **Build Tool:** Maven (mvnw wrapper included)
- **Java Version:** 21

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Java Development Kit (JDK) 21](https://adoptium.net/temurin/releases/?version=21)
- [Maven](https://maven.apache.org/) (optional, as `mvnw` wrapper is provided)
- [PostgreSQL Database Server](https://www.postgresql.org/)

---

### 2. Backend Setup (`BipolarFactory_Backend`)

1. **Navigate to the backend directory:**
   ```bash
   cd BipolarFactory_Backend/BipolarFactory_Backend
   ```

2. **Configure Environment Variables:**
   Copy the example environment file and fill in your PostgreSQL credentials:
   ```bash
   cp .env.example .env
   ```
   Open the `.env` file and update the configuration:
   ```properties
   DB_URL=jdbc:postgresql://localhost:5432/your_db_name
   DB_USERNAME=your_postgres_username
   DB_PASSWORD=your_postgres_password
   ```

3. **Database Initialization:**
   Ensure PostgreSQL is running and you have created the database specified in your `DB_URL` (e.g., `your_db_name`). Hibernate will automatically create and update the necessary table (`contact_submissions`) on start (`spring.jpa.hibernate.ddl-auto=update`).

4. **Run the Backend:**
   Run the Spring Boot application using Maven:
   - **Windows:**
     ```cmd
     mvnw.cmd spring-boot:run
     ```
   - **macOS/Linux:**
     ```bash
     chmod +x mvnw
     ./mvnw spring-boot:run
     ```
   The backend service starts by default on `http://localhost:8080`.

---

### 3. Frontend Setup (`bipolar-factory-react`)

1. **Navigate to the frontend directory:**
   ```bash
   cd bipolar-factory-react
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and set the target backend API base URL:
   ```properties
   VITE_API_BASE_URL=http://localhost:8080
   ```

4. **Run the Frontend (Development Mode):**
   ```bash
   npm run dev
   ```
   The development server will launch at `http://localhost:5173`. Open this URL in your web browser.

5. **Build for Production:**
   ```bash
   npm run build
   # To preview the production build locally:
   npm run preview
   ```

---

## 🔌 API Documentation

### Submit Contact Form
Saves a user inquiry into the database.

- **Endpoint:** `POST /api/contact`
- **Headers:** `Content-Type: application/json`
- **Request Body Format:**
  ```json
  {
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "9876543210",
    "phoneCountryCode": "+91",
    "companyName": "Acme Corp",
    "subject": "project",
    "message": "Hi, I am interested in building a web application with you."
  }
  ```
- **Response Format (`200 OK`):**
  ```json
  {
    "id": 1,
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "phone": "9876543210",
    "phoneCountryCode": "+91",
    "companyName": "Acme Corp",
    "subject": "project",
    "message": "Hi, I am interested in building a web application with you.",
    "submittedAt": "2026-05-29T03:00:00"
  }
  ```

---

## 📁 Repository Structure

```text
Bipolar_Factory/
├── BipolarFactory_Backend/         # Spring Boot Backend Project
│   └── BipolarFactory_Backend/
│       ├── src/                    # Spring Boot java sources & configurations
│       ├── pom.xml                 # Maven configuration
│       └── .env.example            # Environment variables template
├── bipolar-factory-react/          # React Frontend Project
│   ├── src/                        # React components, styles and assets
│   ├── package.json                # npm script & dependency configurations
│   └── .env.example                # React environment variables template
└── README.md                       # Main entry documentation (this file)
```
