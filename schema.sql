CREATE TABLE "users" (
  "id" serial PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "password_hash" varchar NOT NULL,
  "name" varchar NOT NULL,
  "is_admin" boolean NOT NULL DEFAULT false,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "categories" (
  "id" serial PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL
);

CREATE TABLE "products" (
  "id" serial PRIMARY KEY,
  "name" varchar NOT NULL,
  "description" text,
  "price" numeric NOT NULL,
  "image_url" varchar,
  "stock" int DEFAULT 0,
  "category_id" int,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "orders" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "status" varchar DEFAULT 'pending',
  "total" numeric NOT NULL,
  "created_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE "ordered_items" (
  "id" serial PRIMARY KEY,
  "order_id" int,
  "product_id" int,
  "quantity" int NOT NULL,
  "price_at_order" numeric NOT NULL
);

CREATE TABLE "cart_items" (
  "id" serial PRIMARY KEY,
  "user_id" int,
  "product_id" int,
  "quantity" int NOT NULL DEFAULT 1
);

CREATE TABLE "admin_settings" (
  "id" serial PRIMARY KEY,
  "key" varchar UNIQUE NOT NULL,
  "value" varchar NOT NULL,
);

CREATE TABLE "specs" (
  "id" serial PRIMARY KEY,
  "product_id" int,
  "name" varchar NOT NULL,
  "value" varchar NOT NULL
);

CREATE UNIQUE INDEX ON "cart_items" ("user_id", "product_id");

CREATE INDEX ON "specs" ("product_id", "name");

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "ordered_items" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "ordered_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "cart_items" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");

ALTER TABLE "specs" ADD FOREIGN KEY ("product_id") REFERENCES "products" ("id");
