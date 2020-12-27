import remark from 'remark';
import highlight from 'remark-highlight.js';
import html from 'remark-html';

export default async function toHtml(markdown: string): Promise<string> {
  const result = await remark().use(html).use(highlight).process(markdown);
  return result.toString();
}
