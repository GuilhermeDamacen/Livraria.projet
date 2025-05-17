CREATE DATABASE livraria;

USE livraria;

CREATE TABLE carrinho (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  preco DECIMAL(10,2),
  imagem TEXT
);

CREATE TABLE livros (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  preco DECIMAL(10,2),
  imagem TEXT
);

