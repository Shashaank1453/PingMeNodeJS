const {Router} = require('express')
const chatController = require('../controllers/chatController')
const {protectRoutes} = require('../middleware/authMiddleware')
const router = Router()
const printBod = require('../middleware/printBod')

router.route('/chats').get(printBod,protectRoutes,chatController.getChats)
router.route('/chatDetails').get(protectRoutes,chatController.getChatDetails)
router.route('/createChat').post(protectRoutes,chatController.postCreateChat)
router.route('/sendMessage').post(protectRoutes,chatController.postMessage)
router.route('/messages').get(protectRoutes,chatController.getMessages)

module.exports = router 