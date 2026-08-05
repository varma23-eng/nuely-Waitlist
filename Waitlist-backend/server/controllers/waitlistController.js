const pool = require("../config/db");

exports.addToWaitlist = async (req, res) => {
  console.log("===== NEW REQUEST =====");
  console.log("Body:", req.body);

  const { name, email, phone } = req.body;

  try {
    console.log("Checking email...");

    const [existing] = await pool.query(
      "SELECT id FROM waitlist WHERE email = ?",
      [email]
    );

    console.log("Existing:", existing);

    if (existing.length) {
      return res.status(409).json({
        message: "Email is already on the waitlist."
      });
    }

    console.log("Inserting...");

    const [result] = await pool.query(
      "INSERT INTO waitlist (name, email, phone) VALUES (?, ?, ?)",
      [name, email, phone || null]
    );

    console.log("Insert result:", result);

    return res.status(201).json({
      message: "You're on the list!"
    });

  } catch (err) {
    console.error("========== DATABASE ERROR ==========");
    console.error(err);
    console.error("====================================");

    return res.status(500).json({
      message: err.message
    });
  }
};