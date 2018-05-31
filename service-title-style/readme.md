# CSS before, after, content
The CSS ```content``` property allows us to include the attr() in an element's data-title.

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
    z-index: -1;e
    color: #ececec;
}
```
