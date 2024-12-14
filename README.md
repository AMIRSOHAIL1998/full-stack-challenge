# Project Overview

This project consists of three applications:

1. **API** - Backend service.
2. **Admin Dashboard** - Admin-facing dashboard.
3. **Client Dashboard** - Client-facing dashboard.

## Hosted URLs

- Backend : https://full-stack-challenge-3.onrender.com/
- Admin App : https://admin-epic.pages.dev/
- Client App : https://client-epic.pages.dev/

## Login credentials

**Admin App**

- Email : amir@betalectic.com
- password: Amir@123

**Client App**

- Email : mdamirsohail1@gmail.com
- password : Amir@123

## Getting Started

### Clone the Repository

To get started, clone the repository to your local machine:

```bash
git clone <repository-url>
cd <repository-folder>
```

### Install Dependencies

Install all dependencies using Yarn:

```bash
yarn install
```

### Run Database Migrations

Run the database migrations to set up the database: run after `yarn build:api` command

```bash
yarn migrate:latest
```

## Running Applications

### Start Backend API

**Note:** Before running the backend API, make sure to build it first:

```bash
yarn build
```

Then, start the backend server:

```bash
yarn dev
```

### Start Admin Dashboard

To start the admin dashboard, run:

```bash
yarn serve:admin
```

### Start Client Dashboard

To start the client dashboard, run:

```bash
yarn serve:client
```

## Building Applications

### Build Backend API

To build the backend API, run:

```bash
yarn build:api
```

### Build Admin Dashboard

To build the admin dashboard, run:

```bash
yarn build:admin
```

### Build Client Dashboard

To build the client dashboard, run:

```bash
yarn build:client
```

## API Endpoints

### Authentication Endpoints

- **Sign Up:** `POST /auth/signup`
- **Login:** `POST /auth/login`
- **Authorize and Get User Details:** `GET /auth/authorize`

### User Endpoints

- **Read All Users:** `GET /users/read`
- **Read Specific User by ID:** `GET /users/read/:id`
- **Update User by ID:** `PUT /users/update/:id`
- **Delete User by ID:** `DELETE /users/delete/:id`
- **Get User Analytics:** `GET /users/statistics`

## User Management

### Create an Admin User

To create an admin user, use Postman or any other API testing tool. Make a `POST` request to the following endpoint:

```
/auth/signup
```

#### Payload Example

```json
{
  "email": "amir5@gmail.com",
  "name": "Amir 5",
  "type": "Admin",
  "password": "Amir@123"
}
```

### Login to Admin Dashboard

Once the admin user is created, use the credentials to log in to the admin dashboard.

### Sign Up and Login to Client Dashboard

1. Start the client app by running:
   ```bash
   yarn serve:client
   ```
2. Sign up using the client app's sign-up page.
3. Use the created credentials to log in to the client dashboard in the future.

---

Feel free to customize this README file as per your project's requirements!
