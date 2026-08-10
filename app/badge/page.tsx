export default function BadgePage() {
    return (
      <main>
        <h1>Join Cal Webring</h1>
        <p>
          Copy this snippet into your site, replacing 'YOUR_URL_HERE' with your
          own site's URL:
        </p>
  
        <pre>
          {`<div style="font-family: monospace; font-size: 12px;">
  <a href="https://calwebring.com/prev?current=YOUR_URL_HERE">←</a>
  <a href="https://calwebring.com">
    <img src="https://calwebring.com/badge.png" width="20" />
  </a>
  <a href="https://calwebring.com/next?current=YOUR_URL_HERE">→</a>
</div>`}
        </pre>
  
        <p>
          Then open a pull request adding yourself to <code>members.ts</code>{" "}
          on GitHub.
        </p>
      </main>
    );
  }