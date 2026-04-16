DROP DATABASE miadb;
CREATE DATABASE miadb;

USE miadb;

CREATE TABLE usuario(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(100) NOT NULL,
email VARCHAR(70) NOT NULL UNIQUE,
telefone VARCHAR(20) NOT NULL UNIQUE,
cpf VARCHAR(14) NOT NULL UNIQUE,
senha VARCHAR(255) NOT NULL,
bloqueado BOOLEAN DEFAULT 0
);

CREATE TABLE gato(
id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(30) NOT NULL,
raca ENUM("srd", "abyssinian", "aphrodite_giant", "aegean", "american_bobtail", 
    "american_curl", "american_shorthair", "american_wirehair", "arabian_mau", 
    "australian_mist", "balinese", "bambino", "bengal", "birman", "burmese", 
    "bombay", "brazilian_shorthair", "british_longhair", "british_shorthair", 
    "burmilla", "california_spangled", "chantilly_tiffany", "chartreux", 
    "chausie", "colorpoint_shorthair", "cornish_rex", "cymric", "devon_rex", 
    "donskoy", "egyptian_mau", "european_shorthair", "exotic_shorthair", 
    "german_rex", "havana_brown", "highlander", "himalayan", "japanese_bobtail", 
    "khao_manee", "korat", "kurilian_bobtail", "laperm", "lykoi", "maine_coon", 
    "manx", "minskin", "munchkin", "nebelung", "norwegian_forest", "ocicat", 
    "oriental_longhair", "oriental_shorthair", "persian", "peterbald", 
    "pixie_bob", "ragamuffin", "ragdoll", "russian_blue", "savannah", 
    "scottish_fold", "selkirk_rex", "serengeti", "siberian", "singapura", 
    "snowshoe", "somali", "sphynx", "thai", "tonkinese", "toyger", 
    "turkish_angora", "turkish_van", "ukrainian_levkoy", "york_chocolate"
) DEFAULT "srd",
idade ENUM("filhote", "jovem" , "adulto", "senior", "geriatrico") NOT NULL,
descricao TEXT,
sexo ENUM("Macho" , "Fêmea") NOT NULL,
porte ENUM("pequeno", "médio" , "grande") NOT NULL,
foto_principal TEXT,  
cadastrado BOOLEAN DEFAULT TRUE NOT NULL,
vacinado BOOLEAN DEFAULT FALSE NOT NULL,
castrado BOOLEAN DEFAULT FALSE NOT NULL,
id_usuario INT NOT NULL,
FOREIGN KEY (id_usuario) REFERENCES usuario (id)
);

CREATE TABLE pedido_adocao(
id INT PRIMARY KEY AUTO_INCREMENT,
data_horas DATETIME NOT NULL,
id_usuario INT NOT NULL,
id_gato INT NOT NULL,
status ENUM("pendente","recusado","feito", "em analise") DEFAULT "em analise",
FOREIGN KEY (id_usuario) REFERENCES usuario (id),
FOREIGN KEY (id_gato) REFERENCES gato (id)
);

INSERT INTO usuario 
(nome, email, telefone, cpf, senha, bloqueado)
VALUES
('João Silva', 'joao.silva1@email.com', '11999990001', '12345678901', 'senha123', FALSE),

('Maria Oliveira', 'maria.oliveira2@email.com', '11999990002', '12345678902', 'senha123', FALSE),

('Carlos Souza', 'carlos.souza3@email.com', '11999990003', '12345678903', 'senha123', FALSE),

('Ana Santos', 'ana.santos4@email.com', '11999990004', '12345678904', 'senha123', FALSE),

('Pedro Costa', 'pedro.costa5@email.com', '11999990005', '12345678905', 'senha123', FALSE),

('Juliana Lima', 'juliana.lima6@email.com', '11999990006', '12345678906', 'senha123', FALSE),

('Lucas Pereira', 'lucas.pereira7@email.com', '11999990007', '12345678907', 'senha123', FALSE),

('Fernanda Alves', 'fernanda.alves8@email.com', '11999990008', '12345678908', 'senha123', FALSE),

('Rafael Gomes', 'rafael.gomes9@email.com', '11999990009', '12345678909', 'senha123', FALSE),

('Camila Rocha', 'camila.rocha10@email.com', '11999990010', '12345678910', 'senha123', FALSE),

('Otávio Santos','05692969009@senacrs.edu.br','53984652732','05692969009','Teste1234', FALSE);

('Lucas Emanuel','00000000000@senacrs.edu.br','555399477529','00000000000','Teste1234', FALSE);


INSERT INTO gato 
(nome, raca, idade, descricao, sexo, porte, foto_principal, cadastrado, vacinado, id_usuario)
VALUES
('Bolt', 'abyssinian', 'jovem', 'Muito ativo e curioso', 'Macho', 'médio', 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131', TRUE, TRUE, 1),

('Cleo', 'egyptian_mau', 'adulto', 'Elegante e observadora', 'Fêmea', 'médio', 'https://images.pexels.com/photos/7524926/pexels-photo-7524926.jpeg?_gl=1*cxjkl7*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg4MTMkajU5JGwwJGgw', TRUE, TRUE, 2),

('Zeca', 'american_bobtail', 'adulto', 'Carinhoso e sociável', 'Macho', 'médio', 'https://images.unsplash.com/photo-1495360010541-f48722b34f7d', FALSE, TRUE, 3),

('Maya', 'birman', 'adulto', 'Muito dócil e tranquila', 'Fêmea', 'médio', 'https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?_gl=1*1m8gsgd*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg2NzkkajYwJGwwJGgw', TRUE, TRUE, 4),

('Fred', 'exotic_shorthair', 'senior', 'Calmo e gosta de dormir', 'Macho', 'pequeno', 'https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=2048x2048&w=is&k=20&c=80OmuSCyHtOi_jqkyd4yyDjja73qPSnH3vgzRgXIIUg=', TRUE, FALSE, 5),

('Lola', 'chartreux', 'jovem', 'Silenciosa e observadora', 'Fêmea', 'médio', 'https://images.pexels.com/photos/35567060/pexels-photo-35567060.jpeg?_gl=1*1m730z0*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg3MDMkajM2JGwwJGgw', TRUE, TRUE, 6),

('Apolo', 'norwegian_forest', 'adulto', 'Peludo e resistente ao frio', 'Macho', 'grande', 'https://images.pexels.com/photos/10092313/pexels-photo-10092313.jpeg?_gl=1*1ssnf9*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg3MjkkajEwJGwwJGgw', FALSE, TRUE, 7),

('Kirara', 'turkish_angora', 'jovem', 'Ágil e muito esperta', 'Fêmea', 'pequeno', 'https://images.pexels.com/photos/6247959/pexels-photo-6247959.jpeg?_gl=1*io2f0y*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg3NTIkajU5JGwwJGgw', TRUE, TRUE, 8),

('Bruce', 'bombay', 'adulto', 'Preto e muito elegante', 'Macho', 'médio', 'https://media.istockphoto.com/id/2165337331/pt/foto/portrait-of-tabby-cat.jpg?s=2048x2048&w=is&k=20&c=TRFtKeNt9UfWyVtFT2qYqbcsAuGT6VpsSEdSSj5l9tw=', TRUE, FALSE, 9),

('Dora', 'balinese', 'filhote', 'Muito comunicativa e ativa', 'Fêmea', 'pequeno', 'https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?_gl=1*5x0kx7*_ga*MTY1OTk2NzExMi4xNzc2MzU4NDg1*_ga_8JE65Q40S6*czE3NzYzNTg0ODQkbzEkZzEkdDE3NzYzNTg3NzgkajMzJGwwJGgw', TRUE, TRUE, 10);