<h1>📚 Book Summary Web App</h1>

<p><strong>Author:</strong> Aditya Shukla</p>
<p><strong>Repository:</strong> <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary.git">Book-Summary on GitHub</a></p>

<h2>🔒 Secure Login System</h2>
<p>This web application provides a secure login system where:</p>
<ul>
  <li>User passwords are <strong>hashed and salted</strong> before being stored, offering a high level of security.</li>
  <li>Only authenticated users can access the protected features of the app.</li>
</ul>

<h2>📖 Book Entry Features</h2>
<p>Once logged in, users can:</p>
<ul>
  <li>Enter a book title</li>
  <li>Write and save their own personal summary</li>
  <li>Input the book's ISBN number</li>
</ul>
<p>All this data is securely saved and associated with the logged-in user.</p>

<h2>🛠️ How to Fork & Run This App Locally</h2>

<ol>
  <li>
    <strong>Fork the Repository</strong><br>
    Click the <em>Fork</em> button on the top-right corner of the 
    <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary.git">repository</a> page.
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
    Install the required dependencies:<br>
    <code>npm install</code>
  </li>
  <li>
    <strong>Set Up Environment Variables</strong><br>
    Create a file named <code>.env</code> in the root directory and add:<br>
    <pre>
SESSION_SECRET=your_secure_random_string
    </pre>
    Replace <code>your_secure_random_string</code> with any long, secure random string.
  </li>
  <li>
    <strong>Run the App</strong><br>
    In the terminal, run:<br>
    <code>node app.js</code><br>
    or if using nodemon:<br>
    <code>npx nodemon app.js</code>
  </li>
  <li>
    <strong>Open in Browser</strong><br>
    Visit <a href="http://localhost:3000">http://localhost:3000</a> to use the app locally.
  </li>
</ol>

<h2>🚀 Live Demo</h2>
<p>You can view the live deployed version of this project here:</p>
<p><a href="https://book-summary-sffp.onrender.com" target="_blank">https://book-summary-sffp.onrender.com</a></p>

<h2>📬 Feedback or Issues?</h2>
<p>Feel free to open an <a href="https://github.com/Aditya-Shukla-Professional/Book-Summary/issues">issue</a> or submit a pull request!</p>
