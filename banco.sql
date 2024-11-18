-- Criando a tabela clientes
CREATE TABLE clientes (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefone VARCHAR(20)
);

-- Criando a tabela agendamentos
CREATE TABLE agendamentos (
    id SERIAL PRIMARY KEY,
    servico VARCHAR(100) NOT NULL,
    data_agendamento DATE NOT NULL,
    hora_agendamento TIME NOT NULL,
    cliente_id INT,
    CONSTRAINT fk_cliente FOREIGN KEY(cliente_id) REFERENCES clientes(id)
);

-- Selecionar todos os clientes
SELECT * FROM clientes;

-- Selecionar todos os agendamentos
SELECT * FROM agendamentos;

-- Inserir cliente
INSERT INTO clientes(nome, email, telefone) VALUES
('Rodolfo Alves', 'rodolfo@gamil.com', '11888888888');

-- Inserir agendamento para um cliente
INSERT INTO agendamentos(servico, data_agendamento, hora_agendamento, cliente_id) VALUES
('Corte de cabelo', '2024-10-15', '14:00', 1),
('Manicure', '2024-10-16', '10:00', 2);

-- Selecionar agendamentos com os dados dos clientes
SELECT 
    agendamentos.servico,
    agendamentos.data_agendamento,
    agendamentos.hora_agendamento,
    clientes.nome,
    clientes.email,
    clientes.telefone
FROM agendamentos
JOIN clientes ON agendamentos.cliente_id = clientes.id;

-- Atualizar o telefone e o email de um cliente específico
UPDATE clientes
SET telefone = '11777777777', email = 'maria.silva@novo@email.com'
WHERE id = 3;

-- Deletar um cliente específico
DELETE FROM clientes
WHERE id = 3;
