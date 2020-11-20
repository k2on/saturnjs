<p align="center"><img height="150px" src="https://assets.website-files.com/5d278504a01d9f6c28b749d3/5d279b313e4dac48981d7b00_Group.png" alt="Logo" /><p>

<p align="center">
  <strong>Saturn.js</strong><br />
  <sub>The Unofficial Saturn API Wrapper</sub>
</p>

<p align="center">
  [ <a href="#installation">Installation 💾</a> | <a href="#usage">Usage 🤓</a> | <a href="https://www.npmjs.com/package/saturn.js">NPM 📦</a> | <a href="https://github.com/k2on/saturnjs">Github 🕸</a> ]
</p>

# Installation

> **_IMPORTANT_** The package name "saturnjs" is already regisitered but but is not really in use so I am trying to get the owner to transfer the name to me.

```sh
yarn add saturnjs
```

# Usage

```typescript
import { Client } from 'saturnjs';

const client = new Client('MY_SECRET_TOKEN');

client.loadData().then(() => {
    console.log(client.user.name); // John Doe
});
```

## Authentication

**The Problem**

As for now, there is no way to programmatically authenticate because Saturn uses Google and Mirosoft SSO. If there is a way, then please let me know.

**The Solution**

The best solution I have come up with is to use the value of the `SATURN_TOKEN` cookie. As for what I know, does not expire (fingers crossed).

<hr>

## How to get the token

<img height="400px" src="https://i.imgur.com/MzYFAqC.png">

After logging on, click the Padlock next to the URL. THene click on Cookies.

<img height="400px" src="https://i.imgur.com/vfAoKJE.png">

Click the drop down menue for "saturn.live", then open all the cookies

<img height="400px" src="https://i.imgur.com/hXsTKE1.png">

Click on the `SATURN_TOKEN` cookie, then copy the content of the token.

<hr>

Full docs can be found [here](https://k2on.github.io/saturnjs/)
