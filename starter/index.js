const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("../starter/utils/generateMarkdown");

// array of questions for user
const questions = [  {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },{
    
        type: "input",
        message: "What is your GitHub user name?",
        name: "userName"
    },{
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },{
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },{
        type: "input",
        message: "Please help me with the License badge link.",
        name: "Badge"
    },{    
        type: "input",
        message: "Please describe the repository.",
        name: "description"
    },{
        type: "input",
        message: "Please describe the table of content.",
        name: "table of content"
    },{
        type: "input",
        message: "Please describe the installation.",
        name: "installation"
    },{
        type: "input",
        message: "Please describe the usage.",
        name: "usage"
    },{
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    },{
        type: "input",
        message: "Please state any test require.",
        name: "test"
    },{
        type: "input",
        message: "Please ask if you have any Question.",
        name: "Question"
    }
    


];





// function to write README file
inquirer.prompt(questions).then(function(response) {
    console.log(response);
    
     var content = generateMarkdown(response);
     console.log(content);
      fs.writeFile("../ReadMe.md", content, function(err){
          if (err) throw err
          console.log("success");
      });
 } ); 
// function to initialize program
function init() {

}

// function call to initialize program
init();
