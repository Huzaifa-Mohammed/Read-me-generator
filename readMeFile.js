function generateFile(data) {
    return `
    *${data.title}
    (https://img.shields.io/github/license/${data.github}/${data.repo})
    * Description
    ${data.description}
    
    * Installation
    ${data.installation}
    
    * Usage
    ${data.usage}
    * Contribution
    ${data.contribution}
    * Test
    ** Table of Contents
    * [Usage](#usage)
    * [Installation](#install)
    * [Tests](#tests)
    * [Questions](#questions)
    * [License](#license)
    * [Contribution](#contribution)
    ${data.test}
    * Questions
    * my [GitHub profile](https://github.com/${data.github})
    
    * Reach out: [send an email](mailto:${data.email}). 
   * License
    Copyright (c) [${data.github}](https://github.com/${data.github}). 
    
    
  `;
}

module.exports = generateFile;