const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE id=$1";
const checkEmailExists = "SELECT u FROM users u WHERE u.email=$1";
const checkLoginExists = "SELECT u FROM users u WHERE u.login=$1";
const addUser = "INSERT INTO users (firstname, surname, email, login, role) VALUES ($1, $2, $3, $4, $5)";
const deleteUserById = "DELETE FROM users where id = $1";
const updateUserById = "UPDATE users SET name = $1 WHERE id = $2";

const addModel = "INSERT INTO users (model_name, creator, creation_date, status, model_code) VALUES ($1, $2, $3, $4, $5)";

module.exports = {
    getUsers,
    getUserById,
    addUser,
    checkLoginExists,
    checkEmailExists,
    deleteUserById,
    addModel,
    updateUserById
}