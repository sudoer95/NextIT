## A NextJS E-commerce tech shop.
Project status: Front-end finished.
Pending: Backend, DB management.

## Getting Started

First, clone the repo.
Then run following commands, depending on your needs:

```bash
npm install
# or
yarn install
# or
pnpm i
```

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
```

## Setting up a DB
For prisma please create a user with CREATEDB privilegie and database with owner - user that you created.
In .env write all credentials for db, .env.example provided.
Then run:
```bash
npx prisma migrate dev # after installation and when schema.prisma changed
npx prisma generate
```

Open [http://localhost:3000](http://localhost:3000) or [http://0.0.0.0:3000](http://0.0.0.0:3000) with your browser to see the result.