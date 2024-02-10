---
title: 'Coding APIs'
date: '2023-03-23;
---

# Table of Contents

1. [[#Types of Methods|Types of Methods]]
1. [[#Setup for coding APIs|Setup for coding APIs]]
	1. [[#Setup for coding APIs#Basic Setup|Basic Setup]]
	1. [[#Setup for coding APIs#Setup for Prisma and MySQL|Setup for Prisma and MySQL]]
		1. [[#Setup for Prisma and MySQL#Creating tables with Prisma & migrating it to MySQL|Creating tables with Prisma & migrating it to MySQL]]
	1. [[#Setup for coding APIs#Continuing coding the API in TS and Next.js|Continuing coding the API in TS and Next.js]]
	1. [[#Setup for coding APIs#Helpful information|Helpful information]]
		1. [[#Helpful information#Install Zod and setting it up|Install Zod and setting it up]]
			1. [[#Install Zod and setting it up#Pre-written, simple API|Pre-written, simple API]]

# Coding APIs with TypeScript and Next.js
In this documentation we will use Next.js, TypeScript, Prisma and MySQL to setup a database and code APIs
## Types of Methods
- GET: Getting data
- POST: Creating data
- PUT: Updating data
- DELETE: Deleting data
## Setup for coding APIs
### Basic Setup
1. Create a folder called `api` in the app folder of the Next.js project
2. Create a folder for the corresponding scope (Example: users)
3. Create a `route.tsx` file in the folder.

Following imports are needed:
```ts
import {NextRequest, NextResponse} from 'next/server';
```

### Setup for Prisma and MySQL
1. Open the console and install Prisma `npm i prisma`
2. After the installation is complete, type `npx prisma init` into the console
3. Open the `.env` file and change the connection string to following
	`DATABASE_URL="mysql://root:copy+paste@localhost:3306/<db_name>"`
	Make sure to replace <db_name> with the name of the database you want to create.
4. Locate the `prisma` folder and create a .ts file named `client.ts` in the folder and paste following code into it
```ts
import { PrismaClient } from '@prisma/client'  
  
const prismaClientSingleton = () => {  
    return new PrismaClient()  
}  
  
declare global {  
    var prisma: undefined | ReturnType<typeof prismaClientSingleton>  
}  
  
const prisma = globalThis.prisma ?? prismaClientSingleton()  
  
export default prisma  
  
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
```
5. Open the `schema.prisma` file and change the provider in the `datasource db` object to `"mysql"`.

#### Creating tables with Prisma & migrating it to MySQL
1. Tables can be created with the `model` keyword. Here is an example of a table made in the `schema.prisma` file:
```mysql
model User {  
  id           Int      @id @default(autoincrement())  
  email        String   @unique  
  name         String  
  followers    Int      @default(0)  
  isActive     Boolean  @default(true)  
  registeredAt DateTime @default(now())  
}
```
2. To improve readability, type `npx prisma format` to format the tables you've created
3. After all the steps, type `npx prisma migrate dev`. To migrate the tables to the MySQL database.
4. It asks you to give the migration. Give it an informative name. Usually the first ever migration is named `Initial`. Names for future migrations can be named `add_registered-at` for example.
5. Open DataGrip and connect to a new data source like this:

7. Another window will open and fill out following stuff to open your database:
![[Pasted image 20231213065249.png]]
8. Test the connection by clicking on `Test Connection`

### Continuing coding the API in TS and Next.js
Open the `route.tsx` you've recently created and import the client
```ts
import {NextRequest, NextResponse} from 'next/server';
import prisma from '../../../../prisma/client';
```

Let's start with the GET method for the API.
The GET method is responsible for fetching data from the data source. Here is an example of the GET function using TS:
```ts
export async function GET(request: NextRequest) {  
    const users = await prisma.user.findMany()  
    return NextResponse.json(users);  
}
```
More information about asynchronous functions can be read here:
[[Async & Await]]

### Helpful information
For errors in the process of the API methods, Zod helps you to validate requests and responses. In case of an error, Zod returns helpful information, so you can find a solution to the problem.

#### Install Zod and setting it up
1. Open the terminal and type `npm i zod` and wait for it to install
2. After the installation create a file called `schema.ts` in the api's scope folder.
3. Here is an example of what the code can look like. In this case it's designed for a products API:
```ts
import {z} from 'zod'  
  
const schema = z.object({  
    name: z.string().min(3),  
    price: z.number().min(1).max(100)  
});  
  
export default schema;
```

The file then can be imported into the `route.tsx` file and can be used to validate requests.
Here is an example for the POST method in the API's code:
```ts
export async function POST(request: NextRequest) {  
    const body = await request.json();  
    const validation = schema.safeParse(body);  
    // Validate  
    // If invalid, return 400 error    
    if (!validation.success)  
        return NextResponse.json(validation.error.errors, {status: 400})  
        // Create user  
    return NextResponse.json({id: 1, name: body.name}, {status: 201});  
}
```

The function fetches the data and stores it in the variable called `body`. Then another variable `validation` is created and the `safeParse()` function is being used. All this preperation is needed to successfully work with the Zod library.

Now we can check if the validation was either unsuccessful or successful. If it was not successful, it will return the error with the corresponding status. Else it will return the requested data.

##### Pre-written, simple API
This is a simple pre-written API with hardcoded objects, which can be fetched. Note that it's just a template, that can be followed and it needs some work, using the tutorial above (Zod, Prisma, MySQL). It has 4 methods, which are usually the most commonly used methods in a REST API.
```ts
import {NextRequest, NextResponse} from "next/server";  
import schema from './schema'  
  
interface Props {  
    params: {  
        id: number,  
        name: string,  
        price: number  
    }  
}  
  
export function GET(request: NextRequest, {params}: Props) {  
    return NextResponse.json(  
        [{id: 1, name: 'Milk', price: 2.5}, {id: 2, name: 'Bread', price: 3.5}]  
    );  
}  
  
export async function POST(request: NextRequest, {params}: Props) {  
    const body = await request.json();  
    const validation = schema.safeParse(body);  
  
    if (!validation.success)  
        return NextResponse.json(validation.error.errors, {status: 400});  
    return NextResponse.json({id: 88, name: body.name, price: body.price}, {status: 201});  
}  
  
export async function DELETE(request: NextRequest, {params}: Props) {  
    const body = await request.json();  
    const validation = schema.safeParse(body);  
  
    if (!validation.success)  
        return NextResponse.json(validation.error.errors, {status: 404});  
    return NextResponse.json('Successfully deleted user!', {status: 200});  
}  
  
export async function PUT(request: NextRequest, {params}: Props) {  
    const body = await request.json();  
    const validation = schema.safeParse(body);  
  
    if (!validation.success)  
        return NextResponse.json(validation.error.errors, {status: 400});  
    return NextResponse.json('Successfully updated user!', {status: 200});  
}
```
