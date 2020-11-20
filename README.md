<p align="center"><img height="150px" src="https://assets.website-files.com/5d278504a01d9f6c28b749d3/5d279b313e4dac48981d7b00_Group.png" alt="Logo" /><p>

<p align="center">
  <strong>Saturn.js</strong><br />
  <sub>The Unofficial Saturn API Wrapper</sub>
</p>

<p align="center">
  [ <a href="#installation">Installation 💾</a> | <a href="#usage">Usage 🤓</a> | <a href="https://www.npmjs.com/package/saturn.js">NPM 📦</a> | <a href="https://github.com/k2on/saturnjs">Github 🕸</a> ]
</p>

# Installation

```sh
yarn add saturn.js
```

# Usage

## Authentication

**The Problem**

As for now, there is no way to programmatically authenticate because Saturn uses Google and Mirosoft SSO. If there is a way, then please let me know.

**The Solution**

The best solution I have come up with is to use the value of the `SATURN_TOKEN` cookie. As for what I know, does not expire (fingers crossed).

Full docs can be found [here](https://k2on.github.io/saturnjs/)
