# jQueryAspectRatioKeeper

Keeps the original proportion (aspect ratio) for any HTML tag like video, iframe, object, div, etc.

Sample: https://codepen.io/frontid/pen/RZVppP

## Install
```bash
npm install jquery-aspect-ratio-keeper --save
// or
yarn add jquery-aspect-ratio-keeper
// or 
bower install jquery-aspect-ratio-keeper
```
## Usage
```javascript
// Keep the original video proportion.
$('video').aspectRatioKeeper()
```

## Options
**wrapperName**: specifies the generated wrapper name. Desaults to '**tag-ark**'
