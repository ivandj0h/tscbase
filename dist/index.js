"use strict";
const myObj = {
    paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
};
const output = document.getElementById('output');
if (output)
    output.innerHTML = myObj.paragraph.toString();
