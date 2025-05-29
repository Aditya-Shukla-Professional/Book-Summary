import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import pool from "./db.js";
import session from "express-session";
import dotenv from "dotenv";
import bcrypt from "bcrypt"

dotenv.config();

const __dirname=dirname(fileURLToPath(import.meta.url));
const app=express();
const port=process.env.PORT || 3000;
const API_KEY=process.env.API_KEY;
const saltRounds=10;

app.use(session({
    secret: process.env.SESSION_SECRET, // A strong key for checking authenticity by the sever
    resave: false,
    saveUninitialized: true
}));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+"/public"));

function requireLogin(req, res, next) {  // used to check if the user is logged in
    if (!req.session.user_id) {
        return res.redirect("/");  // Redirect to login if not logged in
    }
    next();  // Proceed to route handler if user is authenticated
}

app.get("/", (req, res) => {  // used to get the login as the first page
    res.render("login");
  });

app.post("/login",async(req,res)=>{   // used to check if the user can login or signup
    const {email,username,password_hash,action}=req.body;
    const data= await pool.query("SELECT password_hash FROM users WHERE email = $1 AND username = $2", [email, username])
    const storedPassword = data.rows[0]
    // console.log(storedPassword.password_hash)
    // console.log(req.session)
    if (action==="login"){  // used to login
        bcrypt.compare(password_hash,storedPassword.password_hash,async (err,pass)=>{
            if(err){
                console.log("Error comparing password: ",err)
            }
            else if(pass){
                const result = await pool.query("SELECT * FROM users WHERE email = $1 AND username = $2", [email, username]);
                const user = result.rows[0]
                req.session.user_id = user["user_id"]
                if (user && password_hash.length>0){
                    req.session.username = username;
                    res.redirect("/home");
                }
                else{
                    res.send("Invalid Credentials, <a href='/'>Try again</a>")
                }
            }
            else{
                res.send("Invalid Credentials, <a href='/'>Try again</a>")
                }
        })
    }
    else if (action==="signup"){  // used to signup
        try{
          if (email.length>0 && password_hash.length>0){
              bcrypt.hash(password_hash,saltRounds,async(err,hash)=>{
                if(err){
                    console.log("Error hashing password: ",err)
                }
                else{
                    await pool.query(`INSERT INTO users(email, username, password_hash) VALUES($1,$2,$3)`,[email,username,hash])
                    const result = await pool.query("SELECT * FROM users WHERE email = $1 AND username = $2", [email, username]);
                    const user = result.rows[0]
                    req.session.user_id = user["user_id"]
                    req.session.username = username;
                    res.redirect("/home");
                }
              })
          }
          else{
              res.send("Invalid Credentials, <a href='/'>Try again</a>")
          }
        }
        catch (error) {
          if (error.code === 'ER_DUP_ENTRY') {
            res.status(400).send("This email is already registered. Please log in.");
          } else {
            console.error(error);
            res.status(500).send("An error occurred. Please try again later.");
          }
        }

    }
})

app.get("/home", requireLogin, async(req,res)=>{  // the main home page the user gets to see
    let sortQuery = "SELECT * FROM books WHERE user_id = $1";
    const sort = req.query.sort;
    if (sort === "newest") {
        sortQuery += " ORDER BY created_at DESC";
    } 
    else if (sort === "oldest") {
        sortQuery += " ORDER BY created_at ASC";
    }
    else{
        sortQuery += " ORDER BY title"
    }
    let username = req.session.username.charAt(0).toUpperCase() + req.session.username.slice(1)
    const lst = await pool.query(sortQuery,[req.session.user_id]);
    res.render("index",{data:lst.rows,sort:sort,username:username});
})

app.post("/submit",requireLogin,async (req,res)=>{ // it is used when the save button is clicked
    // console.log(user_id)
    if (req.body.action==="update"){
        await pool.query("UPDATE books SET title = $1, summary = $2, isbn = $3 WHERE user_id = $4 AND id = $5",[req.body.title,req.body.summary,req.body.isbn,req.session.user_id,req.body.bookId])
    }
    else if (req.body.action==="add"){
        await pool.query("INSERT INTO books(user_id,title,summary,isbn) VALUES($1,$2,$3,$4)",[req.session.user_id,req.body.title,req.body.summary,req.body.isbn])
    }
    res.redirect('/home');
})

app.post("/delete",requireLogin,(req,res)=>{  // it is used when the delete button is clicked
    pool.query("DELETE FROM books WHERE user_id = $1 AND id = $2",[req.session.user_id,req.body.bookId])
    res.redirect("/home")
})

app.listen(port,()=>{  // used to listen on port
    console.log(`Server is running on port ${port}`)
})