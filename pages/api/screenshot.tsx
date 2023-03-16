import type { NextApiRequest, NextApiResponse } from 'next';
const puppeteer = require('puppeteer');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query;

  if (!url) {
    return res.status(400).json({ error: 'URL parameter is required' });
  }

  let browser;

  try {
    let domain = new URL(url);
    browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url, { waitUntil: 'networkidle0' });
    const fileName = `public/screenshots/${domain.hostname}.png`;
    const screenshot = await page.screenshot({
      type: 'png',
      path: fileName,
    });
    res.setHeader('Content-Type', 'image/png');
    res.setHeader(
      'Content-Disposition',
      `attachment; filename=${domain.hostname}.png`
    );
    res.status(200).send(screenshot);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
