This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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


## Using dynamic template data
In this stage basic concept of dynamic template data has been implemented:
Template data using json format are represented in files `api/[merchantCode].json`
Using Next.js syntax `[template]/[merchantCode]` we can get merchantCode path variable and take it in 
function getServerSideProps that next js calls on server side during the request and pass the data to props of the 
component, currently this data is fetched from static js, but in future they can be fetched from database or CDN.
Also this approach can be used for fetching theme from json, or styles data can be stored in the same file.

!!! There are some doubts if this approach can be used with subdomains that we prefer to use, 
let say for lima airport we use subdomain https://lim.dev.carbon.click/ and in theory we can setup our routing 
to pass the traffic from https://lim.dev.carbon.click/ to https://enterprise.dev.carbon.click/LIM, but I'm not sure if
we will not lose '/LIM' path during this redirection, because in the client side it must be displayed as https://lim.dev.carbon.click/

## Pos and const using Next.js

## DEPLOYMENT
### Deploying to aws ec2
