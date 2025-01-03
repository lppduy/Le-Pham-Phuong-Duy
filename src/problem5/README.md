


# Express TypeScript CRUD API

A RESTful API built with Express.js, TypeScript, and PostgreSQL featuring CRUD operations, pagination, sorting, and error handling.

## Features

- 3-layer architecture (Controller-Service-Repository)
- CRUD operations with validation
- Pagination, sorting and filtering
- PostgreSQL database with TypeORM
- Error handling middleware
- Response standardization
- Docker containerization
- pgAdmin interface

## Prerequisites

- Docker
- Docker Compose

## Running the Application

1. Start all services:
```bash
docker-compose up --build
```

2. Services will be available at:
- API: http://localhost:8080
- pgAdmin: http://localhost:5050

## API Testing Guide

### Create Resource
```bash
curl -X POST http://localhost:8080/api/resources \
-H "Content-Type: application/json" \
-d '{
    "name": "Test Resource",
    "description": "This is a test resource", 
    "category": "test"
}'
```

### Get Resources
```bash
# Get all resources
curl http://localhost:8080/api/resources

# With pagination and sorting
curl "http://localhost:8080/api/resources?page=1&limit=10&sortBy=createdAt&sortOrder=DESC"

# Get single resource
curl http://localhost:8080/api/resources/1
```

### Update Resource
```bash
curl -X PUT http://localhost:8080/api/resources/1 \
-H "Content-Type: application/json" \
-d '{
    "name": "Updated Resource",
    "description": "Updated description",
    "category": "updated"
}'
```

### Delete Resource
```bash
curl -X DELETE http://localhost:8080/api/resources/1
```

## Database Management

### Accessing pgAdmin

1. Open http://localhost:5050
2. Login credentials:
   - Email: admin@admin.com
   - Password: admin

### Setting up Database Connection

1. In pgAdmin, click "Add New Server"
2. On General tab:
   - Name: LocalDB (or any name)
3. On Connection tab:
   - Host: postgres
   - Port: 5432
   - Database: crude_server
   - Username: postgres
   - Password: postgres

## Docker Commands

```bash
# Stop all services
docker-compose down

# Remove volumes (clear database)
docker-compose down -v

# View logs
docker-compose logs -f

# View specific service logs
docker-compose logs -f app
docker-compose logs -f postgres

# Restart services
docker-compose restart
```

## Response Format Examples

### Success Response
```json
{
    "status": 200,
    "message": "Success",
    "data": {
        "id": 1,
        "name": "Test Resource",
        "description": "This is a test resource",
        "category": "test",
        "createdAt": "2024-01-03T14:46:42.737Z",
        "updatedAt": "2024-01-03T14:46:42.737Z"
    }
}
```

### Paginated Response
```json
{
    "status": 200,
    "message": "Success",
    "data": [...],
    "metadata": {
        "page": 1,
        "limit": 10,
        "total": 100,
        "totalPages": 10
    }
}
```

### Error Response
```json
{
    "status": 400,
    "message": "Error message",
    "data": null
}
```
