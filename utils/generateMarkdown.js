// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License': return '[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)\n';
    case 'Mozilla Public License 2.0': return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-blue.svg)](https://choosealicense.com/licenses/mpl-2.0/)\n';
    case 'Apache License 2.0': return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://choosealicense.com/licenses/apache-2.0/)\n';
    case 'Boost Software License 1.0': return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://choosealicense.com/licenses/bsl-1.0/)\n';
    case 'The Unlicense': return '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](https://choosealicense.com/licenses/unlicense/)\n';
    case 'GNU AGPLv3': return '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://choosealicense.com/licenses/agpl-3.0/)\n';
    case 'GNU GPLv3': return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://choosealicense.com/licenses/gpl-3.0/)\n';
    case 'GNU LGPLv3': return '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://choosealicense.com/licenses/lgpl-3.0/)\n';
    default: return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License': return '[MIT License](https://choosealicense.com/licenses/mit/)';
    case 'Mozilla Public License 2.0': return '[Mozilla Public License 2.0](https://choosealicense.com/licenses/mpl-2.0/)';
    case 'Apache License 2.0': return '[Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)';
    case 'Boost Software License 1.0': return '[Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)';
    case 'The Unlicense': return '[The Unlicense](https://choosealicense.com/licenses/unlicense/)';
    case 'GNU AGPLv3': return '[GNU AGPL v3](https://choosealicense.com/licenses/agpl-3.0/)';
    case 'GNU GPLv3': return '[GNU GPL v3](https://choosealicense.com/licenses/gpl-3.0/)';
    case 'GNU LGPLv3': return '[GNU LGPL v3](https://choosealicense.com/licenses/lgpl-3.0/)';
    default: return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License

    This project is licensed under the ${renderLicenseLink(license)}.

`;
}

function renderLicenseInTableContent(license) {
  if (license) {
    return '* [License](#license)';
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}
## Description

    ${data.description.replaceAll('\n', '\n    ')}


## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
${renderLicenseInTableContent(data.license)}
* [Questions](#questions)


## Installation
    
    ${data.installation.replaceAll('\n', '\n    ')}


## Usage
    
    ${data.usage.replaceAll('\n', '\n    ')}


## Contributing
    
    ${data.contributing.replaceAll('\n', '\n    ')}


## Tests
    
    ${data.tests.replaceAll('\n', '\n    ')}

${renderLicenseSection(data.license)}

## Questions

    You can reach me at [GitHub](https://github.com/${data.username})
    You can also email me: <${data.email}>
`;
}

module.exports = generateMarkdown;