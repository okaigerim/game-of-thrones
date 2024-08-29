<h1>Game of Thrones React App</h1>

<p>This is a Game of Thrones-themed React application that fetches and displays character information and quotes from Game of Thrones. The app is deployed on GitHub Pages.</p>

<h2>Live Demo</h2>

<p>You can view the live demo of the app here: <a href="https://okaigerim.github.io/game-of-thrones/">Game of Thrones React App</a></p>

<h2>Features</h2>
<ul>
  <li><strong>Character Information:</strong> Displays details about various Game of Thrones characters.</li>
  <li><strong>Character Quotes:</strong> Fetches and displays famous quotes for each character.</li>
  <li><strong>Responsive Design:</strong> Works on both desktop and mobile devices.</li>
</ul>

<h2>Getting Started</h2>

<p>To run this project locally, follow these steps:</p>

<h3>Prerequisites</h3>
<p>Node.js and npm or Yarn installed on your machine.</p>

<h3>Installation</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/okaigerim/game-of-thrones.git</code></pre>
  </li>
  <li>Navigate to the project directory:
    <pre><code>cd game-of-thrones</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
    <p>or</p>
    <pre><code>yarn install</code></pre>
  </li>
</ol>

<h3>Running the App Locally</h3>
<p>To run the app in development mode, use the following command:</p>
<pre><code>npm start</code></pre>
<p>or</p>
<pre><code>yarn start</code></pre>

<p>The app will open in your default browser at <a href="http://localhost:3000/">http://localhost:3000/</a>.</p>

<h3>Building for Production</h3>
<p>To create a production build, use:</p>
<pre><code>npm run build</code></pre>
<p>or</p>
<pre><code>yarn build</code></pre>
<p>This will create an optimized build of your application in the <code>build/</code> directory.</p>

<h3>Deploying to GitHub Pages</h3>
<p>This project is configured to deploy to GitHub Pages. To deploy, use:</p>
<pre><code>npm run deploy</code></pre>
<p>or</p>
<pre><code>yarn deploy</code></pre>
<p>This command will build the app and deploy it to the <code>gh-pages</code> branch.</p>

<h2>Project Structure</h2>

<pre><code>
game-of-thrones/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Main.js
│   │   ├── Search.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
</code></pre>

<p><strong>public/</strong>: Static assets.</p>
<p><strong>src/</strong>: Contains all the React components and main application files.</p>
<p><strong>components/</strong>: Folder for reusable React components.</p>
<p><strong>App.js</strong>: Main component that includes the routing.</p>
<p><strong>index.js</strong>: Entry point for the React app.</p>
<p><strong>index.css</strong>: Global styles for the app.</p>

<h2>Contributing</h2>
<p>Contributions are welcome! Please feel free to submit a Pull Request or open an Issue for any bugs or suggestions.</p>

<h2>License</h2>
<p>This project is licensed under the MIT License - see the <a href="LICENSE">LICENSE</a> file for details.</p>

<h2>Acknowledgements</h2>
<ul>
  <li><a href="https://reactjs.org/">React</a> - JavaScript library for building user interfaces.</li>
  <li><a href="https://reactrouter.com/">React Router</a> - Library for routing in React applications.</li>
  <li><a href="https://thronesapi.com/">Game of Thrones API</a> - API used to fetch character information.</li>
  <li><a href="https://api.gameofthronesquotes.xyz/">Game of Thrones Quotes API</a> - API used to fetch character quotes.</li>
</ul>
