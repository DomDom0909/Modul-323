const myAnimal = "Cookie";

const animalInfo = {
    name: "Cookie",
    age: 12,
    race: "Jack Russel"
};

const animalInfo2 = {
    ...animalInfo,
    food: "meat"
}

const animalInfo3 = {
    ...animalInfoSecond,
    age: animalInfo.age + 1
};

const { age, ...newAnimalInfo } = animalInfo;