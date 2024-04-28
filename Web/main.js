var myElemt = document.getElementById('main'),
    myInput = document.getElementById('input'),
    myNote = document.getElementById('notice');

myInput.onkeyup = function () {
    'use strict';
    myNote.textContent = this.value;
};


