#!/bin/sh

# initialize database
npx prisma generate
npx prisma db push --force-reset

npm run seed

# build application
npm run build

npm run start
