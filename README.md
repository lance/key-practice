# Key Practice

A simple music practice app that generates a random major key and lets you
reveal its relative minor and major scale. Responsive on mobile and desktop.

## Features

- Twelve major keys, with no consecutive repeats
- Separate reveal/hide buttons for relative minor and major scale
- Answers reset when a new key is selected
- Correct sharp and flat spellings, including E♯ in F♯ major
- Large touch controls and accessible keyboard focus

## Keyboard shortcuts

| Key | Action |
| --- | --- |
| N, Left arrow, Right arrow | Generate another key |
| Space | Generate another key when no button has focus; activate the focused button otherwise |
| M | Reveal or hide the relative minor |
| S | Reveal or hide the major scale |

## Run locally

Open `index.html` in a browser. No build step, dependencies, account, or backend
is required. Optionally serve this folder with any static web server.

## GitHub Pages

The app uses relative asset paths and works under a repository subdirectory.
`.nojekyll` marks it as a plain static site. No GitHub Actions workflow is required.

## Files

- `index.html`: page markup and responsive styles
- `js/app.js`: key data and interactions
- `cs/styles.css`: CSS styling
- `LICENSE`: MIT license

## License

MIT. See [LICENSE](LICENSE).
