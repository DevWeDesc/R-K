FROM node:20 AS base

FROM base AS dependencie
 
WORKDIR /usr/src/api

COPY package.json package-lock.json ./

RUN npm i -f

FROM base AS build

WORKDIR /usr/src/api

COPY . .

COPY --from=dependencie /usr/src/api/node_modules ./node_modules

RUN npm run build

FROM node:20 as deploy

WORKDIR /usr/src/api

RUN npm i prisma

COPY --from=build /usr/src/api/dist ./dist
COPY --from=build /usr/src/api/node_modules ./node_modules
COPY --from=build /usr/src/api/package.json ./package.json
COPY --from=build /usr/src/api/prisma ./prisma
COPY --from=build /usr/src/api/src ./src

ENV DATABASE_URL="postgresql://admin:admin@db:5432/mydb?schema=R&K"
ENV SECRET=askjdkas21873561872v787812t3121267vsdrasd121276fe612r37612r6712r867
ENV ACCOUNTSIDWHATS="AC83f368607fe3851cfb6b8cba512e56da"
ENV AUTHTOKENWHATS="2762ca1167444f9898c8f121ea1d650b"
ENV MAILSERVICE="Hotmail"
ENV MAILADDRESS="testesmpcomvini@hotmail.com"
ENV MAILPASS="Vv1n1$23"

RUN npx prisma generate

EXPOSE 3335

CMD [ "npm", "run", "dev" ]