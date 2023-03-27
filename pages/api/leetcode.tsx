const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrapeLeetCodeProblem(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle0' });

  // Extract the problem title
  const title = await page.$eval(
    'div[data-cy="question-title"]',
    (el) => el.innerText
  );

  // Extract the problem description
  const description = await page.$eval(
    'div[data-cy="description"]',
    (el) => el.innerHTML
  );

  // Extract the problem difficulty
  const difficulty = await page.$eval(
    'span[data-cy="difficulty"]',
    (el) => el.innerText
  );

  // Extract the problem code template
  const code = await page.$eval(
    'div[data-cy="code-area"] > div.ace_scroller > div.ace_content',
    (el) => el.innerText
  );

  // Close the browser
  await browser.close();

  // Create a JSON object with the extracted data
  const problem = { title, description, difficulty, code };

  // Write the JSON object to a local file
  await fs.writeJson(`${title}.json`, problem);

  return problem;
}

export default async function handler(req, res) {
  const { method, query } = req;
  console.log(query);

  if (method === 'GET') {
    const { url } = query;
    const problem = await scrapeLeetCodeProblem(url);
    res.status(200).json(problem);
  } else {
    res.status(400).json({ error: 'Invalid request method' });
  }
}
