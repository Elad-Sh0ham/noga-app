@echo off
set /p msg="Enter commit message: "

echo.
echo --- Adding changes ---
git add .

echo --- Committing ---
git commit -m "%msg%"

echo --- Pushing to GitHub ---
git push origin main

echo --- Deploying to GitHub Pages ---
npm run deploy

echo.
echo Done! Noga is on the way to the web.
pause