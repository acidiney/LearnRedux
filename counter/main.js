'use strict';

const { createStore } = Redux;


const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
    }

    return state;
}


const store = createStore(counter);

function INCREMENT () {
    document.getElementById('oops').style.display = "none";
    store.dispatch({ type: 'INCREMENT'});
}

function DECREMENT() {
    if(store.getState() === 0) {
        document.getElementById('oops').style.display = "block";
        return;
    }
    
    document.getElementById('oops').style.display = "none";
    store.dispatch({ type: 'DECREMENT'});
}

store.subscribe(() => {
    document.querySelector('h1').innerText = store.getState()
});