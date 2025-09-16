# Portfolio API Node

This is an NodeJS API built with ExpressJS and TypeScript. 

### Vercel

The API is running on:

[![Vercel](https://img.shields.io/badge/Vercel-%23000000.svg?logo=vercel&logoColor=white)](https://portfolio-api-node.vercel.app/) ← click to open the application

### Swagger

The API documentation is provided by SwaggerJS and can be accessed at `/api-docs`.

The healthcheck endpoint is available at `/api/healthcheck` and returns a JSON response with a simple message indicating whether the API is running or not.

### Deploy

Either deploy by simply using Vercel runners using:

```zsh
yarn dev
```

See [package.json](https://github.com/AlexandreSJ/portfolio-api-node/blob/main/package.json#L27) for other scripts you can use. 

Note: `git push` will automatically do it if you configure Vercel on another repository, or have your own jobs running on GitHub/GitLab. 