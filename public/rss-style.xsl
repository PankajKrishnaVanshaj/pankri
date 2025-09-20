<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>Pankri RSS Feed</title>
        <style>
          body { font-family: system-ui, sans-serif; margin: 2rem; background: #f9fafb; color: #111; }
          h1 { color: #ea580c; font-size: 1.75rem; }
          .post { margin-bottom: 2rem; padding-bottom: 1rem; border-bottom: 1px solid #ddd; }
          .date { font-size: 0.9rem; color: #6b7280; margin-top: 0.25rem; }
          a { text-decoration: none; color: #2563eb; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1><xsl:value-of select="/rss/channel/title"/></h1>
        <p><xsl:value-of select="/rss/channel/description"/></p>

        <xsl:for-each select="/rss/channel/item">
          <div class="post">
            <h2>
              <a href="{link}" target="_blank">
                <xsl:value-of select="title"/>
              </a>
            </h2>
            <div class="date"><xsl:value-of select="pubDate"/></div>
            <p><xsl:value-of select="description"/></p>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
