/**
 * @swagger
 * tags:
 *   name: Colors
 *   description: API for managing colors
 */

/**
 * @swagger
 * /colors:
 *   get:
 *     summary: Get all colors
 *     tags: [Colors]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of colors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

/**
 * @swagger
 * tags:
 *   name: Images
 *   description: API for managing images
 */

/**
 * @swagger
 * /images:
 *   get:
 *     summary: Get all images
 *     tags: [Images]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */

/**
 * @swagger
 * tags:
 *   name: Boards
 *   description: API for managing boards
 */

/**
 * @swagger
 * /boards:
 *   get:
 *     summary: Get all boards of a user
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of boards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   backgroundColor:
 *                     type: string
 *                   backgroundImage:
 *                     type: string
 *                   username:
 *                     type: string
 */

/**
 * @swagger
 * /board:
 *   post:
 *     summary: Create a new board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the board
 *       
 *     responses:
 *       200:
 *         description: The created board
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 backgroundColor:
 *                   type: string
 *                 backgroundImage:
 *                   type: string
 *                 username:
 *                   type: string
 */

/**
 * @swagger
 * /board/{id}:
 *   delete:
 *     summary: Delete a board
 *     tags: [Boards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The board ID
 *     responses:
 *       200:
 *         description: Board deleted successfully
 */

/**
 * @swagger
 * tags:
 *   name: Lists
 *   description: API for managing lists
 */

/**
 * @swagger
 * /board/{boardId}/lists:
 *   get:
 *     summary: Get all lists of a board
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The board ID
 *     responses:
 *       200:
 *         description: A list of lists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   boardId:
 *                     type: integer
 */

/**
 * @swagger
 * /board/{boardId}/list:
 *   post:
 *     summary: Create a new list
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: boardId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The board ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the list
 *     responses:
 *       200:
 *         description: The created list
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 boardId:
 *                   type: integer
 */

/**
 * @swagger
 * /list/{id}:
 *   delete:
 *     summary: Delete a list
 *     tags: [Lists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The list ID
 *     responses:
 *       200:
 *         description: List deleted successfully
 */

/**
 * @swagger
 * tags:
 *   name: Cards
 *   description: API for managing cards
 */

/**
 * @swagger
 * /list/{listId}/cards:
 *   get:
 *     summary: Get all cards of a list
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: listId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The list ID
 *     responses:
 *       200:
 *         description: A list of cards
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   listId:
 *                     type: integer
 */

/**
 * @swagger
 * /list/{listId}/card:
 *   post:
 *     summary: Create a new card
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: listId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The list ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the card
 *     responses:
 *       200:
 *         description: The created card
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 listId:
 *                   type: integer
 */

/**
 * @swagger
 * /card/{id}:
 *   delete:
 *     summary: Delete a card
 *     tags: [Cards]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The card ID
 *     responses:
 *       200:
 *         description: Card deleted successfully
 */

/**
 * @swagger
 * tags:
 *   name: Checklists
 *   description: API for managing checklists
 */

/**
 * @swagger
 * /card/{cardId}/checklists:
 *   get:
 *     summary: Get all checklists of a card
 *     tags: [Checklists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: cardId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The card ID
 *     responses:
 *       200:
 *         description: A list of checklists
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   cardId:
 *                     type: integer
 */


/**
 * @swagger
 * /card/{cardId}/checklist:
 *   post:
 *     summary: Create a new checklist
 *     tags: [Checklists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: cardId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The card ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the checklist
 *     responses:
 *       200:
 *         description: The created checklist
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 cardId:
 *                   type: integer
 */

/**
 * @swagger
 * /checklist/{id}:
 *   delete:
 *     summary: Delete a checklist
 *     tags: [Checklists]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The checklist ID
 *     responses:
 *       200:
 *         description: Checklist deleted successfully
 */


/**
 * @swagger
 * tags:
 *   name: Checkitems
 *   description: API for managing checkitems
 */

/**
 * @swagger
 * /checklist/{checklistId}/checkitem:
 *   post:
 *     summary: Create a new checkitem
 *     tags: [Checkitems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: checklistId
 *         schema:
 *           type: integer
 *         required: true
 *         description: The checklist ID
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the checkitem
 *     responses:
 *       200:
 *         description: The created checkitem
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 name:
 *                   type: string
 *                 checklistId:
 *                   type: integer
 *                 state:
 *                   type: string
 *                   enum: [incomplete, complete]
 */


/**
 * @swagger
 * /checkitem/{id}:
 *   put:
 *     summary: Update a checkitem
 *     tags: [Checkitems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The checkitem ID
 *       - in: query
 *         name: state
 *         schema:
 *           type: string
 *         required: true
 *         description: The new state of the checkitem
 *         enum: [incomplete, complete]
 *     responses:
 *       200:
 *         description: Checkitem updated successfully
 */

/**
 * @swagger
 * /checkitem/{id}:
 *   delete:
 *     summary: Delete a checkitem
 *     tags: [Checkitems]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The checkitem ID
 *     responses:
 *       200:
 *         description: Checkitem deleted successfully
 */