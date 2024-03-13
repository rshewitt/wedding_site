# amifauzi.com

![amifauzi.com-open](https://socialify.git.ci/fauzialz/amifauzi.com-open/image?font=Inter&forks=1&language=1&owner=1&pattern=Circuit%20Board&pulls=1&stargazers=1&theme=Light)

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" /> <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" /> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" /> <img src="https://img.shields.io/badge/Google%20Sheets-34A853?style=for-the-badge&logo=google-sheets&logoColor=white" />

I built this website for my personal wedding website [amifauzi.com](https://www.amifauzi.com/?to=Rekan+Developer).
Available features:

- Welcome modal connected to Google Sheet
- Hero section with a responsive background picture
- Bride and Groom section
- Countdown until marriage date section
- Agendas section
- Google Map section
- Pre-wedding gallery section
- Message section connected to Google Sheet, submit button guarded by Google Sign In
- Digital Envelope section
- Background music Player

## Development

This project use [Remix](https://remix.run/docs). To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

## TODO
- integrate https://logrocket.com/
- finalize intro image and gallery
- backtrack comment submission to feed to google sheet NOT email

- add simple auth in front of app accepting password
- add lodging information below the location section
- add a things-to-do in new orleans section below the lodging section
- add hamburger menu on top-right. list of sections ( e.g. location, agenda, gallery, etc...) for quick navigation
- consider fonts that will match save the dates
- move Reid & Brittany intro text above our heads
- change Brittanys headshot
- fix padding for breakpoint ( desktop ) of brittany and reid intro 
- make sure hamburger menu displays on top of carousel 
- hamburger isn't displaying over address of venue
- hamburger nav isn't displaying over "Wedding Venue" text
    - many items aren't interactible
- hamburger is displaying below the image carousel 
- convert burger menu style into tailwind 
- scroll via element reference not by pixel values from top 
- create burger menu items off loop

- remove all unnecessary code. slim the app down
- update meta in head ( still has stuff from upstream dev ) 
    - og.description, site_name, url, etc...

- 1968 image don't crop. we need more vertical above us.

