const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Contact = require("../models/contactModel");

exports.createContact = catchAsyncErrors(async (req, res) => {
    const { name, email, phone, message } = req.body;

    const contact = await Contact.create({ name, email, phone, message });
    res.status(201).json({
        success: true,
        message: "Contact created successfully",
        data: contact
    });
   
});

exports.getContacts = catchAsyncErrors(async (req, res) => {
    const contacts = await Contact.find({});

    res.status(200).json({
        success: true,
        data: contacts
    });
})

exports.deleteContact = catchAsyncErrors(async (req, res) => {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json({
        success: true,
        message: "Contact deleted successfully",
        data: contact
    });
})