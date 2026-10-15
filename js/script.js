// Array of decimal Unicode emoji codes
const emojiCodes = [
  128512, // Grinning face
  128514, // Face with tears of joy
  128525, // Smiling face with heart-eyes
  128522, // Smiling face
  128077, // Thumbs up
  128293, // Fire
  127881, // Party popper
  128049, // Cat
  128054, // Dog
  127829, // Pizza
  127925, // Musical notes
  128640, // Rocket
  127774, // Sun
  127800, // Cherry blossom
  128150, // Sparkling heart
  129409  // Lion
];

// Find the gallery container
const gallery = document.getElementById('gallery');

if (!gallery) {
  throw new Error('Gallery container not found.');
}

// Display the requested number of emojis
function showEmojis(count = emojiCodes.length) {
  // Clear the existing gallery
  gallery.innerHTML = '';

  // Create a card for each emoji
  for (let index = 0; index < count; index++) {
    const code = emojiCodes[index];

    const card = document.createElement('div');
    card.classList.add('emoji-card');

    const emoji = document.createElement('span');
    emoji.classList.add('emoji');
    emoji.textContent = String.fromCodePoint(code);

    const emojiCode = document.createElement('p');
    emojiCode.classList.add('emoji-code');
    emojiCode.textContent = code;

    card.append(emoji, emojiCode);
    gallery.appendChild(card);
  }
}

// Display all emojis when the page loads
showEmojis();