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

// Episode data
const episodeData = [
  {
    title: "S01E01 - Pilot",
    description: "Join me and my guest as we dive into toxic relationships!",
    pubDate: "2024-11-12T10:00:00Z",
    season: "1",
    episode: "01",
    duration: "17:50",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZpIPJ5ZDpxrgTwqz65uVTCqmK7HTbUVWi5X",
    videoUrl: "",
    releaseTime: new Date("2024-11-12T10:00:00Z")
  },
  {
    title: "S01E02 - Conducting Through Chaos: When Your Relationship Symphony Plays In A Toxic Key",
    description: "Join me and my guest as we dive into toxic relationships!",
    pubDate: "2024-11-19T10:00:00Z",
    season: "1",
    episode: "02",
    duration: "20:59",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZ2GPJ5ZeWv70SqvhVXN67VHAYrOmbzuXYRk",
    videoUrl: "https://u.pcloud.link/publink/show?code=XZfGPJ5ZYHyeKQcuE3bkTJ9yiwXjBYg0b28k",
    releaseTime: new Date("2024-11-19T10:00:00Z")
  },
  {
    title: "S01E02 Sustained!",
    description: "Systemic oppression sneaks up through seemingly harmless words & rules that fuck us. Just look at history: the worst started with acceptable hate that people in power gave a thumbs up to and continues to this day. When folks with influence cosign discrimination, it gives others permission to be dicks. We can't continue to let trash be normal. And yes, it absolutely fucks with your mental health!",
    pubDate: "2024-11-23T10:00:00Z",
    season: "1",
    episode: "02",
    duration: "07:13",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZWGPJ5ZFhxo27bxASy3eVoaQkf4CuDCXdyX",
    videoUrl: "",
    releaseTime: new Date("2024-11-23T10:00:00Z")
  },
  {
    title: "S01E03 - Living in a New Key: Breaking Free from Life's Opus",
    description: "Join Brandon and me on our journey breaking free from how life tells us how we should live our lives! This drive is all over the place! Hope you can follow, and enjoy!",
    pubDate: "2024-11-26T10:00:00Z",
    season: "1",
    episode: "03",
    duration: "01:00:12",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZ1GPJ5Z4KM7UB7gQSfha4lnwyIeq5lS2nyk",
    videoUrl: "https://u.pcloud.link/publink/show?code=XZDGPJ5ZycLWLMe95M8GY5gHnn58hfdQTYbk",
    releaseTime: new Date("2024-11-26T10:00:00Z")
  },
  {
    title: "S01E04 - No episode due to mental health.",
    description: "Due to a lovely week of BS and mental health, I took the week off.",
    pubDate: "2024-12-10T10:00:00Z",
    season: "1",
    episode: "04",
    duration: "00:00",
    audioUrl: "",
    videoUrl: "",
    releaseTime: new Date("2024-12-10T10:00:00Z")
  },
  {
    title: "S01E05 - Appoggiaturas and Fermatas: When Holding On Phucks Your Harmony",
    description: "I discuss prioritizing mental health over capitalistic bullshit.",
    pubDate: "2024-12-10T10:00:00Z",
    season: "1",
    episode: "05",
    duration: "51:05",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZEGPJ5Z2UKOhbg2dkSILVpEYmCVW4df7lA7",
    videoUrl: "https://u.pcloud.link/publink/show?code=XZMGPJ5ZpXU263iGXdJPBGW5S5kHISR6MMt7",
    releaseTime: new Date("2024-12-10T10:00:00Z")
  },
  {
    title: "S01E06 - Involuntary Harmonies: Trauma, The Media, and the Soundtrack of Familiar Chaos",
    description: "Join me as we discuss THE MEDIA and how it can impact your mental health. (No video, but there are graphics!)",
    pubDate: "2024-12-17T10:00:00Z",
    season: "1",
    episode: "06",
    duration: "11:16",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZ3GPJ5Z22ehxmprSSjkbf6tnCWySmYheLJk",
    videoUrl: "https://u.pcloud.link/publink/show?code=XZUGPJ5ZAWtmSaENuwbULXIXRWWy5yRUXgkV",
    releaseTime: new Date("2024-12-17T10:00:00Z")
  },
  {
    title: "S01E07 - Sforzando Survival: When Your Amygdala Conducts the Show",
    description: "Join me as we dicuss 'insane' repetitiveness and reactivity!",
    pubDate: "2025-05-05T10:00:00Z",
    season: "1",
    episode: "07",
    duration: "20:08",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZjEfL5ZIuatj3qAUzJseTAJaG8KV5Qk0XWV",
    videoUrl: "",
    releaseTime: new Date("2025-05-05T10:00:00Z")
  },
  {
    title: "S01E08 - Improvised Healing: Jazz Metaphors for Personal Transformation",
    description: "What's an unexpected 'musical note' in your healing journey? What happens when something unexpected pops up in your life's score? How do you handle it? How do you \"improv\" your way through it? Join me as we discuss unexpected notes (aka: BS) in our everyday lives and how we can improv our way through them!<p><b>EDIT 05/12/2025:</b> this has nothing to do with jazz lol gotta love mental health!",
    pubDate: "2025-05-12T10:00:00Z",
    season: "1",
    episode: "08",
    duration: "41:24",
    audioUrl: "https://u.pcloud.link/publink/show?code=XZX5ob5Zgz8PcPa6ir7m8VBip9hFXmYB34yV",
    videoUrl: "https://u.pcloud.link/publink/show?code=XZL5ob5ZUsXh3wUvqpS7KydshnvWCfMqYbAk",
    releaseTime: new Date("2025-05-12T10:00:00Z")
  }
];

// set to false to turn off individual episodes' images
const showEpisodeImages = false;

function startCountdown(targetTime, countdownElement, downloadButton, episode) {
  function updateCountdown() {
    const now = new Date();
    const timeLeft = targetTime.getTime() - now.getTime();

    if (timeLeft <= 0) {
      console.log("Countdown ended. Showing button.");
      downloadButton.innerText = 'Play Episode';
      downloadButton.disabled = false;
      downloadButton.href = episode.audioUrl; // Use the audio URL from episode data
      downloadButton.target = '_blank';
      downloadButton.rel = 'noopener noreferrer';
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

function displayPodcastEpisodes() {
  const episodesContainer = document.getElementById('episodes-container');
  
  if (!episodesContainer) {
    console.error('Episodes container not found');
    return;
  }

  episodeData.forEach((episode, index) => {
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

    const episodeNumber = episode.episode.padStart(2, '0');
    const episodeImgPath = `/images/S01E${episodeNumber}.jpeg`;

    episodeDiv.innerHTML = `
      ${showEpisodeImages && episodeImgPath ? `<img src="${episodeImgPath}" alt="Episode ${episodeNumber} image" class="episode-image">` : ''}
      <div class="episode-content">
        <h2>${episode.title}</h2>
        <div class="episode-meta">
          <span class="episode-duration">Length: ${episode.duration}</span>
          <div>${new Date(episode.pubDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        <div class="episode-description">${episode.description}</div>
      </div>
    `;

    const mediaButtons = document.createElement('div');
    mediaButtons.className = 'download-links';

    // Create audio button if audio URL exists
    if (episode.audioUrl) {
      const audioButton = document.createElement('a');
      audioButton.href = episode.audioUrl;
      audioButton.target = '_blank';
      audioButton.rel = 'noopener noreferrer';
      audioButton.className = 'download-button';
      audioButton.style.backgroundColor = colors.button;
      audioButton.style.color = '#000000';
      audioButton.style.fontWeight = 'bold';
      audioButton.innerText = 'Play Audio';

      if (new Date() < episode.releaseTime) {
        audioButton.removeAttribute('href');
        startCountdown(episode.releaseTime, null, audioButton, episode);
      } else {
        audioButton.disabled = false;
      }

      mediaButtons.appendChild(audioButton);
    }

    // Create video button if video URL exists
    if (episode.videoUrl) {
      const videoButton = document.createElement('a');
      videoButton.href = episode.videoUrl;
      videoButton.target = '_blank';
      videoButton.rel = 'noopener noreferrer';
      videoButton.className = 'download-button';
      videoButton.style.backgroundColor = colors.button;
      videoButton.style.color = '#000000';
      videoButton.style.fontWeight = 'bold';
      videoButton.innerText = 'Play Video';

      if (new Date() < episode.releaseTime) {
        videoButton.removeAttribute('href');
        startCountdown(episode.releaseTime, null, videoButton, episode);
      } else {
        videoButton.disabled = false;
      }

      mediaButtons.appendChild(videoButton);
    }

    episodeDiv.appendChild(mediaButtons);
    episodesContainer.appendChild(episodeDiv);
  });
}

document.addEventListener('DOMContentLoaded', displayPodcastEpisodes);

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