<p align="center">
  <img src="./misc/logo.gif" />
</p>

<h1 align="center">React Rich Content</h1>

Reach Rich Content is a front-end content management system (CMS) built with React, providing a easier interface for managing website pages, posts, and media. It is designed to be flexible and easily extensible, making it suitable for a variety of use cases.

You may pair this with a backeng CMS solution for easiest and best experience.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
   - [Data List](#data-list)
   - [Config Object](#config-object)
3. [Demo](#demo)
4. [Built With](#built-with)
5. [Licence](#licence)

## Installation:

```bash
yarn add react-rich-content
```

## Usage:

```ts
import { RichContent } from "react-rich-content";
...
return <RichContent
          data={[...]}
          backgroundColor="black"
          textColor="white"
        />
```

### Data List

Rich Content works by getting a list of Rich Chunk JS objects. Each Rich Chunk holds content such as text, image, or video, and information about how they are presented. Rich Content then reads the list and generates a jsx element for each item in the list.

[Click Here](./src/models/RichChunkModel.ts) to see the complete Rich Chunk model.

#### For an in-depth demonstration of Rich Content features, please visit this link:

### <a style="color: #fff; background-color: #8e44bb; padding: 8px 8px 11px 8px; border-radius: 5px; margin-left: 12px" href="https://vextra.vercel.app/portfolio/rich-content-handbook" target="_blank">🌐 vextra.vercel.app/portfolio/rich-content-handbook</a>

### Config Object

_!this part is not implemented in the code yet!_

Todo

## Demo

This library is used in the following project:

- <a href="https://vextra.vercel.app/portfolio" target="_blank">vextra.vercel.app/portfolio</a>

## Built With

- [React](https://reactjs.org/)
- [Emotion](https://emotion.sh/)
- [React Player](https://www.npmjs.com/package/react-player)
- [React Markdown](https://www.npmjs.com/package/react-markdown)

## Licence

[MIT License](./LICENCE) © Soheil Sisakht

<br/>

---

<br/>
<p align="center">
  <img src="./misc/under-construction.jpeg" />
</p>
