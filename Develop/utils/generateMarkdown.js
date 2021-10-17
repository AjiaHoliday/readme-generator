// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const {userInfo} = require('os');
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  };
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  return `[Learn More about ${license}](https://choosealicense.com/licenses/${license})`
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  };
  return `
  ## License
  
  ${renderLicenseBadge(license)}
  ${renderLicenseLink(license)}`
}

// function to generate markdown for README
function generateMarkdown(userResponses, userInfo) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  *[In]

`;
}

module.exports = generateMarkdown;
