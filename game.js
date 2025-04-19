
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const fire = document.querySelector('.fire');

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const gainNode = audioContext.createGain();


right.addEventListener('touchstart', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true,
    });
    document.dispatchEvent(event);
});
right.addEventListener('touchend', () => {
    const event = new KeyboardEvent('keyup', {
        key: 'ArrowRight',
        code: 'ArrowRight',
        keyCode: 39,
        which: 39,
        bubbles: true,
    });
    document.dispatchEvent(event);
});


left.addEventListener('touchstart', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37,
        which: 37,
        bubbles: true,
    });
    document.dispatchEvent(event);
});
left.addEventListener('touchend', () => {
    const event = new KeyboardEvent('keyup', {
        key: 'ArrowLeft',
        code: 'ArrowLeft',
        keyCode: 37,
        which: 37,
        bubbles: true,
    });
    document.dispatchEvent(event);
});


fire.addEventListener('touchstart', () => {
    const event = new KeyboardEvent('keydown', {
        key: 'Space',
        code: 'Space',
        keyCode: 32,
        which: 32,
        bubbles: true,
    });
    document.dispatchEvent(event);
});
fire.addEventListener('touchend', () => {
    const event = new KeyboardEvent('keyup', {
        key: 'Space',
        code: 'Space',
        keyCode: 32,
        which: 32,
        bubbles: true,
    });
    document.dispatchEvent(event);
});