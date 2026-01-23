# DevOps Assessment Application

A simple "Hello World" full-stack application built with **Django** (Backend) and **React with Vite** (Frontend).

## Project Overview

- **Backend**: Django 6.0 (REST API)
- **Frontend**: React (Vite, TypeScript, Lucide Icons)
- **Styling**: Premium custom CSS with dark/light mode support.
- **Communication**: REST API using Axios with CORS enabled.

## Getting Started

### Prerequisites
- Python 3.10+
- Node.js 18+
- npm 9+

### Backend Setup (Django)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install django django-cors-headers psycopg2-binary
   ```
4. Run the development server:
   ```bash
   python manage.py runserver
   ```
   The backend will be available at `http://localhost:8000/api/hello/`.

### Frontend Setup (React/Vite)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:5173/`.

## Architecture Decisions
- **Vite**: Used for its superior development experience and fast build times.
- **Django**: Chosen for its robustness and ease of setting up a structured API.
- **CORS**: Configured in Django to allow the React frontend to fetch data during local development.
- **Responsive Design**: Custom CSS ensures the application looks premium on all screen sizes and supports dark mode.
