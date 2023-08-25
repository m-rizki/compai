# compai

## Feature to be implemented

- [x] Environment Setup
- [x] Folder Setup
- [x] Clerk Authentication
- [x] Navbar
- [x] Sidebar
- [x] Search Filter
- [x] Category Filter
- [x] Companion Creation Form
- [x] Companion Creation API
- [x] Companion List
- [x] Chat Header
- [x] Chat UI
- [x] Memory Service
- [x] Chat API
- [ ] Stripe API
- [ ] Stripe UI

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

### initialize prisma & connect to postgresql database

`npm install -D prisma`

`npx prisma init`

### Sign Up & setup ~~planetscale~~ supabase database

nb: must use credit card for using planetscale so i switch to supabase (serverless postgresql database)

`npx prisma generate`
`npx prisma db push`

### Setup Database Library

using prisma to look our database

`npx prisma studio`

add data seed

`node scripts/seed.ts`

## Companion Creation Form

<!-- every we change prisma, run this commands -->
`npx prisma generate`
`npx prisma db push`

### Setup Form

### Setup Cloudinary account

after login i immediately click back to go to dashboard, i don't know the dashboard issue but its error in my account, maybe its connection error

- go to dashboard -> copy cloud name
- add on .env
- install cloudinary package : `npm install next-cloudinary`
- go to cloudinary dashboard -> settings -> upload
- add upload preset -> set signing mode to 'unsigned'
- copy the name of upload preset -> paste to uploadPreset attribute in image-upload.tsx

## Companion Creation API

`npm install axios`

- add create and edit functionality

## Companion List

### Add Component if companions is not available

### Add Component if companions is available

## Chat Header

### Add: Back Button

### Add avatar and some icon

### Add edit and delete functionality

router.refresh() is used for refresh All the server components to newest data

## Chat UI

install ai package from vercel : `npm install ai`

### Add Chat Input UI

### Chat Messages Components

## Memory Service

### install additional packages

`npm i @pinecone-database/pinecone`
`npm i @upstash/redis`
`npm i @upstash/ratelimit`
`npm i langchain`

### connect to service

pinecone vector database:

1. go to [pinecone vector database](https://www.pinecone.io/)
2. Create Account and go to [pinecone console](https://app.pinecone.io/)
3. create index
4. Give it a name : (indexname) -> for .env PINECONE_INDEX="(indexname)"
5. Configure your Index - dimensions : 1536
6. create index
7. go to 'connect' or go to API key on sidebar

upstash redis:

1. go to [upstash redis](https://upstash.com) and sign in / sign up
2. go to console
3. create database
4. fill the name
5. type global
6. primary region
7. read region
8. check tsl(ssl) enabled and Eviction
9. Find REST API section
10. select .env

OpenAI API

1. go to openai platform website
2. sign in / sign up
3. click profile picture -> view api keys
4. create new secret key -> (name)
5. you can see your limit in usage on free tier $0/$50

### Add memory service - memory.ts

## Chat API

install some packages

`npm install replicate`
`npm install openai`
`npm install openai-edge`
`npm install dotenv`

### Rate Limit Implementation

setup replicate api key:

- go to replicate.com
- create account
- click profile - go to api token
- create token - copy token
