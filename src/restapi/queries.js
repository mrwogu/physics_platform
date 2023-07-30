const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id=$1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email=$1";
const checkLoginExists = "SELECT u FROM users u WHERE u.login=$1";
const addUser = "INSERT INTO users (firstname, surname, email, login, role) VALUES ($1, $2, $3, $4, $5)";

module.exports = {
    getUsers,
    getUserById,
    addUser,
    checkLoginExists,
    checkEmailExists,
}