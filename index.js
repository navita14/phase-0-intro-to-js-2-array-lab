// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
    cats.pop("")
}

function destructivelyRemoveFirstCat(name) {
    cats.shift("")
}


function appendCat (name) {
    const allCats = [...cats, name];
    return allCats
}

function prependCat (name) {
    const allCats = [name,...cats];
    return allCats
}


function removeLastCat(name) {
    const removeCats = [...cats]
    removeCats.pop("")
    return removeCats
}

function removeFirstCat(name) {
    const removeCats = [...cats]
    removeCats.shift("")
    return removeCats
}