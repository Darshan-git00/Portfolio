# 🚀 TalentBridge Deployment Guide

## Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Domain name (for production)
- Docker & Docker Compose (optional)

## Quick Start with Docker (Recommended)

### 1. Environment Setup
```bash
# Copy Docker environment template
cp .env.docker .env

# Customize your environment variables
nano .env
```

### 2. Deploy with Docker Compose
```bash
# Build and start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

### 3. Database Setup (Automatic)
```bash
# The database is automatically initialized
# To run migrations manually:
docker-compose exec backend npm run db:deploy

# Seed initial data:
docker-compose exec backend npm run seed
```

### 4. Access Your Application
- Frontend: http://localhost
- Backend API: http://localhost:3001
- Health Check: http://localhost:3001/health

## Manual Deployment

### Backend Deployment

### 1. Environment Setup
```bash
# Copy environment template
cp backend/.env.example backend/.env

# Fill in your values:
DATABASE_URL="postgresql://username:password@host:port/database"
JWT_SECRET="your-super-secret-jwt-key-min-32-characters"
PORT=3001
NODE_ENV="production"
CORS_ORIGINS="https://your-frontend-domain.com"
```

### 2. Install Dependencies & Build
```bash
cd backend
npm install
npm run build
```

### 3. Database Setup
```bash
# Generate Prisma client
npm run db:generate

# Deploy migrations to production
npm run db:deploy

# Seed initial data (optional)
npm run seed
```

### 4. Start Production Server
```bash
npm start
```

### Frontend Deployment

### 1. Environment Setup
```bash
# Copy environment template
cp .env.example .env

# Fill in your values:
VITE_API_URL="https://your-backend-domain.com/api"
VITE_AUTH_SECRET="your-auth-secret"
VITE_ENV="production"
```

### 2. Build & Deploy
```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy dist/ folder to your hosting provider
```

## Vercel Deployment (Frontend)

### 1. Connect Repository
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository

### 2. Configure Settings
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node.js Version**: `18.x`

### 3. Environment Variables
Set these in Vercel project settings:
```
VITE_API_URL="https://your-backend-domain.com/api"
VITE_AUTH_SECRET="your-auth-secret"
VITE_ENV="production"
```

## Railway/Render Deployment (Backend)

### 1. Connect Repository
- Go to [railway.app](https://railway.app) or [render.com](https://render.com)
- Import your GitHub repository

### 2. Configure Settings
- **Build Command**: `cd backend && npm install && npm run build`
- **Start Command**: `cd backend && npm start`
- **Node.js Version**: `18.x`

### 3. Environment Variables
Set these in your hosting provider:
```
DATABASE_URL="postgresql://..."
JWT_SECRET="your-super-secret-jwt-key"
NODE_ENV="production"
CORS_ORIGINS="https://your-frontend-domain.com"
```

### 4. Database Setup
- Add PostgreSQL add-on
- Run: `npm run db:deploy`

## Docker Deployment (Production)

### 1. Server Setup
```bash
# Install Docker on your server
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Install Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/download/v2.20.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### 2. Deploy
```bash
# Clone your repository
git clone <your-repo-url>
cd talentbridge

# Set up environment
cp .env.docker .env
nano .env  # Edit with your values

# Deploy
docker-compose up -d
```

### 3. SSL Setup (Optional)
```bash
# Install certbot for SSL
sudo apt install certbot python3-certbot-nginx

# Get SSL certificate
sudo certbot --nginx -d your-domain.com
```

## Post-Deployment Checklist

### ✅ Backend
- [ ] Health endpoint accessible: `https://your-backend.com/health`
- [ ] CORS configured for frontend domain
- [ ] Database migrations applied
- [ ] JWT secret configured
- [ ] Environment variables set
- [ ] Rate limiting enabled
- [ ] Security headers configured

### ✅ Frontend  
- [ ] API URL pointing to production backend
- [ ] Build completes successfully
- [ ] Routes work correctly
- [ ] Auth flow works end-to-end
- [ ] Static assets cached properly

### ✅ Docker
- [ ] Containers running: `docker-compose ps`
- [ ] Logs clean: `docker-compose logs`
- [ ] Database healthy
- [ ] Health checks passing

### ✅ Testing
- [ ] User signup works for all roles
- [ ] Login redirects to correct dashboards
- [ ] Database operations work
- [ ] Error handling works
- [ ] Rate limiting works
- [ ] CORS works properly

## Troubleshooting

### Docker Issues
```bash
# View logs
docker-compose logs backend
docker-compose logs frontend

# Restart services
docker-compose restart

# Rebuild services
docker-compose up -d --build

# Clean up
docker-compose down -v
docker system prune -f
```

### CORS Issues
```bash
# Check if CORS origins are correctly set
echo $CORS_ORIGINS
```

### Database Connection
```bash
# Test database connection
npm run db:generate

# Check database logs
docker-compose logs postgres
```

### Build Errors
```bash
# Clear and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Performance Issues
```bash
# Check resource usage
docker stats

# Monitor logs
docker-compose logs -f
```

## Security Notes

1. **JWT Secret**: Use a strong, random string (32+ characters)
2. **Database**: Use SSL connection in production
3. **Environment Variables**: Never commit `.env` files
4. **CORS**: Only allow your frontend domain
5. **HTTPS**: Always use HTTPS in production
6. **Rate Limiting**: Configured to prevent abuse
7. **Security Headers**: Automatically added in production
8. **Docker**: Non-root user, minimal attack surface

## Monitoring

### Health Checks
- Frontend: `GET /`
- Backend: `GET /api/health`
- Database: Automatic health check

### Logs
- Application logs: `docker-compose logs -f`
- Nginx logs: Check container logs
- Database logs: PostgreSQL container logs

### Backup
```bash
# Backup database
docker-compose exec postgres pg_dump -U talentbridge talentbridge > backup.sql

# Restore database
docker-compose exec -T postgres psql -U talentbridge talentbridge < backup.sql
```
