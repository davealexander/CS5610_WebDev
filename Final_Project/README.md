<body class="stackedit">
  <div class="stackedit__html"><p>This is next.js appplication. Nextjs utilizes server side rendering (SSR) to help improve perfromance and security by processign and rendering content on the deployed server</p>
<p>and then sending the content down to the client. The client recieves basic HTML first and then receives the processed materials after. This process is called hydration.</p>
<h1 id="running-nextjs-app">RUNNING NEXTJS APP</h1>
<p>To run a next.js application you will need to</p>
<ol>
<li>
<p>install a modern version of node.</p>
</li>
<li>
<p>In the terminal run: npm run dev</p>
</li>
<li>
<p>This will launch the application to <a href="http://localhost:3000">http://localhost:3000</a> or the next incremented port up (i.e 3001)</p>
</li>
</ol>
<h1 id="important-patterns-for-next.js">IMPORTANT PATTERNS FOR NEXT.JS</h1>
<p>1.API Folder</p>
<p>–API folder is used to communicate to any APIs or database connections 2.[ ] naming convention</p>
<p>–[ ] convention is used to allow for dynamic routing. This allows a call such as api/userregistration</p>
<p>–to receive a PUT request which is in [id] and dynamically creates the route for the specific request</p>
<p>–i.e <a href="http://localhost/apu/userregistration/1293182jasdas23128">http://localhost/apu/userregistration/1293182jasdas23128</a> is generated becaue of [id]</p>
<p>3.CSS module pattern</p>
<p>–CSS modules are a dynamic way for nextjs to create css for the <a href="http://pages.It">pages.It</a> does not make use of IDs. A more in depth look of the modules</p>
<p>–would reveal that if two modules call the same CSS class it actually creates a unique ID for it. Still learning more about this pattern.</p>
<p>4.Pages folder</p>
<p>–Pages folder is where all navigatable pages should go</p>
<p>5.Components folder</p>
<p>–This is where nextjs components live. It is important to note that components cannot make user of getServerSideProps()</p>
<p>6.getServerSideProps()</p>
<p>–This is a process that allows the server to process content before sending it down to the client 7. .env.local</p>
<p>–This is next.js format of using an .env file</p>

<p>============</p>
<p>Any questions feel free to email me @ <a href="mailto:centeno.d@northeastern.edu">centeno.d@northeastern.edu</a></p>
<p>Best</p>
<p>Dave Centeno</p>
</div>
