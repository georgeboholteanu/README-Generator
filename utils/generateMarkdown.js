// function to return a string of words into a string with dash inbetween words
const dashString = (string) => {
  if (string.split(" ").length > 1) {
    return string.split(" ").reduce((acc, cv) => acc + "-" + cv, "").slice(1).toLowerCase()
  } else if (string.split(" ").length === 1) {
    return string.toLowerCase()
  } else {
    return ""
  }
}

// function to generate markdown for README
const generateMarkdown = (data) => {

  return `
# ${data.title}

[![Awesome](https://awesome.re/badge.svg)](https://github.com/georgeboholteanu)
![rating](https://img.shields.io/badge/rating-★★★★☆-brightgreen)

## Table of contents

- [Description](#description)
- [Installation instructions](#installation-instructions)
- [Usage](#usage)
- [License type](#license-type)
- [Contribution guidelines](#contribution-guidelines)
- [Testing instructions](#testing-instructions)
- [Questions](#questions)

## Description

${data.description}

## Installation instructions

${data.installation}

&nbsp;

## Usage

${data.usage}

&nbsp;

## License type

The application is covered under **${(data.license).toString()}** license.

&nbsp;

## Contribution guidelines

${data.contribution}

&nbsp;

## Testing instructions

${data.shortInfo}
&nbsp;

## Description

${data.description}

&nbsp;

## Table of contents

- [${data.title}](#${dashString(data.title)})
  - [Description](#description)
  - [Table of contents](#table-of-contents)
    - [**Installation instructions**](#installation-instructions)
    - [**Usage**](#usage)
    - [**License type**](#license-type)
    - [**Contribution guidelines**](#contribution-guidelines)
    - [**Testing instructions**](#testing-instructions)
    - [**Questions**](#questions)

&nbsp;

### **Installation instructions**

${data.installation}

&nbsp;

### **Usage**

${data.usage}

&nbsp;

### **License type**

The application is covered under **${(data.license).toString()}** license.

&nbsp;

### **Contribution guidelines**

${data.contribution}

&nbsp;

### **Testing instructions**

${data.test}

&nbsp;

### **Questions**

For any questions or feedback please ping me a message on **[Github](https://github.com/${data.github})** or send an email at <mailto:${data.email}>.

&nbsp;

---
© 2023 George Boholteanu. All Rights Reserved.
  `;
}

module.exports = generateMarkdown;
