// Color definitions for individual episodes
const episodeColors = [
  { background: '#ffffff', border: '#000000', button: '#f7d61d' }, // Episode 8   Yellow
  { background: '#ffffff', border: '#000000', button: '#f45c27' }, // Episode 7   Orange
  { background: '#ffffff', border: '#000000', button: '#cc1b6a' }, // Episode 6   Red
  { background: '#ffffff', border: '#000000', button: '#6c44c8' }, // Episode 5   Violet
  { background: '#ffffff', border: '#000000', button: '#1179e5' }, // Episode 4   Blue
  { background: '#ffffff', border: '#000000', button: '#5bc62e' }, // Episode 3   Green
  { background: '#ffffff', border: '#000000', button: '#f7d61d' }, // Episode 2b  Yellow
  { background: '#ffffff', border: '#000000', button: '#f45c27' }, // Episode 2   Orange
  { background: '#ffffff', border: '#000000', button: '#cc1b6a' }, // Episode 1   Red
];

function startCountdown(targetTime, countdownElement, downloadButton, item) {
  function updateCountdown() {
    const now = new Date();
    const timeLeft = targetTime.getTime() - now.getTime();

    if (timeLeft <= 0) {
      console.log("Countdown ended. Showing button.");
      downloadButton.innerText = 'Play Episode';
      downloadButton.disabled = false;
      downloadButton.href = item.getElementsByTagNameNS('*', 'enclosure')[0]?.getAttribute('url');
      clearInterval(timer);
    } else {
      const hours = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      downloadButton.innerText = `${hours}h ${minutes}m ${seconds}s`;
      downloadButton.disabled = true;
    }
  }

  updateCountdown();
  const timer = setInterval(updateCountdown, 1000);
}

async function fetchAndDisplayPodcast() {
  try {
    const response = await fetch('rss.xml');
    const text = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, 'text/xml');
    const items = xmlDoc.getElementsByTagName('item');
    const episodesContainer = document.getElementById('episodes-container');

    Array.from(items).forEach((item, index) => {
      const itunesNS = 'http://www.itunes.com/dtds/podcast-1.0.dtd';
      const title = item.getElementsByTagNameNS('*', 'title')[0]?.textContent;
      const description = item.getElementsByTagNameNS('*', 'description')[0]?.textContent.trim();
      const pubDateStr = item.getElementsByTagNameNS('*', 'pubDate')[0]?.textContent;
      const releaseTime = new Date(pubDateStr);
      const timezoneOffset = releaseTime.getTimezoneOffset() * 60 * 1000;
      const adjustedReleaseTime = new Date(releaseTime.getTime() + timezoneOffset);

      const episodeDiv = document.createElement('div');
      episodeDiv.className = 'episode';

      const colorIndex = index < episodeColors.length ? index : index % episodeColors.length;
      const colors = episodeColors[colorIndex];

      if (colors.background.startsWith('url')) {
        episodeDiv.style.backgroundImage = colors.background;
        episodeDiv.style.backgroundSize = 'cover';
        episodeDiv.style.backgroundRepeat = 'no-repeat';
        episodeDiv.style.backgroundPosition = 'center';
      }
      episodeDiv.style.borderColor = colors.border;

      episodeDiv.innerHTML = `
        <div class="episode-content">
          <h2>${title}</h2>
          <div class="episode-meta">
            ${item.getElementsByTagNameNS(itunesNS, 'season')[0]?.textContent ? `Season ${item.getElementsByTagNameNS(itunesNS, 'season')[0]?.textContent}` : ''}
            ${item.getElementsByTagNameNS(itunesNS, 'episode')[0]?.textContent ? `Episode ${item.getElementsByTagNameNS(itunesNS, 'episode')[0]?.textContent}` : ''}
            <span class="episode-duration">${item.getElementsByTagNameNS('*', 'duration')[0]?.textContent}</span>
            <div>${new Date(pubDateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
          </div>
          <div class="episode-description">${description}</div>
        </div>
      `;

      const enclosures = item.getElementsByTagNameNS('*', 'enclosure');
      const mediaButtons = document.createElement('div');
      mediaButtons.className = 'download-links';

      Array.from(enclosures).forEach(enclosure => {
        const type = enclosure.getAttribute('type');
        const url = enclosure.getAttribute('url');

        if (url) {
          const button = document.createElement('a');
          button.href = url;
          button.className = 'download-button';
          button.style.backgroundColor = colors.button;
          button.style.color = '#000000';
          button.style.fontWeight = 'bold';

          if (type.includes('video')) {
            button.innerText = 'Play Video';
          } else if (type.includes('audio')) {
            button.innerText = 'Play Audio';
          }

          if (new Date() < releaseTime) {
            button.removeAttribute('href');
            startCountdown(releaseTime, null, button, item);
          } else {
            button.disabled = false;
          }

          mediaButtons.appendChild(button);
        }
      });

      episodeDiv.appendChild(mediaButtons);
      episodesContainer.appendChild(episodeDiv);
    });
  } catch (error) {
    console.error('Error fetching podcast feed:', error);
    const fallback = document.getElementById('episodes-container');
    fallback.innerHTML = `
      <div class="episode standard-box">
        <h2>Podcast Feed Unavailable</h2>
        <p>Sorry, we couldn't load episodes right now. Please try again later.</p>
        <button type="button" onclick="location.reload()">Try Again</button>
      </div>
    `;
  }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPodcast);

document.querySelectorAll('.nav-button').forEach(button => {
  button.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.nav-button').forEach(btn => btn.classList.remove('nav-active'));
    this.classList.add('nav-active');

    const season = this.dataset.season;
    document.querySelectorAll('.season-container').forEach(container => {
      container.classList.remove('active');
    });
    document.getElementById(`season-${season}`).classList.add('active');
  });
});