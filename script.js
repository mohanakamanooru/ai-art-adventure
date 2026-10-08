// Add artwork entries to artworks.json. Only publish teacher-approved artwork.
const grid = document.getElementById('art-grid');
fetch('artworks.json')
  .then(response => { if (!response.ok) throw new Error('Could not load artwork'); return response.json(); })
  .then(artworks => {
    artworks.forEach(art => {
      const card = document.createElement('article'); card.className = 'art-card';
      const img = document.createElement('img'); img.src = art.image; img.alt = art.title; img.loading = 'lazy';
      const body = document.createElement('div'); body.className = 'card-body';
      const label = document.createElement('span'); label.className = 'label'; label.textContent = art.category || 'AI Art';
      const title = document.createElement('h3'); title.textContent = art.title;
      const p = document.createElement('p'); p.textContent = 'Prompt: “' + art.prompt + '”';
      body.append(label,title,p); card.append(img,body); grid.append(card);
    });
    if (!artworks.length) grid.textContent = 'Our gallery is coming soon!';
  })
  .catch(() => { grid.textContent = 'Gallery is getting ready. Please try again soon.'; });
