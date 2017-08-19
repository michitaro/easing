# easing
Simple easing functions for TypeScript
* [Working Demo](https://michitaro.github.io/easing/)

## Install

```sh
npm instasll --save @hscmap/easing
```

## Example

```typescript
import * as easing from "@hscmap/easing"


window.addEventListener('load', e => {
    const fs = [
        easing.linear,
        easing.fastStart2, easing.fastStart4,
        easing.slowStart2, easing.slowStart4,
        easing.slowStartStop2,
        easing.slowStartStop4,
    ]

    for (const f of fs) {
        const box = document.createElement('div')
        box.className = 'box'
        const title = document.createElement('h2')
        title.innerHTML = f.name
        const canvas = document.createElement('canvas')
        drawFunction(canvas, f)
        box.appendChild(title)
        box.appendChild(canvas)
        document.body.appendChild(box)
    }
})


function drawFunction(canvas: HTMLCanvasElement, f: (x: number) => number) {
    function canvasCoord(x: number, y: number) {
        return [canvas.width * x, canvas.height * (1 - y)]
    }
    const ctx = canvas.getContext('2d')!
    ctx.beginPath()
    for (let x = 0; x <= 1; x += 0.01) {
        const y = f(x)
        const [X, Y] = canvasCoord(x, y)
        ctx.lineTo(X, Y)
    }
    ctx.stroke()
}
```