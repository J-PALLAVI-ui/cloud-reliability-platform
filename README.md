# Cloud Reliability Engineering Platform 🚀

A cloud-native observability platform designed to monitor application health, collect metrics, aggregate logs, and trigger alerts using modern DevOps tools.

## Project Overview

This project demonstrates a complete Cloud Reliability Engineering workflow by containerizing a Node.js application and integrating monitoring, logging, and alerting systems.

The platform helps reliability engineers understand application performance, detect failures, analyze logs, and maintain service availability.

## Architecture
             Users
               |
               v
    Node.js Cloud Application
               |
    -------------------------
    |                       |
    v                       v
Prometheus Promtail
Metrics Logs
| |
v v
Grafana <-----------> Loki
|
v
Alerts + Dashboards + Email Notifications

## Technologies Used

### Application
- Node.js
- Express.js

### Containerization
- Docker
- Docker Compose

### Monitoring
- Prometheus
- Grafana

### Logging
- Loki
- Promtail

### Version Control
- Git
- GitHub

## Features

✅ REST API endpoints  
✅ Application health monitoring  
✅ Prometheus metrics collection  
✅ Grafana monitoring dashboards  
✅ CPU and memory monitoring  
✅ Request count tracking  
✅ Response time monitoring  
✅ Error rate monitoring  
✅ Centralized log management using Loki  
✅ Real-time application logs  
✅ Email alert notifications  

## API Endpoints

### Home
GET /


Returns application status.

Example:

```json
{
 "message": "Welcome to the Cloud Reliability Engineering Platform!",
 "status": "Running"
}
##Health Check
GET /health

##Users
GET /users

##Error Testing
GET /error

##Metrics
GET /metrics

##Running the Project

git clone https://github.com/J-PALLAVI-ui/cloud-reliability-platform.git

docker compose up -d
docker ps

##Monitoring URLs


##Application:
http://localhost:3000
##Grafana:
http://localhost:3001
##Prometheus:
http://localhost:9090
##Loki:
http://localhost:3100
