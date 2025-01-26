# VelociVault API Documentation

## Authentication

- Basic identity service API issuing JWT tokens for user authentication.

## Users

| Method | Endpoint               | Body       | Querystring | Returns     | Status Codes  | Notes                                                  |
|--------|------------------------|------------|-------------|-------------|---------------|--------------------------------------------------------|
| POST   | /api/v1/users          | -          | -           | JWT Token   | 201           | Creates a new JWT Token for the user                   |
| GET    | /api/v1/users/{id}     | -          | -           | JWT Token   | 200, 404      | Gets a JWT Token by id                                 |
| PUT    | /api/v1/users/{id}     | -          | -           | JWT Token   | 202, 404      | Updates an existing JWT Token by id                    |
| DELETE | /api/v1/users/{id}     | -          | -           | -           | 204, 404, 405 | Deletes a JWT Token by id, or 405 if not permitted     |
