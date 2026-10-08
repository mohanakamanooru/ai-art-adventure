# AI Art Adventure — Careers Week Gallery

A colourful, responsive static website containing exactly six artwork cards: **Moonlight Skateboard Superstar** and five slots for children's creative work.

## Quick preview

Double-click `index.html` to see all six gallery cards even without a local server. **Note:** A direct `file://` preview uses the built-in six-card example data. To see edits to `artworks.json` locally, run a local server in this folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000/ in your browser.

## Add a child's artwork (no coding tools needed)

1. Save the school-approved AI artwork as `artwork-2.png`, `artwork-3.png`, etc.
2. Upload the file into `images/` using GitHub's **Add file → Upload files** control (or put the file there locally).
3. Open `artworks.json` in GitHub and click the pencil **Edit** icon.
4. For that artwork, replace its `title`, `image`, and `prompt` fields. For example:

```json
{
  "title": "Rainbow Rocket",
  "image": "images/artwork-2.png",
  "prompt": "A rainbow rocket flying through a galaxy of jellybeans, cartoon style."
}
```

5. **Commit changes**. GitHub Pages will update automatically after deployment. Repeat for artwork 3–6.

Keep the quotation marks and commas intact, and use the exact file name including extension. The image area is square and crops images to fit.

## Publish with GitHub Pages

Create a public GitHub repository, upload these files to the root of the `main` branch, then open **Settings → Pages → Build and deployment**, choose **Deploy from a branch**, **main**, **/(root)**, and save.

The URL should be `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` after publishing completes.

## Privacy

Get school approval for every image and prompt before publishing. Do not include children's names, faces, school details, or other identifying information in this public website.
