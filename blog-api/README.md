# Blog API (MongoDB Version)

A simple REST API for managing blog posts built with Node.js, Express, and MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- A running MongoDB Instance or a MongoDB Atlas Database cluster.

## Installation

1. Navigate to the `blog-api` directory:
   ```bash
   cd blog-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Configuration

1. Create a `.env` file in the root of the `blog-api` folder.
2. Add your environment variables like this:
   ```env
   PORT=3000
   MONGODB_URI=your_mongodb_connection_string_here
   ```

## Running the Server

Start the application using:
```bash
npm start
```
By default, the server runs on `http://localhost:3000`.

## API Endpoints

### 1. Get All Posts
* **Method:** `GET`
* **URL:** `http://localhost:3000/posts`
* **Description:** Retrieves a list of all blog posts sorted by creation date (newest first).

#### Example Request:
**curl:**
```bash
curl http://localhost:3000/posts
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/posts" -Method Get
```

---

### 2. Create a Post
* **Method:** `POST`
* **URL:** `http://localhost:3000/posts`
* **Headers:** `Content-Type: application/json`
* **Body:**
  ```json
  {
    "title": "My First Post",
    "content": "Hello World! This is my first blog post."
  }
  ```

#### Example Request:
**curl:**
```bash
curl -X POST -H "Content-Type: application/json" -d '{"title": "My First Post", "content": "Hello World! This is my first blog post."}' http://localhost:3000/posts
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/posts" -Method Post -Body '{"title": "My First Post", "content": "Hello World! This is my first blog post."}' -ContentType "application/json; charset=utf-8"
```

---

### 3. Get a Post by ID
* **Method:** `GET`
* **URL:** `http://localhost:3000/posts/:id`
* **Description:** Retrieves a specific blog post by its unique MongoDB ObjectId.

#### Example Request:
**curl:**
```bash
curl http://localhost:3000/posts/60c72b2f9b1d8b2c88888888
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/posts/60c72b2f9b1d8b2c88888888" -Method Get
```

---

### 4. Delete a Post by ID
* **Method:** `DELETE`
* **URL:** `http://localhost:3000/posts/:id`
* **Description:** Deletes a specific blog post from the database by its unique MongoDB ObjectId.

#### Example Request:
**curl:**
```bash
curl -X DELETE http://localhost:3000/posts/60c72b2f9b1d8b2c88888888
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/posts/60c72b2f9b1d8b2c88888888" -Method Delete
```

---

### 5. Increment View Count of a Post
* **Method:** `POST`
* **URL:** `http://localhost:3000/posts/:id/view`
* **Description:** Increments the view count of a specific post by 1.

#### Example Request:
**curl:**
```bash
curl -X POST http://localhost:3000/posts/60c72b2f9b1d8b2c88888888/view
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/posts/60c72b2f9b1d8b2c88888888/view" -Method Post
```

---

### 6. Get Top 3 Most Viewed Posts (Analytics)
* **Method:** `GET`
* **URL:** `http://localhost:3000/analytics/top-posts`
* **Description:** Retrieves the top 3 blog posts sorted by their view count in descending order.

#### Example Request:
**curl:**
```bash
curl http://localhost:3000/analytics/top-posts
```
**PowerShell:**
```powershell
Invoke-RestMethod -Uri "http://localhost:3000/analytics/top-posts" -Method Get
```

---

## Running with Docker (Recommended)

You can run the entire system (API + MongoDB database) locally using Docker Compose in a single command.

### Prerequisites
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### How to Run

1. Navigate to the `blog-api` directory:
   ```bash
   cd blog-api
   ```

2. Start the services:
   ```bash
   docker compose up --build
   ```

   This command will:
   - Build the custom API Docker image.
   - Start the MongoDB container and run its health check.
   - Start the API container once the database is fully healthy and ready.
   - Bind the API to `http://localhost:3000`.

3. Stop the services:
   ```bash
   docker compose down
   ```
   To also delete the persistent database volume, use:
   ```bash
   docker compose down -v
   ```

### Troubleshooting
- **Port Conflict (3000 or 27017 already in use)**: Ensure no local processes (like a locally running Node.js server or local MongoDB service) are using these ports before running `docker compose up`.
- **Database Connection Issues**: The API container depends on the database's healthcheck. If it fails, check the logs of the `db` service container.
