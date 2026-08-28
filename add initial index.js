# CRWN-API
Proto type for AI tools and integration 
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
res.send("AI Agent is running");
});

app.get("/test-api", async (req, res) => {
try {
console.log("Calling API...");

const response = await fetch("https://api.github.com");
const data = await response.json();

console.log("API RESPONSE:");
console.log(data);

res.json({
success: true,
message: "AI Agent successfully communicated with an API.",
apiResponse: data
});

} catch (error) {
console.error("API ERROR:", error);

res.status(500).json({
success: false,
error: error.message
});
}
});

app.listen(PORT, () => {

console.log(`AI Agent running at http://localhost:${PORT}`);
console.log(`Test API at http://localhost:${PORT}/test-api`);
});
