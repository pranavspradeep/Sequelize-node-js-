module.exports = app => {
    const user = require("../controllers/user.controller.js");
  
    var router = require("express").Router();

    /**
    * @swagger
    * components:
    *   schemas:
    *     User:
    *       type: object
    *       required:
    *         - userName
    *         - password
    *         - userStatus
    *       properties:
    *         id:
    *           type: integer
    *           description: The auto-generated id of the book
    *         userName:
    *           type: string
    *           description: The user name
    *         password:
    *           type: string
    *           description: The password of user
    *         userStatus:
    *           type: string
    *           description: The user status
    *       example:
    *         id: 0
    *         userName: pranavspradeep
    *         password: password
    */
   
    /**
     * @swagger
     * tags:
     *   name: Users
     *   description: The user managing API
     */

   
    // create new user

    /**
    * @swagger
    * /api/user:
    *   post:
    *     summary: Create a new user
    *     tags: [Users]
    *     requestBody:
    *       required: true
    *       content:
    *         application/json:
    *           schema:
    *             $ref: '#/components/schemas/User'
    *     responses:
    *       200:
    *         description: The user was successfully created
    *         
    *       500:
    *         description: Some server error
    */
    
    router.post("/", user.create);
  
    // Retrieve all users

    /** 
 * @swagger 
 * /api/user: 
 *
 *   get: 
 *     description: Get all User 
 *     tags : [Users]
 *     responses:  
 *       200: 
 *         description: Success  
 *   
 */  
    router.get("/", user.findAll);



    /**
 * @swagger
 * /api/user/userTutorials/{id}:
 *  get:
 *    summary: Get tutorials and user by id
 *    tags: [Users]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The user id
 *  
 *    responses:
 *      200:
 *        description: user data with tutorials found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/User'
 *      404:
 *        description: The user was not found
 *      500:
 *        description: Some error happened
 */
  
 
    router.get("/userTutorials/:id",user.findUserTutorials);

    // Retrieve a single user with id
    router.get("/:id", user.findOne);

   
  
    // Update a user with id
    router.put("/:id", user.update);
  
    // Delete a user with id
    router.delete("/:id", user.delete);
  
    // Delete all users
    router.delete("/", user.deleteAll);



   
    app.use('/api/user', router);
  };