-- Create the database if it doesn't exist
CREATE DATABASE IF NOT EXISTS login_system;

-- Switch to the login_system database
USE login_system;

-- Create users table if it doesn't exist
CREATE TABLE IF NOT EXISTS users (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_username (username)  -- Add index for faster username lookups
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Add some helpful comments about the table structure
/*
Table: users
- id: Auto-incrementing primary key
- username: Unique username for each user (max 50 chars)
- password: Hashed password using PHP's password_hash() function
- created_at: Timestamp of account creation
*/

-- Optional: Create a test user (password: test123)
-- INSERT INTO users (username, password) VALUES ('test_user', '$2y$10$8s1q0QXsYXvXvKHO8Qx6Z.0z3qO5Z1Q9Q9Q9Q9Q9Q9Q9Q9Q9Q9');

-- Grant minimum necessary privileges if using a dedicated user (recommended for production)
-- GRANT SELECT, INSERT, UPDATE ON login_system.users TO 'login_user'@'localhost' IDENTIFIED BY 'your_password_here'; 