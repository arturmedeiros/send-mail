
# ✉️ Send Mail with Node.JS
[![NodeJS](https://img.shields.io/badge/Node.JS-000?style=for-the-badge&logo=Node.js)](https://nodejs.org/en/)
[![NodeMailer](https://img.shields.io/badge/-📬%20Node%20%20Mailer-000?style=for-the-badge)](https://github.com/nodemailer/nodemailer/)


## About
Send emails using Node.js and the NodeMailer package. Just follow the steps below to run the project locally.


## ✅ Requirements
To use the project, you need to have some packages and starter packages on your computer.
See the standard requirements by Node.JS.

- GIT
- Node.JS
- NPM / YARN

## ⬇️ Installation

To run the project locally, clone the GitHub project to your computer:

```bash
git clone git@github.com/arturmedeiros/send-mail.git
```


## 🚀 Get started

### 1) Project dependencies installation

Using NPM:

```shell
npm i
```

Using YARN:

```shell
yarn install
```

### 2) Configure .ENV file

Rename ".env.example" file to ".env" and configure your mail SMTP configurations.

```shell
APP_ENV=local
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_PORT=465
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=ssl
MAIL_FROM_ADDRESS=
MAIL_FROM_NAME=
SERVER_PORT=3000
```

### 3) Run project

Default Mode

```shell
node server.js
```

Nodemon Hot-reload

```shell
nodemon server.js
```

## 🧑🏻‍💻 Author

- [@arturmedeiros](https://www.github.com/arturmedeiros)

##📖 References

- [Igor Oliveira - Programador BR](https://www.youtube.com/watch?v=60JCFKrihUU)

- [Node Mailer](https://nodemailer.com/about/)


## ⚖️ License
MIT License

Copyright (c) 2022 @ARTURMEDEIROS - ARJOS.COM.BR

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.