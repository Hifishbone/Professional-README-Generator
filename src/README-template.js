module.exports = templateData => {
    // destructure page data by section
    const { prosrjects, about, ...header } = templateData;
  
    return `# ${projectTitle}

    ${licenseBadge}
    
    ## Description
    
        ${description}
    
    
    ## Table of Contents
    
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [Questions](#questions)
    
    
    ## Installation
        
        ${installation}
    
    
    ## Usage
        
        ${usage}
    
    
    ## Contributing
        
        ${contributing}
    
    
    ## Tests
        
        ${tests}
    
    
    ## License
        This project is licensed under the ${license} License
    
    
    ## Questions
        You can find my GitHub at ${username}
        You can also email me at ${email}
    
    `;
};