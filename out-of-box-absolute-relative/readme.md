# CSS before, after, content, absolute, relative
The CSS ```content``` property allows us to include the attr() in property value data-title.

### ```Without``` the .xs-title::before Property not possible


The two ```<div>``` elements above end up with different css in the result (because xs-title is parent & relative):

```css
.xs-title{
  color: #81256f;
    font-size: 3.25em;
    line-height: 1;
    margin-bottom: 15px;
    position: relative;
    z-index: 1;
}

.xs-title::before {
    position: absolute;
    content: attr(data-title);
    top: -45px;
    left: 0;
    font-size: 1.962em;
    text-transform: capitalize;
    pointer-events: none;
    z-index: -1;
    color: #ececec;
}
.watermark-bg.background-1 {
    right: 0;
    bottom: 0;
    width: 387px;
}
.watermark-bg {
    position: absolute;
    height: 100%;
    background-repeat: no-repeat;
    background-position: center bottom;
    background-size: contain;
}
.watermark-bg.background-2 {
    left: 0;
    top: 50%;
    height: 500px;
    width: 150px;
    background-position: center center;
    -webkit-transform: translateY(0);
    transform: translateY(0);
}
```
