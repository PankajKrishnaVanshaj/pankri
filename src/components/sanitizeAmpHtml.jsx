import * as cheerio from 'cheerio';

export function sanitizeAmpHtml(html) {
  if (!html) return '';

  const $ = cheerio.load(html, { decodeEntities: false });

  // 1. Replace <img> with <amp-img>
  $('img').each((i, el) => {
    const element = $(el);
    const src = element.attr('src');
    const alt = element.attr('alt') || 'Image';
    let width = element.attr('width') || '1200'; // Fallback width
    let height = element.attr('height') || '675'; // Fallback height (16:9 ratio)

    // Ensure HTTPS for src
    if (src && !src.startsWith('http')) {
      element.remove();
      return;
    }

    element.replaceWith(
      `<amp-img src="${src}" alt="${alt}" width="${width}" height="${height}" layout="responsive"></amp-img>`
    );
  });

  // 2. Replace <iframe> with <amp-iframe>
  $('iframe').each((i, el) => {
    const element = $(el);
    const src = element.attr('src');
    let width = element.attr('width') || '640';
    let height = element.attr('height') || '360';

    if (src && src.startsWith('https')) {
      element.replaceWith(
        `<amp-iframe src="${src}" width="${width}" height="${height}" layout="responsive" sandbox="allow-scripts allow-same-origin"></amp-iframe>`
      );
    } else {
      element.remove();
    }
  });

  // 3. Remove forbidden tags and attributes
  const disallowedTags = ['script', 'style', 'form', 'object', 'embed', 'applet'];
  disallowedTags.forEach((tag) => $(tag).remove());
  $('*').removeAttr('style').removeAttr('onclick').removeAttr('onload').removeAttr('onerror');

  // 4. Ensure valid AMP HTML
  $('a').each((i, el) => {
    const element = $(el);
    const href = element.attr('href');
    if (href && !href.startsWith('http')) {
      element.removeAttr('href'); // Remove invalid links
    }
  });

  return $.html();
}