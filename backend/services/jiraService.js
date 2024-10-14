// services/jiraService.js
const JiraClient = require('jira-client');

// Initialize Jira client
const jira = new JiraClient({
  protocol: 'https',
  host: 'https://capstockstockapp.atlassian.net/',
  username: 'Cherandwhite@gmail.com',
  password: 'ATATT3xFfGF0yYx-bw8cjuF94vDbIhmfTnVk7Btj-EwaLcoxLHyuoX12IBF1fbcFVPbzq5ooxjkRyVKGU1A_wQNtjgxqJKqFtJNVz7u6-junPoRuGAw88CL9EX2mK8O9-lMg9zO2LBU_bPodf7yJv7yzPaMtkMf1Lm9IvmtzQtUtd-RBjfd2gD0=13B391F8',  
  apiVersion: '2',
  strictSSL: true
});

// Function to create a new issue in Jira
const createJiraIssue = async (summary, description) => {
  try {
    const issue = await jira.addNewIssue({
      fields: {
        project: { key: 'PROJ' },
        summary: summary,
        description: description,
        issuetype: { name: 'Task' }  // Use the appropriate issue type
      }
    });
    return issue;
  } catch (error) {
    console.error('Error creating Jira issue:', error);
  }
};

module.exports = { createJiraIssue };
