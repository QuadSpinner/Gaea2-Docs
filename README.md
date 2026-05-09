# Gaea2-Docs

This repository contains the source, templates, generated staging output, and maintenance scripts for the Gaea 2 documentation.

It covers the main user guides, node reference pages, interface documentation, integration guides, video pages, release history, and developer-facing material that make up the Gaea docs experience.

## What Lives Here

- `source/` is the primary authoring area for documentation pages, metadata, and source assets.
- `template/` contains the shared site templates and front-end assets used to render the docs.
- `staging/` contains generated output used for previewing and validating the site.
- `scripts/` contains helper utilities for cleanup, syncing, and search/index maintenance.

## Documentation Scope

This repo includes documentation for:

- getting started and core terrain workflows
- node reference pages and node category indexes
- build, export, baking, and troubleshooting guidance
- bridges, engines, and app integration guides
- user interface reference
- official and community video pages
- release history and changelog pages
- developer documentation such as automation, macros, scripting, and SDK topics

## Authoring Notes

Documentation is written in [CommonMark](https://commonmark.org/help/) compatible Markdown with front matter.

When editing docs:

- prefer working in `source/` instead of editing generated files in `staging/`
- keep copy specific, verified, and helpful to real Gaea workflows
- treat node reference pages as editorial work rather than bulk filler content
- use draft markers only when a section genuinely still needs review

## Machine-Readable Output

The generated site also exposes machine-readable documentation outputs, including section-level `llms.txt` files and a combined `llms-full.txt` output in `staging/`. These are useful for AI tooling, search workflows, and downstream documentation consumers.

## License

See [LICENSE.txt](LICENSE.txt).

## Credits

Special thanks to [Ty Xanders](https://github.com/ty-xanders) for his prolific contributions to the Documentation and the Community.
