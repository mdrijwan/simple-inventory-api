# Simple-Inventory-API

Implementing a Node API with TypeScript in Serverless framework to be deployed in AWS

## Getting Started

Run the command below to install NPM dependencies

```
npm install
```

This project is built on stand alone TypeScript so no compilation needed. So you can just start the server and follow the instructions in the console. The request body will validated by the `schema.json`.

```
npm run start
```

### Let's get started!

**Base URL:**
`localhost:3000/dev/api`

> Example Request:

    {
        "string": "hello rijwan, welcome onboard"
    }

**_Methods_**

- POST/reverse

> Example Response:
>
> - Body: "draobno emoclew ,nawjir olleh"
> - Success: Status OK (200)
> - Failure: Status Bad Request (400)

- POST/vowel

> Example Response:
>
> - Body: 10
> - Success - Status OK (200)
> - Failure - Status Bad Request (400)

- POST/nonrepeat

> Example Response:
>
> - Body: "h"
> - Success - Status OK (200)
> - Failure - Status Bad Request (400)
