"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4590;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/", (Req, Res) => {
    Res.status(200).json({
        email: "Josepholuolofinte@gmail.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/JosephOluOlofinte/HNG-simple-api",
    });
});
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});
