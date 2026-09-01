<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9" exclude-result-prefixes="sm">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>

  <xsl:template name="page-title">
    <xsl:param name="loc"/>
    <xsl:choose>
      <xsl:when test="contains($loc, '/politika-privatnosti')">Politika privatnosti</xsl:when>
      <xsl:when test="contains($loc, '/uslovi-koriscenja')">Uslovi korišćenja</xsl:when>
      <xsl:when test="contains($loc, '/tehnicki-pregled')">Tehnički pregled</xsl:when>
      <xsl:when test="contains($loc, '/o-nama')">O nama</xsl:when>
      <xsl:when test="contains($loc, '/usluge')">Usluge</xsl:when>
      <xsl:when test="contains($loc, '/galerija')">Galerija</xsl:when>
      <xsl:when test="contains($loc, '/kontakt')">Kontakt</xsl:when>
      <xsl:otherwise>Početna</xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="/">
    <html lang="cnr">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Mapa sajta - D.A.J.M.I.</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@600;700&amp;family=Barlow:wght@400;500&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            --navy: #0f2038;
            --navy-accent: #1d4e89;
            --cream: #f4f3ef;
          }
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body {
            background: var(--cream);
            color: var(--navy);
            font-family: Barlow, Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
          }
          header {
            background: var(--navy);
            color: #fff;
            padding: 48px 22px 40px;
          }
          .kicker {
            font-family: Archivo, Helvetica, Arial, sans-serif;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.22em;
            text-transform: uppercase;
            color: rgba(255,255,255,0.78);
          }
          h1 {
            margin-top: 16px;
            max-width: 760px;
            font-family: Archivo, Helvetica, Arial, sans-serif;
            font-size: 38px;
            font-weight: 700;
            letter-spacing: -0.025em;
            line-height: 1.08;
          }
          .lead {
            margin-top: 20px;
            max-width: 520px;
            font-size: 16px;
            line-height: 1.7;
            color: rgba(255,255,255,0.78);
          }
          main { padding: 56px 22px 80px; }
          ol { list-style: none; max-width: 760px; }
          li { border-top: 1px solid rgba(15,32,56,0.12); }
          a.row {
            display: grid;
            grid-template-columns: 48px minmax(0,1fr);
            gap: 16px;
            align-items: baseline;
            padding: 22px 0;
            color: inherit;
            text-decoration: none;
          }
          a.row:hover .name { color: var(--navy-accent); }
          .num {
            font-family: Archivo, Helvetica, Arial, sans-serif;
            font-size: 12px;
            font-weight: 600;
            letter-spacing: 0.14em;
            color: rgba(15,32,56,0.38);
          }
          .name {
            font-family: Archivo, Helvetica, Arial, sans-serif;
            font-size: 22px;
            font-weight: 700;
            letter-spacing: -0.03em;
            line-height: 1.15;
          }
          .path {
            display: block;
            margin-top: 8px;
            font-size: 14px;
            color: rgba(15,32,56,0.48);
          }
          .home {
            display: inline-block;
            margin-top: 36px;
            background: var(--navy);
            color: #fff;
            padding: 15px 32px;
            font-family: Archivo, Helvetica, Arial, sans-serif;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.04em;
            text-decoration: none;
          }
          .home:hover { background: var(--navy-accent); }
          @media (min-width: 821px) {
            header, main { padding-left: 40px; padding-right: 40px; }
            header { padding-top: 64px; padding-bottom: 56px; }
            h1 { font-size: 48px; }
            .name { font-size: 26px; }
          }
          @media (min-width: 1181px) {
            header, main { padding-left: 72px; padding-right: 72px; }
          }
        </style>
      </head>
      <body>
        <header>
          <p class="kicker">D.A.J.M.I.</p>
          <h1>Mapa sajta.</h1>
          <p class="lead">Stranice koje Google čita da nađe sajt. Možete ih otvoriti i vi.</p>
        </header>
        <main>
          <ol>
            <xsl:for-each select="sm:urlset/sm:url">
              <li>
                <a class="row" href="{sm:loc}">
                  <span class="num">
                    <xsl:if test="position() &lt; 10">0</xsl:if>
                    <xsl:value-of select="position()"/>
                  </span>
                  <span>
                    <span class="name">
                      <xsl:call-template name="page-title">
                        <xsl:with-param name="loc" select="sm:loc"/>
                      </xsl:call-template>
                    </span>
                    <span class="path">
                      <xsl:value-of select="sm:loc"/>
                    </span>
                  </span>
                </a>
              </li>
            </xsl:for-each>
          </ol>
          <a class="home" href="/">Početna</a>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
