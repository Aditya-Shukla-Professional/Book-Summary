📚 Book Summary Web App
=======================

**Developed by:** Aditya Shukla     [GitHub Repository](https://github.com/Aditya-Shukla-Professional/Book-Summary.git)

* * *

🔐 Secure Login System
----------------------

This web application features a secure user authentication system where:

*   Passwords are **hashed and salted** for maximum protection.
*   Only registered users can log in and access the main functionality.

* * *

📖 Core Features
----------------

Once logged in, users can:

*   📝 Enter a **Book Title**
*   📄 Write and save their own **Book Summary**
*   🔢 Input the **ISBN number**

All entries are securely stored and linked to the logged-in user's account.

* * *

⚙️ How to Fork & Run Locally
----------------------------

1.  **Fork the Repository**  
    Click the _Fork_ button on the top-right corner of the [repository](https://github.com/Aditya-Shukla-Professional/Book-Summary.git).
2.  **Clone Your Fork**  
    Open a terminal and run:  
    `git clone https://github.com/your-username/Book-Summary.git`
3.  **Install Dependencies**  
    Navigate into the project folder:  
    `cd Book-Summary`  
    Then run:  
    `npm install`
4.  **Set Environment Variable**  
    Create a file named `.env` in the root directory with:  
    
    SESSION\_SECRET=your\_secure\_random\_string
        
    
    Replace `your_secure_random_string` with a long, random string.
5.  **Run the App**  
    Start the server with:  
    `node app.js`  
    Or, for automatic restarts on file change:  
    `npx nodemon app.js`
6.  **Access Locally**  
    Open your browser and visit:  
    [http://localhost:3000](http://localhost:3000)

* * *

🚀 Live Demo
------------

Experience the app live at:  
[https://book-summary-sffp.onrender.com](https://book-summary-sffp.onrender.com)

* * *

📌 Please Note
--------------

This is a student project created by Aditya Shukla using the **free tier** of:

*   🖥️ **Render** (for web hosting)
*   🗃️ **PostgreSQL** (for database)

Because of this, the live version may occasionally go to sleep or stop working if resource limits are exceeded.

* * *

💬 Feedback or Issues?
----------------------

Found a bug? Have a suggestion? Want to contribute?  
Feel free to [open an issue](https://github.com/Aditya-Shukla-Professional/Book-Summary/issues) or submit a pull request!
