const pool = require('../../db');
const queries = require('./queries');

/* CRUDs for USERS table */

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const getUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

const addUser = (req, res) => {
    const {firstname, surname, email, login, role} = req.body;
    //check if email exists
    pool.query(queries.checkEmailExists, [email], (error, results) => {
        if (results.rows.length) {
            res.send("Email already exists.");
        }

        //check if email exists
        pool.query(queries.checkLoginExists, [login], (error, results) => {
            if (results.rows.length) {
                res.send("Login already exists.");
            }


            pool.query(queries.addUser, [firstname, surname, email, login, role], (error, results) => {
                    if (error) throw error;
                    res.status(201).send("User added successfully.");
                    console.log("User added successfully.");
                }
            );
        });
    });
};

const deleteUserById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if(noUserFound) {
            res.send("User doesn't exist.");
        }
        pool.query(queries.deleteUserById, [id], (error, results) => {
            if(error) throw error;
            res.status(200).send("User deleted successfully.");
        })
    })
};

/* CRUDs for MODELS table */

const addModel = (req, res) => {
    const {model_name, creator, creation_date, status, model_code} = req.body;
    pool.query(queries.addUser, [model_name, creator, creation_date, status, model_code], (error, results) => {
        if (error) throw error;
        res.status(201).send("Model added successfully.");
        console.log("Model added successfully.");
    });
};


module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUserById,
    addModel
};
