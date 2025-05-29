<h1 align="center">📚 Book Summary Web App</h1>

<p align="center">
  <strong>Developed by:</strong> Aditya Shukla<br>
  <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary.git">GitHub Repository</a>
</p>

<hr>

<h2>🔐 Secure Login System</h2>
<p>
  This web application features a secure user authentication system where:
</p>
<ul>
  <li>Passwords are <strong>hashed and salted</strong> for maximum protection.</li>
  <li>Only registered users can log in and access the main functionality.</li>
</ul>

<hr>

<h2>📖 Core Features</h2>
<p>Once logged in, users can:</p>
<ul>
  <li>📝 Enter a <strong>Book Title</strong></li>
  <li>📄 Write and save their own <strong>Book Summary</strong></li>
  <li>🔢 Input the <strong>ISBN number</strong></li>
</ul>
<p>
  All entries are securely stored and linked to the logged-in user's account.
</p>

<hr>

<h2>⚙️ How to Fork & Run Locally</h2>

<ol>
  <li>
    <strong>Fork the Repository</strong><br>
    Click the <em>Fork</em> button on the top-right corner of the 
    <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary.git">repository</a>.
  </li>
  <li>
    <strong>Clone Your Fork</strong><br>
    Open a terminal and run:<br>
    <code>git clone https://github.com/your-username/Book-Summary.git</code>
  </li>
  <li>
    <strong>Install Dependencies</strong><br>
    Navigate into the project folder:<br>
    <code>cd Book-Summary</code><br>
    Then run:<br>
    <code>npm install</code>
  </li>
  <li>
    <strong>Set Environment Variable</strong><br>
    Create a file named <code>.env</code> in the root directory with:<br>
    <pre>
SESSION_SECRET=your_secure_random_string
    </pre>
    Replace <code>your_secure_random_string</code> with a long, random string.
  </li>
  <li>
    <strong>Run the App</strong><br>
    Start the server with:<br>
    <code>node app.js</code><br>
    Or, for automatic restarts on file change:<br>
    <code>npx nodemon app.js</code>
  </li>
  <li>
    <strong>Access Locally</strong><br>
    Open your browser and visit:<br>
    <a href="http://localhost:3000">http://localhost:3000</a>
  </li>
</ol>

<hr>

<h2>🚀 Live Demo</h2>
<p>
  Experience the app live at:<br>
  <a href="https://book-summary-sffp.onrender.com" target="_blank">
    https://book-summary-sffp.onrender.com
  </a>
</p>

<hr>

<h2>📌 Please Note</h2>
<p>
  This is a student project created by Aditya Shukla using the <strong>free tier</strong> of:
</p>
<ul>
  <li>🖥️ <strong>Render</strong> (for web hosting)</li>
  <li>🗃️ <strong>PostgreSQL</strong> (for database)</li>
</ul>
<p>
  Because of this, the live version may occasionally go to sleep or stop working if resource limits are exceeded.
</p>

<hr>

<h2>💬 Feedback or Issues?</h2>
<p>
  Found a bug? Have a suggestion? Want to contribute?<br>
  Feel free to <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary/issues">open an issue</a> or submit a pull request!
</p>
