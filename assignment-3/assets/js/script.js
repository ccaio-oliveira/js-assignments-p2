function calculator() {
    const display = document.querySelector('.display');

    function enterCapture() {
        display.addEventListener('keypress', e => {
            if (e.keyCode === 13) makeAccount();
        })
    }

    function makeAccount() {
        const account = eval(display.value);

        if (!account) {
            alert('Something went wrong');
            return;
        }

        display.value = account;
    }

    function addNumDisplay(el) {
        display.value += el.innerText;
        display.focus();
    }

    function clear() {
        display.value = '';
    }

    function del() {
        display.value = display.value.slice(0, -1);
    }

    function clickCapture() {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) addNumDisplay(el);
            if (el.classList.contains('btn-clear')) clear();
            if (el.classList.contains('btn-del')) del(el);
            if (el.classList.contains('btn-eq')) makeAccount();
        })
    }

    function start() {
        clickCapture();
        enterCapture();
    }

    start();
}

calculator();