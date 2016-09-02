# react-atomic-wrapper
![](http://img.shields.io/badge/license-ISC-green.svg?style=flat-square "")

> React component to make documenting process simpler.

## Usage

Installation:
```
npm install --save react-atomic-wrapper
```

This package will install only one dependency -  [react-element-to-jsx-string](https://github.com/algolia/react-element-to-jsx-string) -  amazing parser to print syntax for your components.

Then in your UI document:
```javascript
const AtomicWrapper = require('../AtomicWrapper');

<AtomicWrapper
    wrapperTitle="Components header"
>
    <YourComponentHere
        with={}
        all={}
        of={}
        properties={}
    />
    ...
</AtomicWrapper>
```

Component has built in styles to set position of elements. But if you want to style it there are provided CSS classes for each element. 

## Purpose

It is brilliant to have a documentation with example usage in projects when there are large amount of components. To confront them, to adjust design details, to share reusable parts for other members and finally **to expose all of the properties**.

## Example
If you are interested in see react-atomic-wrapper in action check the example folder.

You should clone project and install dev dependencies too:

```
npm install
```

And run server in example directory:

```
cd example
webpack-dev-server
```
