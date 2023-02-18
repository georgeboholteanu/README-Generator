// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  &nbsp;
  ## Description
  ${data.description}.
  &nbsp;
  
  ## Table of contents
    ### Installation instructions
      ${data.installation}.
      &nbsp;
    ### Usage
      ${data.usage}.
      &nbsp;
    ### License type
      The application is covered under **${data.license}** license.
      &nbsp;
    ### Contribution guidelines
      ${data.contribution}.
      &nbsp;
    ### Testing instructions
      ${data.test}.
      &nbsp;
    ### Questions
      For any questions or feedback please ping me a message on **[GitHub](https://github.com/${date.github})** or send an email at [](mailto:${date.email}).
      &nbsp;
  
  © 2023 George Boholteanu. All Rights Reserved.
  `;
}

module.exports = generateMarkdown;
