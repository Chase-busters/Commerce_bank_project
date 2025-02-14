# Commerce Bank Project

## Developing

Install [bun](https://bun.sh) (a faster alternative to `npm` and `yarn`):

Unix based systems:

```bash
curl -fsSL https://bun.sh/install | bash
```

Windows:

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

Then, install the dependencies:

```bash
bun install
```

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Local Secrets

In order to run the application locally, you will need to use some set of secrets not in the repo. Contact a maintainer for the secrets and add them to a `.env.local` file in the root of the project.

Required secrets:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
CLERK_SECRET_KEY
NEXT_PUBLIC_CLERK_SIGN_IN_URL
```

## Documentation Links

To learn more about our dependencies, take a look at the following resources:

- [TypeScript Cheat Sheets](https://www.typescriptlang.org/cheatsheets/)
- [React.js Documentation](https://react.dev/learn) - learn about React.js features and API.
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Tailwind CSS __V3__](https://v3.tailwindcss.com/) - learn about Tailwind CSS (CSS framework).
- [Clerk (Authentication)](https://clerk.com/docs/quickstart/nextjs) - learn about Clerk (Authentication).

## Authentication

This project uses [Clerk](https://clerk.com/docs/quickstart/nextjs) for authentication. Clerk is a similar platform to other authentication services like Auth0 except for that it was built for first-class server-side authentication rather than client-side SPA flows.
