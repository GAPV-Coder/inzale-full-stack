## Auth Service
Microservice for handling user authentication and authorization.

# Installation

## 1. Clone the repository:
git clone <https://github.com/GAPV-Coder/inzale-full-stack>
cd backend-app/auth-service


## 2. Install dependencies:
npm install


## 3. Set up environment variables:
Create a .env file based on .env.example and configure MONGODB_URI and JWT_SECRET.

## 4. Run the service:
npm run start:dev


## API Endpoints

POST /auth/register - Register a new user
POST /auth/login - Login a user and get a JWT token

## Swagger Documentation
Access the API documentation at http://localhost:3000/api.


## Stay in touch

- Author - [Gustavo Pereira](https://twitter.com/kammysliwiec)
- Website - [https://gaperdev.vercel.app/](https://gaperdev.vercel.app/)
- LinkedIn - [@Gustavo Adolfo Preira Villa](https://www.linkedin.com/in/gustavoadolfopereiravilla/)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
