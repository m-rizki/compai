# compai

## Feature to be implemented

[x] Environment Setup
[x] Folder Setup
[x] Clerk Authentication
[x] Navbar
[x] Sidebar
[x] Search Filter
[ ] Category Filter
[ ] Companion Creation Form
[ ] Companion Creation API
[ ] Companion List
[ ] Chat Header
[ ] Chat UI
[ ] Memory Service
[ ] Chat API
[ ] Stripe API
[ ] Stripe UI

## Environment Setup

```bash
npx create-next-app@latest ./
Need to install the following packages:
  create-next-app@13.4.19
Ok to proceed? (y)
√ Would you like to use TypeScript? ... Yes
√ Would you like to use ESLint? ... Yes
√ Would you like to use Tailwind CSS? ... Yes
√ Would you like to use `src/` directory? ... No
√ Would you like to use App Router? (recommended) ... Yes
√ Would you like to customize the default import alias? ... Yes

Setup shadcn ui

$ npx shadcn-ui@latest init
Need to install the following packages:
  shadcn-ui@0.3.0
Ok to proceed? (y)
√ Would you like to use TypeScript (recommended)? ... yes
√ Which style would you like to use? » Default
√ Which color would you like to use as base color? » Neutral
√ Where is your global CSS file? ... app/globals.css
√ Would you like to use CSS variables for colors? ... yes
√ Where is your tailwind.config.js located? ... tailwind.config.js
√ Configure the import alias for components: ... @/components
√ Configure the import alias for utils: ... @/lib/utils
√ Are you using React Server Components? ... yes
√ Write configuration to components.json. Proceed? ... yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed.
```

## src Setup

app/page.tsx
app/globals.css

### How to create routes

### Routes Group

[next routes group](https://nextjs.org/docs/app/building-your-application/routing/route-groups)

In the app directory, nested folders are normally mapped to URL paths. However, you can mark a folder as a Route Group to prevent the folder from being included in the route's URL path.

This allows you to **organize** your route segments (as organizational folder) and project files into logical groups without affecting the URL path structure.

A route group can be created by wrapping a folder's name in parenthesis: (folderName)

app/(root)/(routes)/page.tsx -> as root page -> {base_url}/login
app/(auth)/(routes)/login/page.tsx -> as login page -> {base_url}
we can remove the /app.page.tsx

(root) and (routes) doesn't affected the url because **parenthesis** -> route group

## Clerk Authentication

create / sign in clerk account

install @clerk/nextjs

mount clerk provider

error
'React' refers to a UMD global, but the current file is a module. Consider adding an import instead.

solved by reload window

## Navbar

### Add Premium button component

shadcn button component

`npx shadcn-ui@latest add button`

### Add Dark Mode theme

`npm install next-themes@latest`

## Sidebar

### Add sidebar component

### Add sheet component - sidebar mobile

`npx shadcn-ui@latest add sheet`

## Search Filter

## Add query-string package

`npm install query-string`

## Add useDebounce Hook

## Category Filter

### initialize prisma & connect to mysql database

`npm install -D prisma`

`npx prisma init`

### Sign Up & setup ~~planetscale~~ neon database

nb: must use credit card for using planetscale so i switch to neon (serverless postgree database)

`npx prisma generate`
`npx prisma db push`

### Setup Database Library

using prisma to look our database

`npx prisma studio`

add data seed

`node scripts/seed.ts`
