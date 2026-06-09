CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  password VARCHAR(255),
  role VARCHAR(20),
  photo TEXT
);

CREATE TABLE teachers (
  id SERIAL PRIMARY KEY,
  nip VARCHAR(50),
  name VARCHAR(100),
  subject VARCHAR(100),
  phone VARCHAR(20),
  email VARCHAR(100),
  photo TEXT
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY,
  nis VARCHAR(50),
  nisn VARCHAR(50),
  name VARCHAR(100),
  class VARCHAR(20),
  gender VARCHAR(20),
  photo TEXT,
  address TEXT,
  parent_name VARCHAR(100),
  phone VARCHAR(20)
);

CREATE TABLE attendance (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  date DATE,
  status VARCHAR(20)
);

CREATE TABLE grades (
  id SERIAL PRIMARY KEY,
  student_id INT REFERENCES students(id),
  subject VARCHAR(100),
  assignment INT,
  uts INT,
  uas INT,
  average INT
);

CREATE TABLE school_profile (
  id SERIAL PRIMARY KEY,
  school_name VARCHAR(200),
  address TEXT,
  principal VARCHAR(100),
  logo TEXT
);