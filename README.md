This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). 

I wanted to improve my Next.Js skills and build upon my [previous project](https://github.com/davidlindercodes/nextjs-blog) where I build a bare-barebones bloging site. This site enables you to add blog posts on the back end, and they are displayed in a somewhat-attractive manner on the front end. For this project I wanted to build a more complex blogging site, where users can log in on the front end, publish articles on the front end, and even like other articles (similar functionality to medium). 

As my aim here was to practice my front end Next.Js skills, not my backend skills, so for this app I used the BaaS (back-end as a service) [Firebase](https://firebase.google.com/) to manage all the back end tasks such as database management, authorisation & hosting etc. 

For this project I used NPM packages [Firebase](https://www.npmjs.com/package/firebase) & [React-Firebase-Hooks](https://www.npmjs.com/package/react-firebase-hooks), I chose not use the offical library, [ReactFire](https://www.npmjs.com/package/reactfire), because at the time of makling this project still in experimental status, and relys healivy on react <Suspence> which would add some unnecessary complexity, especially with regards to server side rendering. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
