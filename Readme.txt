Thanks for downloading this template!

Template Name: SnapFolio
Template URL: https://bootstrapmade.com/snapfolio-bootstrap-portfolio-template/
Author: BootstrapMade.com
License: https://bootstrapmade.com/license/

---

## Secure Feedback Submission with Netlify Functions

1. Create a directory: `netlify/functions/`
2. Add a file: `submit-feedback.js` with the following content:

```
const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, rating, feedback } = JSON.parse(event.body);

  // Store your token in an environment variable for security!
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const REPO = 'YOUR_GITHUB_USERNAME/YOUR_REPO_NAME';

  const issueTitle = `Feedback from ${name} (Rating: ${rating} stars)`;
  const issueBody = feedback;

  const response = await fetch(`https://api.github.com/repos/${REPO}/issues`, {
    method: 'POST',
    headers: {
      'Authorization': `token ${GITHUB_TOKEN}`,
      'Accept': 'application/vnd.github.v3+json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: issueTitle,
      body: issueBody
    })
  });

  if (response.ok) {
    return { statusCode: 200, body: 'Feedback submitted!' };
  } else {
    return { statusCode: 500, body: 'Error submitting feedback.' };
  }
};
```

3. In your Netlify dashboard, set the environment variable `GITHUB_TOKEN` to your GitHub personal access token.
4. Update your feedback form JavaScript to POST to `/.netlify/functions/submit-feedback` as shown in the main instructions.
