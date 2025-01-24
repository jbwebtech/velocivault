# VelociVault API Documentation

## Authentication

- Must pre-authenticate with identity server to receive token
- Basic authentication with supplied token

## Passphrases

| Method | Endpoint                     | Body       | Querystring | Returns      | Status Codes  | Notes                                                   |
|--------|------------------------------|------------|-------------|--------------|---------------|---------------------------------------------------------|
| GET    | /api/v1/passphrases          | -          | -           | Passphrase[] | 200           | Gets all Passphrases                                    |
| POST   | /api/v1/passphrases          | Passphrase | -           | Passphrase   | 201           | Creates a new Passphrase                                |
| GET    | /api/v1/passphrases/{id}     | -          | -           | Passphrase   | 200, 404      | Gets a Passphrase by id                                 |
| PUT    | /api/v1/passphrases/{id}     | Passphrase | -           | Passphrase   | 202, 404      | Updates an existing Passphrase by id                    |
| DELETE | /api/v1/passphrases/{id}     | -          | -           | -            | 204, 404, 405 | Deletes a Passphrase by id, or 405 if not permitted     |

\* NOTE: all endpoints may throw a 401 Unauthorized

## Words

## Account

## User
