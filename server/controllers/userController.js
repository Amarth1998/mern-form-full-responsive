import { comparePassword, hashpassword } from "../helpers/userHelper.js";
import userModel from "../models/userModel.js";
import JWT from "jsonwebtoken";


// Register Controller
export const userRegisterController = async (req, res) => {
    try {
        const { username, email, password } = req.body;
  
        // Validation
        if (!username) return res.status(400).send({ success: false, message: "Name is required" });
        if (!email) return res.status(400).send({ success: false, message: "Email is required" });
        if (!password) return res.status(400).send({ success: false, message: "Password is required" });
  
        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).send({ success: false, message: "Invalid email format" });
        }
  
        // Validate username format 
        const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_]*$/; // Starts with letter, followed by letters, numbers, or underscores
        if (!usernameRegex.test(username)) {
            return res.status(400).send({ success: false, message: "Username must start with a letter and can contain letters, numbers, and underscores" });
        }
  
        // Check if the user already exists
        const existingUserEmail = await userModel.findOne({ email });
        if (existingUserEmail) {
            return res.status(409).send({
                success: false,
                message: "Email already registered. Please login.",
            });
        }
  
        // Check if the username already exists (if applicable)
        const existingUserName = await userModel.findOne({ username });
        if (existingUserName) {
            return res.status(409).send({
                success: false,
                message: "Username already taken. Please choose another.",
            });
        }
  
        // Hash the password
        const hashedPassword = await hashpassword(password);
  
        // Save the new user
        const user = await new userModel({
            username,
            email,
            password: hashedPassword,
        }).save();
  
        res.status(201).send({
            success: true,
            message: "Registration successful",
            user: {
                id: user._id,
                name: user.username,
                email: user.email,
                
            },
        });
  
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).send({
            success: false,
            message: "Error in registration. Please try again later.",
        });
    }
  };
  

// Login Controller
export const userLoginController = async (req, res) => {
  try {
      const { email, password } = req.body;

      // Validation
      if (!email || !password) {
          return res.status(400).send({
              success: false,
              message: "Email and password are required",
              error: "Invalid input"
          });
      }

      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (!user) {
          return res.status(404).send({
              success: false,
              message: "Email is not registered"
          });
      }

      // Compare passwords
      const match = await comparePassword(password, user.password);
      if (!match) {
          return res.status(401).send({
              success: false,
              message: "Invalid password"
          });
      }

      // Generate a JWT token
      const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '5d' });

      res.status(200).send({
          success: true,
          message: "Login successful",
          user: {
              username: user.username,
              email: user.email,
              token
          },
          
      });

  } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send({
          success: false,
          message: "Internal server error",
          error: error.message // Provide a generic error message
      });
  }
};






