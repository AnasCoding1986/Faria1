@echo off
powershell -ExecutionPolicy Bypass -Command "npm install"
powershell -ExecutionPolicy Bypass -Command "npm run build"
powershell -ExecutionPolicy Bypass -Command "npm run deploy"
pause
