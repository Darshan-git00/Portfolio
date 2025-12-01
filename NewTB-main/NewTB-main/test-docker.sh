#!/bin/bash

echo "🐳 TalentBridge Docker Test Script"
echo "=================================="

# Check Docker installation
if command -v docker &> /dev/null; then
    echo "✅ Docker is installed"
    docker --version
else
    echo "❌ Docker not found"
    exit 1
fi

# Check Docker Compose
if command -v docker-compose &> /dev/null; then
    echo "✅ Docker Compose is installed"
    docker-compose --version
else
    echo "❌ Docker Compose not found"
    exit 1
fi

# Check Docker is running
if docker info &> /dev/null; then
    echo "✅ Docker is running"
else
    echo "❌ Docker is not running"
    echo "Please start Docker Desktop"
    exit 1
fi

echo ""
echo "🚀 Ready to deploy TalentBridge!"
echo "Run: docker-compose up --build"
