-- Inicjalizacja bazy danych PostgreSQL

-- Tworzenie tabeli users
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    surname VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    login VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(255) NOT NULL
);

-- Tworzenie tabeli models
CREATE TABLE models (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    creator VARCHAR(255) NOT NULL,
    creation_date DATE NOT NULL,
    status VARCHAR(255) NOT NULL,
    path VARCHAR(255) NOT NULL,
    image BYTEA
);

-- Tworzenie tabeli images
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255) NOT NULL
);

-- Można dodać dodatkowe indeksy lub ograniczenia, jeśli są potrzebne
