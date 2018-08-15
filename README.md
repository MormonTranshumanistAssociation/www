## MTA Website

Official website of the Mormon Transhumanist Association

React application built from [react-boilerplate](https://www.reactboilerplate.com/).

### Building

Use node version 10 or later. If using `nvm`, you can switch to 10.6 with
```bash
nvm use 10.6
```

Install [yarn](https://yarnpkg.com/en/docs/install), then from within the project folder: 

```bash
yarn install
yarn build
```

(Other execution options are listed in the "scripts" section of `package.json`.)

### Starting locally

Be sure you are using node version 10 or later. (See above.)

```bash
yarn start
```
This will start a development server at http://localhost:3000

### Deploying

In the project folder, create a `.env` file containing the AWS access key ID and secret access key. These
can be obtained from the "Amazon AWS Deploy credentials" section of the [MTA Technicnal Information](https://docs.google.com/document/d/18V2lpkot-dck6Qvvyst4wJX7zW2wyg8MdyyWgcCuA6s/) 
document.

```bash
# .env file
AWS_ACCESS_KEY_ID=<Replace with AWS Access Key ID>
AWS_SECRET_ACCESS_KEY=<Replace with AWS Secret Access Key>
```

To deploy:
```bash
yarn deploy:prod
```
