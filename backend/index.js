const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
const app = express();

// Middleware
app.use(multer().any());
app.use(cors({ origin: [process.env.GLOBAL_FRONTEND_URL], credentials: true }));
app.use(express.json());

// --- DATABASE MODEL ---
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phone: String,
    college: String
});
const Student = mongoose.model("Student", studentSchema);

// --- CRUD ROUTES ---

// 1. CREATE
app.post("/students", async (req, res) => {
    try {
        const newStudent = await Student.create(req.body);
        res.status(201).send({ status: true, data: newStudent });
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
});

// 2. READ (All)
app.get("/students", async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).send({ status: true, data: students });
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
});

// 3. UPDATE
app.put("/students/:id", async (req, res) => {
    try {
        const updated = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send({ status: true, data: updated });
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
});

// 4. DELETE
app.delete("/students/:id", async (req, res) => {
    try {
        await Student.findByIdAndDelete(req.params.id);
        res.status(200).send({ status: true, message: "Deleted successfully" });
    } catch (err) {
        res.status(500).send({ status: false, error: err.message });
    }
});

// --- SERVER & DB CONNECTION ---
mongoose.connect(process.env.MONGOCLUST)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server live at ${PORT}`);
});