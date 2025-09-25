import * as cheerio from 'cheerio';

export function sanitizeAmpHtml(html) {
  if (!html || typeof html !== 'string') {
    console.warn("sanitizeAmpHtml: Received invalid HTML:", html);
    return '';
  }

  console.log("Sanitizing HTML:", html); // Debug log

  const $ = cheerio.load(html, { decodeEntities: false });

  // Remove all JavaScript-related attributes
  $('*').removeAttr('on*'); // Remove onclick, onload, etc.

  // Remove disallowed tags
  const disallowedTags = ['script', 'style', 'form', 'object', 'embed', 'applet', 'input', 'button'];
  disallowedTags.forEach((tag) => $(tag).remove());

  // Since no images, skip img handling, but ensure no img tags remain
  $('img').remove();

  // Handle iframes (if any)
  $('iframe').each((i, el) => {
    const element = $(el);
    const src = element.attr('src');
    const width = element.attr('width') || '640';
    const height = element.attr('height') || '360';

    if (src && src.startsWith('https')) {
      element.replaceWith(
        `<amp-iframe src="${src}" width="${width}" height="${height}" layout="responsive" sandbox="allow-scripts allow-same-origin"></amp-iframe>`
      );
    } else {
      element.remove();
    }
  });

  // Remove inline styles and other attributes
  $('*').removeAttr('style').removeAttr('onclick').removeAttr('onload').removeAttr('onerror');

  // Validate links
  $('a').each((i, el) => {
    const element = $(el);
    const href = element.attr('href');
    if (href && !href.startsWith('http')) {
      element.removeAttr('href');
    }
  });

  const sanitized = $.html();
  console.log("Sanitized HTML:", sanitized); // Debug log
  return sanitized;
}