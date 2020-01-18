# melonJS

*melonJS is a lightweight, powerful HTML5 framework designed from the ground up to provide a true plugin-free gaming platform. melonJS is an open-source project.*

**For your first time using melonJS, follow these tutorials:**
<details>
     <summary>Building melonJS Step by Step Tutorial</summary><p></p>
     <h3>1. Install <a href="https://code.visualstudio.com/Download">Visual Studio Code</a></h3>
     <h3>2. Install latest <a href="https://nodejs.org/en/">node</a></h3>
	<p>&nbsp;Note: To double check if and which version you have installed call</p>
	<p><b>&nbsp;&nbsp;node -v</b> command</p><p></p>
        <p>&nbsp;You can either run commands from Command Prompt or any source code editor.</p>
     <h3>3. Install JavaScript package manager <a href="https://www.npmjs.com/get-npm">npm</a> by calling</h3>
	<b>&nbsp;&nbsp;npm install download</b><p></p>
	<p>&nbsp;Note: You can double check if and which version you have installed by calling</p><p></p>
	<p><b>&nbsp;&nbsp;npm -v</b> or <b>&nbsp;&nbsp;npm --version</b> command </p>
     <h3>4. Create a folder called melonjs, where you would normally have your repos</h3>
     <h3>5. Download the <a href="https://github.com/melonjs/boilerplate/archive/master.zip">boilerplate</a> and copy all files, pasting them into your melonjs folder</h3>
	<p>&nbsp;You should not copy the folder structure from the downloaded zip.</p>
     <h3>6. Install melonJS by `cd` to your melonJS directory and call:</h3>
	<b>&nbsp;&nbsp;npm install melonjs</b>
     <h3>7. Install grunt dependencies in the local node_modules folder by `cd` to your melonJS directory and call:</h3>
        <b>&nbsp;&nbsp;npm install</b>
     <h3>8. Install grunt-cli by calling:</h3>
	<b>&nbsp;&nbsp;<mark>npm install -g grunt-cli</mark></b>
</details>
<details>
     <summary>Errors while installing boilerplate</summary>
    <h3>1. Unexplained errors. Try to downgrade your npm version to 5.6.0 by calling</h3>
       <b>&nbsp;&nbsp;npm install -g npm@5.6.0</b>
    <h3>2. saveError ENOENT: no such file or directory, open <your folder structure> package.json</h3>
	    <p>&nbsp; - You are calling “npm install melonjs” on the wrong folder path. </p><p></p>
	    <p>&nbsp; - Ensure that the files from the boilerplate are copied into the top level of your melonjs folder</p>
	    <p>&nbsp;&nbsp;Note: The package.json file should be in the top level folder, and this should be the folder path you call the npm install on</p>
    <h3>3. Fatal error: Unable to find local grunt or getting 'Local Npm module ”xxx“ not found.' </h3>
	    <p>&nbsp;You probably haven't installed the necessary grunt packages locally.</p><p></p>
	    <p>&nbsp;&nbsp;Note: To fix it by calling from the melonjs location:</p>
	    <b>&nbsp;&nbsp;&nbsp;npm install</b>
<h3>3.When running npm install, errors about syscall spawn Git</h3>
	    <p>&nbsp; Check if you have GIT installed by calling</p> 
	    <b>&nbsp;&nbsp;Git --version</b>
	    <p>&nbsp; Check if you have git.exe under Program Files\Git\bin.</p>
	    <p>&nbsp; if not download it from <a href="https://git-scm.com/downloads">here</a>.</p>
	    <p>&nbsp; Right-Click on My Computer.</p>
	    <p>&nbsp; Go to Environment Variables in Advanced System Settings.</p>
	    <p>&nbsp; Look for the path variable, under System Variables, and click edit.</p>
	    <p>&nbsp; Edit Path by adding:</p>
	    <p>&nbsp; C:\Program Files\Git\bin\git.exe and </p>
	    <p>&nbsp; C:\Program Files\Git\cmd</p>
	    <p>&nbsp; Restart PC</p>


</details>



melonJS boilerplate sample project
-------------------------------------------------------------------------------

## To run distribution

To build, be sure you have [node](http://nodejs.org) installed. Clone the project:

    git clone https://github.com/melonjs/boilerplate.git

Then in the cloned directory, simply run:

    npm install

You must also have `grunt-cli` installed globally:

    npm install -g grunt-cli

Running the game:

	grunt serve

And you should have the boilerplate example running on http://localhost:8000

## To run a web server

To run the game in the browser you will need to run local web server. This can be achieved by installing Python and starting Simple HTTP Server.

On Windows you can run the command:

	python -m SimpleHTTPServer 8080

On Mac/Linux you can run the command:

	python -m http.server 8080

## Building Release Versions

To build:

    grunt

This will create a `build` directory containing the files that can be uploaded to a server, or packaged into a mobile app.

----

Building a standalone desktop release:

    grunt dist

Running the desktop release on Windows:

    .\bin\electron.exe

Running the desktop release on macOS:

    open ./bin/Electron.app

Running the desktop release on Linux:

    ./bin/electron

Note that you may have to edit the file `Gruntfile.js` if you need to better dictate the order your files load in. Note how by default the game.js and resources.js are specified in a specific order.
