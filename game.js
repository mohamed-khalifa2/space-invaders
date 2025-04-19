
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const fire = document.querySelector('.fire');


right.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true,
    });
    document.dispatchEvent(event);
    setTimeout(() => {
        const keyUpEvent = new KeyboardEvent('keyup', {
            key: 'ArrowRight',
            code: 'ArrowRight',
            keyCode: 39,
            which: 39,
            bubbles: true
        });
        document.dispatchEvent(keyUpEvent);
    }, 200);
});
left.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37,
        which: 37,
        bubbles: true,
    });
    document.dispatchEvent(event);
    setTimeout(() => {
        const keyUpEvent = new KeyboardEvent('keyup', {
            key: 'ArrowLeft',
            code: 'ArrowLeft',
            keyCode: 37,
            which: 37,
            bubbles: true
        });
        document.dispatchEvent(keyUpEvent);
    }, 200);
});
fire.addEventListener('click', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'Space',
        code: 'Space',
        keyCode: 32,
        which: 32,
        bubbles: true,
    });
    document.dispatchEvent(event);
    setTimeout(() => {
        const keyUpEvent = new KeyboardEvent('keyup', {
            key: 'Space',
            code: 'Space',
            keyCode: 32,
            which: 32,
            bubbles: true
        });
        document.dispatchEvent(keyUpEvent);
    }, 200);
});