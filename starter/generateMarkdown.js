function generateMarkdown(response) {
  var content = `# ${response.title}'

  ## Table of Contents
  * [Repository Description](#Repository-Description)
  * [Installation Instructions](#Install)
  * [Usage Information](#Usage)
  *[References](#Ref)
  * [Repositiory End-Goal Criterea](#Criterea)
  * [Future Project](#Future-Project)
  ${response.TableofContents}
  
  # Repository Description
  ###### [Back to Table of Contents](#Table-of-Contents)
  ${response.description}

  ## Installation
  #### To install necessary dependencies, run the following command:
  npm install and inquirer @6.5.0
  ${response.Installation}
  ## Usage
  
  #### You can use this applicaiton by running node index.js
  ${response.Usage}
  
  ## License
  
  ####This project is licensed under the MIT license.
  ${response.License}
      
  ## Contributing Here Is A Header
  
  ####Fork and pull request.
  ${response.Contributing}
  
  ## Tests
  
  ####To run tests, run the following command:npm test
  ${response.Test}
  
  ## Questions
  
  ####If you have any questions about the repo, open an issue or contact me directly at priyasatish1626@gmail.com. You can find more of my work athttps://github.com/priyadarsini-gunasekaran/
  
  ${response.Question}
return content; 
};


module.exports = generateMarkdown;