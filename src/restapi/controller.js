const pool = require('../../db');
const queries = require('./queries');
const path = require("path");

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

const updateUserById = (res, req) => {
    const id = parseInt(req.params.id);
    const { name } = req.body;
    pool.query(queries.getUserById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if(noUserFound) {
        res.send("User doesn't exist.");
    }
    pool.query(queries.updateUserById, [name, id], (error, results) => {
        if (error) throw error;
        response.status(200).send("Update successful.");
    })
    })
}

/* CRUDs for MODELS table */

const getModels = (req, res) => {
    pool.query(queries.getModels, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

//this method is responsible for uploading the icon and js file to the server
const uploadModel = (req, res, next) => {
    const icon = req.files.icon;
    const model = req.files.model;
    icon.mv(path.join(__dirname + '/../uploads/images/' + icon.name), function(err, result) {
        if(err)
            throw err;
        model.mv(path.join(__dirname + '/../uploads/models/' + model.name), function(err, result) {
            if(err)
                throw err;
            res.status(201).send({
                success: true,
                message: "File uploaded!"
            });
        })
    })

}

const addModel = (req, res, next) => {
    const {name, creator = 'Admin', creation_date = new Date(), status = 'U', mpath = path.join(__dirname + '/../uploads/models/' + name), imgname} = req.body;
    const ipath = path.join(__dirname + '/../uploads/models/' + imgname);

    pool.query(queries.addImage, [ipath], (error, results) => {
            if (error) throw error;
            console.log("Image added successfully.");
            const image = results.rows[0].id;
            pool.query(queries.addModel, [name, creator, creation_date, status, mpath, image], (error, results) => {
                if (error) throw error;
                res.status(201).send("Model added successfully.");
                console.log("Model added successfully.");
            }
        );
        }
    );

}

const getModelById = (req, res) => {
    const id = parseInt(req.params.id);
    pool.query(queries.getModelById, [id], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
};

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUserById,
    addModel,
    updateUserById,
    getModelById,
    getModels,
    uploadModel
};
