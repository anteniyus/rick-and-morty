## Table of contents

- [The Rick and Morty](#the-rick-and-morty)
- [Building](#building)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)

# The Rick and Morty

This project uses **The Rick and Morty API** for fetching data.

It has a main page that shows characters. This page has pagination, and it is
implemented by Redux.
Also, there is a profile page for each character that is accessible by clicking
on each character's box to see more details about the specific character.

Also, it is available to change page number from URL:

> [host]/character/**{PageNumber}**

## Building

Building The Rick and Morty requires the following tools:

- Git (obviously)
- Node.js

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

All scripts that are available in create-react-app.

> You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
>
> To learn React, check out the [React documentation](https://reactjs.org/).

## Deployment

For deployment, you can use nginx as web server.

- First create the production build with this command:

  > npm run build

- Then download the [Nginx](https://nginx.org/en/download.html) and place extracted
  folder somewhere like: _C:/nginx_.

- After that, we must change the configuration file for serving the static files
  generated in step one.
  For this, Open the nginx.conf file located in: extractedPath/conf
  like: _C:/nginx/conf_.

Now assuming our application build folder is the following path:

_D:/projects/the-rick-and-morty/build_

- In the conf file, change server part like below:

```text
server {

    listen       5050;  #or any other ports
    server_name  localhost;

    location / {
        root   "D:/projects/the-rick-and-morty/build";    #the application build folder
        try_files  $uri /index.html;
    }
}
```

Done. Start the Nginx.
