

// what is npm?
The Node Package Manager (npm) is a command-line tool used by developers to share and control modules (or packages) of JavaScript code written for use with Node.js.

When starting a new project, npm generates a package.json file. This file lists the package dependencies for your project. Since npm packages are regularly updated, the package.json file allows you to set specific version numbers for each dependency. This ensures that updates to a package don't break your project.

npm saves packages in a folder named nodemodules. These packages can be installed in two ways:


globally in a root nodemodules folder, accessible by all projects.
locally within a project's own node_modules folder, accessible only to that project.


