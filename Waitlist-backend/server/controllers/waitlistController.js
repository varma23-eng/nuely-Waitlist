const pool = require("../config/db");

exports.addToWaitlist = async (req, res) => {
  const { name, email, phone } = req.body;
  
  if (!name || !email) {
    return res.status(400).json({ message: "Name and email are required." });
  }

  try {
    const [existing] = await pool.query(
      "SELECT id FROM waitlist WHERE email = ?", [email]
    );
    
    if (existing.length) {
      return res.status(409).json({ message: "Email is already on the waitlist." });
    }
    
    await pool.query(
      "INSERT INTO waitlist (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone || null]
    );
    
    res.status(201).json({ message: "You're on the list!" });
  } catch (err) {
    console.error("Database error:", err);
    res.status(500).json({ message: "Internal server error" });
  }
};