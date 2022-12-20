## Prerequisite

- NodeJS installed in local machine
- [Updated .env file](Refer to #Update configuration)

## How to Run Locally

### Install dependencies

- npm install

<!-- update configuration -->

### Update configuration

- Create .env file in the root folder
- Add Credentials and Keys for Twilio, Email and Mongo DB
- Refer to .env.example to get the required fields
- These credentials are private and application may not work as expected if not provided correctly

### Run Server

- npm run dev

## Available Endpoints

###

- http://localhost:{PORT}/register This endpoint expects JSON with data as below and it'll send OTP to provided EMAIL and MOBILE

{
"email":"YOUR EMAIL",
"password":"NEW PASSWORD",
"phone_number":YOUR 10 digt MOBILE NUMBER
}

- http://localhost:{PORT}/verify This endpoint expects JSON with data as below and it'll verify if OTP is correct or not

{
"email":"YOUR EMAIL",
"otp":"4ysv"
}

- http://localhost:{PORT}/user This endpoint expects JSON with data as below and it'll return DB record for respective Email address, if exists

{
"email":"YOUR EMAIL",
}
