// Gallery data is stored in artworks.json so new artwork can be added in GitHub's UI.
const grid = document.getElementById('art-grid');
const previewArtworks = [
  { title: 'Moonlight Skateboard Superstar', image: 'images/moon-cat.png', prompt: 'A fluffy orange cat skateboarding on the moon, cartoon style.' },
  ...Array.from({ length: 5 }, (_, i) => ({ title: `Artwork ${i + 2}`, image: '', prompt: 'Your amazing prompt will appear here!' }))
];

function renderGallery(artworks) {
  grid.replaceChildren();
  for (let i = 0; i < 6; i++) {
    const art = artworks[i] || { title: `Artwork ${i + 1}`, image: '', prompt: 'Prompt coming soon!' };
    const card = document.createElement('article');
    card.className = 'art-card';
    if (typeof art.image === 'string' && art.image.trim()) {
      const img = document.createElement('img');
      img.src = art.image;
      img.alt = art.title || `Artwork ${i + 1}`;
      img.loading = i === 0 ? 'eager' : 'lazy';
      img.onerror = () => { img.replaceWith(createPlaceholder(i)); };
      card.append(img);
    } else {
      card.append(createPlaceholder(i));
    }
    const body = document.createElement('div');
    body.className = 'card-body';
    const label = document.createElement('span');
    label.className = 'label';
    label.textContent = `CREATION ${i + 1} OF 6`;
    const title = document.createElement('h3');
    title.textContent = art.title || `Artwork ${i + 1}`;
    const promptLabel = document.createElement('div');
    promptLabel.className = 'prompt-label';
    promptLabel.textContent = '✏️ THE PROMPT';
    const prompt = document.createElement('p');
    prompt.textContent = art.prompt || 'Prompt coming soon!';
    body.append(label, title, promptLabel, prompt);
    card.append(body);
    grid.append(card);
  }
}

function createPlaceholder(i) {
  const placeholder = document.createElement('div');
  placeholder.className = 'image-placeholder';
  placeholder.setAttribute('role', 'img');
  placeholder.setAttribute('aria-label', `Artwork ${i + 1} image coming soon`);
  const symbol = document.createElement('span');
  symbol.className = 'placeholder-icon';
  symbol.textContent = ['🐱', '🎨', '🚀', '🌈', '🪄', '✨'][i];
  const message = document.createElement('strong');
  message.textContent = 'Your artwork goes here!';
  placeholder.append(symbol, message);
  return placeholder;
}

// file:// previews cannot reliably fetch JSON in browsers, so display a built-in
// sample gallery. On GitHub Pages or a local server, artworks.json is the source.
renderGallery(previewArtworks);
if (window.location.protocol !== 'file:') {
  fetch('artworks.json', { cache: 'no-store' })
    .then(response => { if (!response.ok) throw new Error('Could not load artworks.json'); return response.json(); })
    .then(data => { if (!Array.isArray(data)) throw new Error('Invalid gallery data'); renderGallery(data); })
    .catch(error => console.warn('Displaying gallery preview; could not load artworks.json:', error));
}
