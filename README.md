<p align="center">
  <img src="https://freesvg.org/img/1579606964tattoo-machine-silhouette-freesvg.org.png"
    width="180px" height="180px" >
</p>
<h1 align="center">
  TattooMeLet
</h1>
<div align="center">

  <h3>Built With</h3>

  <img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" height="30px"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/>  
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express.js&logoColor=white" height="30px"/>
</div>

<br/>

# Description

TattooMeLet-back is an api for a tattoo studio. You can create an account, see the work gallery, send budgets to the artist, see your budgets, send depositions and more!
</br>

## Features

-   Create an account
-   Get the gallery photos
-   Send Budgets and references
-   Get your personal budgets
-   Send depositions
-   Get users depositions

</br>

## API Reference

#### SignUp

```http
POST /signup
```

#### Request:

| Body              | Type     | Description                    |
| :---------------- | :------- | :----------------------------- |
| `name`            | `string` | **Required**. name             |
| `email`           | `string` | **Required**. valid email      |
| `password`        | `string` | **Required**. password         |
| `confirmPassword` | `string` | **Required**. password again   |

`Password min length: "8"`

#

#### SignIn

```http
POST /signin
```

#### Request:

| Body       | Type     | Description               |
| :--------- | :------- | :------------------------ |
| `email`    | `string` | **Required**. valid email |
| `password` | `string` | **Required**. password    |

</br>

#### Response:

```json
{
    "id": "user.id",
    "name": "user.name",
	"token": "jsonwebtoken"
}
```

<br/>

# Depositions

#### Create a new deposition

```http
POST /deposition
```

#### Request:

####

| Headers         | Type     | Description               |
| :-------------- | :------- | :------------------------ |
| `authorization` | `string` | **Required**. valid token |

<br/>

####

| Body       | Type     | Description                             |
| :--------- | :------- | :-------------------------------------- |
| `stars`    | `number` | **Required**. 0-100   (20 === 1 star)   |
| `text`     | `string` | **Required**. deposition message        |
| `username` | `string` | **Required**. user name                 |

</br>

#

#### Delete a deposition by identifier

```http
DELETE /deposition/:id
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#

#### Get all users depositions

```http
GET /deposition
```

#### Response:

```json
[
	{
    "id": 15,
    "stars": 100,
    "text": "teste",
    "username": "Leo",
    "createdAt": "2022-08-22T20:21:49.762Z",
    "userId": 1
  },
  {
    "id": 14,
    "stars": 100,
    "text": "adorei o projeto, comentario teste",
    "username": "Leo",
    "createdAt": "2022-08-22T17:29:46.614Z",
    "userId": 1
  }
]
```
</br>

# Gallery

#### Get portfolio

```http
GET /images
```

#### Response:

```json
[
	{
    "id": 40,
    "imageURL": "https://res.cloudinary.com/first-storage/image/upload/v1660653856/portfolio/IMG_9172_uievj6.jpg",
    "type": "Work",
    "createdAt": "2022-08-18T14:46:33.115Z"
  },
  {
    "id": 23,
    "imageURL": "https://res.cloudinary.com/first-storage/image/upload/v1660653859/portfolio/IMG_9196_xkjusq.jpg",
    "type": "Work",
    "createdAt": "2022-08-18T14:46:33.115Z"
  },
]
```

<br>

# Budgets

#### Create a new budget

```http
POST /budget
```

#### Request:

####

| Body         | Type     | Description                             |
| :----------- | :------- | :-------------------------------------- |
| `name`       | `string` | **Required**.                           |
| `email`      | `string` | **Required**. valid email               |
| `number`     | `string` | **Required**. phone number (11)         |
| `description`| `string` | **Required**.                           |
| `size`       | `string` | **Required**.                           |
| `userId`     | `string` | **Required**. optional userId           |

</br>

#

#### Get user budgets

```http
GET /budget/user/:id
```

#### Response:

```json
[
	{
    "id": 3,
    "name": "Leonardo",
    "email": "leo@driven.com",
    "number": "21999626248",
    "description": "tattoo de dragão muito irada",
    "size": "10cm",
    "createdAt": "2022-08-21T16:29:20.144Z",
    "userId": 1
  },
  {
    "id": 4,
    "name": "Leonardo",
    "email": "leo@driven.com",
    "number": "21999626248",
    "description": "tattoo de cobra no ombro",
    "size": "10cm",
    "createdAt": "2022-08-21T16:31:19.797Z",
    "userId": 1
  }
]
```
</br>

#

#### Delete a budget by identifier

```http
DELETE /budget/:id
```

#### Request:

| Params | Type      | Description            |
| :----- | :-------- | :--------------------- |
| `id`   | `integer` | **Required**. valid id |

<br/>

#

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL = postgres://UserName:Password@Hostname:5432/DatabaseName`

`PORT = number #recommended:5000`

`SECRET_KEY = any string`

`JWT_SECRET = "any string`

`CLOUD_NAME = "storage name`

`API_KEY = "storage key`

`API_SECRET = "storage secret`

</br>

## Run Locally

Clone the project

```bash
  git clone https://github.com/leolucasguedes/projeto22-tattoomelet
```

Go to the project directory

```bash
  cd projeto22-tattoomelet/
```

Install dependencies

```bash
  npm install
```

Create database

```bash
  npx prisma migrate reset
```

Start the server

```bash
  npm run start
```

</br>

## Lessons Learned

In this project I learned a lot about how to create a full API server by myself

</br>

## Authors

-   [@leolucasguedes](https://www.github.com/leolucasguedes)

<br/>

#

## Thunder client

- Para testes manuais é possível importar o arquivo **thunder-collection_projeto22-tattoomelet.json**

#

<a  href="mailto:contato.leonardo.lucas0611@gmail.com" target="_blank"><img src="https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg"></a>