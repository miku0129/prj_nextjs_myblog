## About this repository 🧐
This repository provides a full-stack application that you can start by executing a single command.
The application can detect errors and automatically create an issue in GitHub.

## Requirements ☝️
- Docker installed
- GitHub account

## Tech Stacks
- Next.js
- Docker
- Prisma
- GitHub Actions

## Get Started 
1. Clone this repository
1. Set up  `.env`
    1. Create a `.env` file under `/src`.
    1. Fill in the required items:
        If you want to test this app in your personal repository, set `GITHUB_OWNER` to your GitHub username, and `GITHUB_REPO` to the name of the cloned repository.
1. Create a `GitHub Token` and store it in `Repository secrets` with the key `MY_GITHUB_TOKEN`.
    You can use the preconfigured settings for Postgres and the sample user.
    Start the Docker container by running  `docker compose up` in the terminal.

## Test Out Github Actions 🎯
1. Once the application is running, go to  `/create`, write a new draft, and then click `Create`.
   It causes an error because the code is intentionally written to trigger one.
2. Check `Issue` tab in your Github repository. A new Issue should be opend. 
