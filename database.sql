CREATE TABLE daybook (
  id INT PRIMARY KEY AUTO_INCREMENT,
  date DATE,
  description VARCHAR(255),
  amount DECIMAL(12,2),
  category VARCHAR(50)
);

CREATE TABLE ledger (
  id INT PRIMARY KEY AUTO_INCREMENT,
  category ENUM('vendor', 'employee', 'other'),
  name VARCHAR(100),
  type ENUM('debit', 'credit'),
  amount DECIMAL(12,2),
  description VARCHAR(255),
  date DATE,
  cheque_number VARCHAR(50)
);

CREATE TABLE cheques (
  id INT PRIMARY KEY AUTO_INCREMENT,
  ledger_id INT,
  cheque_number VARCHAR(50),
  amount DECIMAL(12,2),
  date DATE,
  status ENUM('pending', 'cleared'),
  FOREIGN KEY (ledger_id) REFERENCES ledger(id)
);