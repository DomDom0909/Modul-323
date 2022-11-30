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