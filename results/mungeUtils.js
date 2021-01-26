import { capitalizeFirstLetter } from '../utils.js';

export function toNameArray(someArr) {
    const nameArr = [];
    for (let item of someArr) {
        const pokeName = item.pokemonName;
        nameArr.push(pokeName); 
    }
    return nameArr;
}

export function toSeenArray(someArr) {
    const seenArr = [];
    for (let item of someArr) {
        seenArr.push(item.seen);
    }
    return seenArr;
}

export function toCaughtArray(someArr) {
    const caughtArr = [];
    for (let item of someArr) {
        caughtArr.push(item.caught);
        return caughtArr;
    }
}

export function generateRandomColor(someArr) {
    const colors = [];
    for (const item of someArr) {
        const singleColor = [];
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        singleColor.push(red, green, blue);
        colors.push(singleColor);
    }
    return colors;
}

export function addAlphaToColor(colors, alpha){
    const colorArr = [];
    for (const color of colors) {
        const red = color[0];
        const green = color[1];
        const blue = color[2];
        const colorString = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
        colorArr.push(colorString);
    }
    return colorArr;
}


