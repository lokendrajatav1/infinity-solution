const express = require('express');
const upload = require("../utils/upload");
const { getContacts, createContact, deleteContact } = require('../controller/contactController');

const router = express.Router();
router.route("/contact").get( getContacts)
router.route("/contact").post( createContact)
router.route("/contact/:id").delete( deleteContact)



module.exports = router;