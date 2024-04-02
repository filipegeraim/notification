
# Notification Test

## 📝 Scope
We have to create a notification system that has the ability to receive a message and depending on
the category and subscribers, notify these users in the channels they are registered.

## 🔧 Stack Used

- TypeScript
- Express
- Prisma
- Jest

## 🏃 How to Run the App

### Installing the app

> Please note that the app was created using the following:
>
> NodeJS >= 18+
>
> To avoid compatibility issues, make sure the version of the tools you are using are up-to-date.

To install the dependencies of the app, you can run `npm install` or `yarn`.

After installing the dependencies, create the `.env` file, run `npm run db:migrate` and `npm run db:seed` to run the migrations on your local database.

### Running the app locally

To run the app locally, you need to execute the following commands:

- `npm run db:migrate`, if you have changed the databases' schema
- `npm run dev`

### Running the tests

To run all tests, you need to execute `npm test`

### New features and Improvements

    • Create endpoint to list of user
    • Create endpoint to create an user
    • Create endpoint to udpate an user
    • Create endpoint to get all logs for a specific notification (filter logs by notification)

Test

    • Create unit test for all controllers
    • Create integration test for all endpoint with dev database