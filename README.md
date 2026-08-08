# Cal Webring

A webring connecting personal websites of UC Berkeley students, alumni, and faculty.

*Inspired by [waterloo's cs webring](https://cs.uwatering.com).*

## What's a webring?

Before search engines were good, people found new sites by following a "ring" of hand-picked links. Each site pointed to the next and previous one in the ring, so you could click through a whole community of pages. Cal Webring brings that back for Berkeley's personal web.

## How it works

- `/next?current=YOUR_URL` — redirects to the next site in the ring
- `/prev?current=YOUR_URL` — redirects to the previous site in the ring
- `/random` — redirects to a random member site
- `/badge` — the embeddable widget instructions for your own site

## Join the ring! :D

See [CONTRIBUTING.md](./CONTRIBUTING.md).

## Tech

Built with Next.js. Member list lives in `members.ts` — no database, just a file and pull requests. 