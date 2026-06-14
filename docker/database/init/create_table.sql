USE coffee

CREATE TABLE IF NOT EXISTS flavor_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  code VARCHAR(10) NOT NULL UNIQUE,
  name VARCHAR(50) NOT NULL
);

INSERT INTO flavor_categories (code, name) VALUES
  ('FR', 'フルーティー'),
  ('FL', 'フローラル'),
  ('NT', 'ナッティ'),
  ('CH', 'チョコレート'),
  ('SP', 'スパイシー'),
  ('CT', 'シトラス');

CREATE TABLE IF NOT EXISTS roster (
  id INT AUTO_INCREMENT PRIMARY KEY,
  company_name VARCHAR(100) NOT NULL,
  company_name2 VARCHAR(100) NOT NULL,
  user_name VARCHAR(100) NOT NULL,
  address VARCHAR(100) NOT NULL,
  phone_number VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  prefecture VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);USE coffee;

CREATE TABLE IF NOT EXISTS coffees (
  id INT AUTO_INCREMENT PRIMARY KEY,
  flavor_category_code VARCHAR(10) NOT NULL,
  serial_number INT NOT NULL,
  FOREIGN KEY (flavor_category_code) REFERENCES flavor_categories(code)
);

