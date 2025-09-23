## About this repository
This repository provides a full-stack application that you can start by executing a single command.
The application can detect errors and automatically create an issue in GitHub.

## Requirements
- Docker installed
- GitHub account

## Tech stacks
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
