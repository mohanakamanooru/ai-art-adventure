# AI Art Adventure 🎨

A colourful, static GitHub Pages art gallery for Careers Week (Year 5 and Year 6).

## Publish with GitHub Pages

1. Create a **public** GitHub repository called `ai-art-adventure`.
2. Upload everything in this folder into the **root of the repository** (not inside another `ai-art-adventure` folder).
3. Commit the files to the `main` branch.
4. Go to **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, `main`, `/ (root)`, then **Save**.
5. Wait for deployment. Your site should be at `https://YOUR-USERNAME.github.io/ai-art-adventure/`.

## Add more artwork

1. Place teacher-approved image files into `images/` (e.g. `robot-pancakes.png`).
2. Add an object to the array in `artworks.json`, separating entries with commas:

```json
{
  "title": "Robot Pancake Chef",
  "image": "images/robot-pancakes.png",
  "prompt": "A friendly robot flipping pancakes in a spaceship, cartoon style.",
  "category": "Funny Robots"
}
```

3. Commit the changes. GitHub Pages will update the gallery automatically.

## Child safety

- Obtain school approval before publishing artwork on a public site.
- Do **not** publish children's names, photographs, school details, or any identifying information.
- Review both images and prompts before publishing.
- If you prefer not to share a public gallery, ask your school about an access-controlled alternative. GitHub Pages websites in public repositories are publicly viewable.

No frameworks, tracking scripts, or paid services are required.
