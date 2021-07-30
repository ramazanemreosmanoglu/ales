# ALES

## Instructions

Firstly, install required npm packages:

```bash
cd ales/
npm install
```

Then set Django api server up:

```bash
cd ales_backend/
python manage.py runserver
```

This project isn't using virtual environments, so make sure that Django and Python 3.9 installed on your computer.

Now, let's start NextJS server:

```bash
cd .. # Go to root directory of project
npm run dev
```

API Url's will moved to environment file in the future, but for now you should make sure that NextJS using right url to access django api.

Now, go to 127.0.0.1:3000 and it should be working.

## To-do

- Move API urls to environment file.
- Design front-end again with figma.
- Secure API.
- Add static page generation stuff for more performance.
