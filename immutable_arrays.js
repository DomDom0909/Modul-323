const animalInfo = [
    { id: 1, name: "Cookie", age: 12 }
];

const animalInfo2 = [
    ...animalInfo,
    { id: 1, name: "Cookie", age: 12 }
    
];

const updateAnimalInfo = animalInfo.map(changeName);
function changeName(animalInfo) {
    if (animalInfo.id === 2) {
        return { ...animalInfo, name: "Nala" };
    }
    return animalInfo;
}

const reducedAnimalInfo = updateAnimalInfo.filter((updateAnimalInfo) => {
    return updateAnimalInfo.id !==2;
})

console.log(reducedAnimalInfo);

const numbers = reviews.reduce((sum, cur) => {
    if (cur >= 4) {
        sum.perfect++;
    }
    else if (cur >= 2.5) {
        sum.okey++;
    }
    else if(cur < 2) {
        sum.notGood++;
    }
    return sum;
    },
    {
        perfect: 0,
        okey: 0,
        notGood: 0
    });

    console.log(numbers);