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
    - remove all unnecessary code. slim the app down. look up remix deployment/build process.
    - understand remix config files
    - deploy the website
- Features
    - finish spreadsheet append functionality from form 
    - add simple auth in front of app accepting password
- Text Content
    - our story 
    - do we still need "additional festivities to be announced?" 
    - bridal party "where we met" sections
    - lodging 
    - things to do 
    - registry modal content
- UI/Style Improvements
    - get photos for bridal party
    - consider fonts that will match save the dates
    - move Reid & Brittany intro text above our heads
    - change Brittanys headshot
    - fix padding for breakpoint ( desktop ) of brittany and reid intro 
    - convert burger menu style into tailwind 
    - 1968 image don't crop. we need more vertical above us.
    - verify things work on desktop
        - fix burger expanded menu
        - center align checkboxes in form
- Image optimization
    - lazy/loading 
    - optimize images using a build utility ( i.e. vite image compression )
- Observations/Analysis
    - integrate https://logrocket.com/

## Notes
- this is a static web page with a form submission component. after looking into remix idk if I even get anything from it. remix loaders/actions help process and populate renders with data. this occurs on the remix server. i don't need this. what i need is to lazy load my carousel. i understand having a scrollto navigation may defeat the purpose but that depends on people going to the site and knowing where the expensive thing is which can occur if they're familiar with the site already. if they've visited it before and are aware of where the carousel is maybe the client device will natively cache the images on visit making the load time quicker? 
