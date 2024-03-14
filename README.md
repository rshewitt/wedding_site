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
- Deployment
    - refresh on static web page deployment on aws ( s3, cloudfront, r53 ) 
    - remove all unnecessary code. slim the app down
- Features
    - finish spreadsheet append functionality from form 
    - add simple auth in front of app accepting password
- UI/Style Improvements
    - consider fonts that will match save the dates
    - move Reid & Brittany intro text above our heads
    - change Brittanys headshot
    - fix padding for breakpoint ( desktop ) of brittany and reid intro 
    - convert burger menu style into tailwind 
    - 1968 image don't crop. we need more vertical above us.
    - verify things work on desktop
- Observations/Analysis
    - integrate https://logrocket.com/

