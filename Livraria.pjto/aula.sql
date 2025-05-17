-- Tabela para armazenar os livros disponíveis
CREATE TABLE livros (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255),
    preco DECIMAL(10, 2),
    imagem VARCHAR(255)
);

-- Tabela para armazenar os carrinhos dos usuários
CREATE TABLE carrinho (
    id INT AUTO_INCREMENT PRIMARY KEY,
    livro_id INT,
    quantidade INT,
    total DECIMAL(10, 2),
    FOREIGN KEY (livro_id) REFERENCES livros(id)
);

CREATE TABLE vendas (
    id_venda INT PRIMARY KAY AUTO_INCREMENT,
    id_cliente INT,
    data_venda DATE,
    total DECIMAL (10, 2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

 
CREATE TABLE itens_vendas (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_venda INT, 
    id_livro INT, 
    quantidade INT,
    preco_unitario DECIMAL (10, 2),
    FOREIGN KEY (id_venda) REFERENCES vendas (id_venda),
    FOREIGN KEY (id_livro) REFERENCES livros (id_livro)
);

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