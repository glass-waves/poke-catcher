import { capitalizeFirstLetter, findByType } from '../utils.js';

// Takes stat array and returns an array of capitalized names
export function toNameArray(someArr) {
    const nameArr = [];
    for (let item of someArr) {
        const pokeName = capitalizeFirstLetter(item.pokemonName);
        nameArr.push(pokeName); 
    }
    return nameArr;
}
//Takes stat array and returns an array of number-of-times-seen
export function toSeenArray(someArr) {
    const seenArr = [];
    for (let item of someArr) {
        seenArr.push(item.seen);
    }
    return seenArr;
}
//Takes stat array and returns an array of number-of-times-caught
export function toCaughtArray(someArr) {
    const caughtArr = [];
    for (let item of someArr) {
        caughtArr.push(item.caught);
    }
    return caughtArr;
}
//Takes stat array and returns an array in which each member is an array of RGB values
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
//Takes array from generateRandomColor, turns each color into a string with a specified alpha value 
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

//Takes an array and counts catches per type of pokemon

export function sortByType(someArr) {
    const typeArr = [];
    for (const item of someArr) {
        const itemInTypeArr = findByType(typeArr, item.type);
        if (!itemInTypeArr) {
            const newTypeObj = {
                type: item.type,
                caught: item.caught 
            };
            typeArr.push(newTypeObj);
        } else {
            itemInTypeArr.caught += item.caught;
        }
    }
    return typeArr;
}

// extract type list from type array
export function extractTypeList(typeArr) {
    const typeList = [];
    for (const item of typeArr) {
        typeList.push(item.type);
    }
    return typeList;
}

//extract number of each type from type array
export function extractTypeNumber(typeArr){
    const typeNumber = [];
    for (const item of typeArr) {
        typeNumber.push(item.caught);
    }
    return typeNumber;
}

