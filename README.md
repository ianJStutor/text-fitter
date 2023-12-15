# Text Fitter

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

## Description

Sometimes you want text to fit exactly inside a box with specific width and height measurements, and you need to know what font size will best do the job. This is that tool!

Built with vanilla JavaScript, my favorite flavor!

## Author

> [Ian Marshall](https://ianjstutor.github.io/ian-marshall/)

## Live Site

> [https://ianjstutor.github.io/text-fitter/](https://ianjstutor.github.io/text-fitter/)

## Usage

Include <code>text-fitter.js</code> in your project. Import the JS into your main JavaScript file and call <code>fitText(element)</code>, where <code>element</code> is an HTML element containing text you want to constrain to the width and height of the element.

### HTML

```html
<head>
    <style>
        h1 {
            width: 100px;
            height: 50px;
            padding: 5px;
        }
    </style>
    <script type="module" src="main.js"></script>
</head>
<body>
    <h1>Does this text make me look big?</h1>
</body>
```

### JavaScript

```js
//main.js
import { fitText } from "./text-fitter.js";
const element = document.querySelector("h1");
fitText(element);
```

## Documentation

### Module Export

```js
export { fitText };
```

### Public Method

```js
function fitText(elementWithText) {}
```

The <code>elementWithText</code> is an HTML element containing text. Its <code>textContent</code> property will be read, as well as its width, height, and padding. <code>fitText</code> will then find the best font size for that text to completely fit within the available size without overflow. That <code>font-size</code> will be set as inline CSS directly on the <code>elementWithText</code>.
