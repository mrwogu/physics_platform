const pool = require('../../db');
const queries = require('./queries');

//CRUD for USERS table
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

module.exports = {
    getUsers,
    getUserById,
    addUser,
};
