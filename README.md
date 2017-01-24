#Lunar Talkr
The only way to chat.

## [See it in action!](https://lunar-talkr.herokuapp.com/)

## Installation

```
npm install
```

In order to run testing or development, we will need PG setup to create the
corresponding databases.

```
createdb lunar_dev; createdb lunar_test
```

We are using Knex for this particular app. It is required to run migrations and seeding.

```
npm install -g knex
knex migrate:latest
knex seed:run
```

## Testing

To run tests, we simple call for npm. This will run our testing suite.
```
npm test
```

## [Wireframe](https://wireframe.cc/TBmVSI)

## Routes

```
GET: /posts
POST: /posts
```
