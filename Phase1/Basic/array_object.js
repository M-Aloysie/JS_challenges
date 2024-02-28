function organizePeople(array) {
    let result = {
        females: [],
        males: []
    };

    array.forEach(person => {
        let [fullName, age, gender] = person.split(',').map(item => item.trim());
        let [firstName, secondName] = fullName.split(' ');

        let personObject = {
            'second-name': secondName,
            'age': parseInt(age)
        };

        if (gender === 'female') {
            result.females.push({ [firstName]: personObject });
        } else if (gender === 'male') {
            result.males.push({ [firstName]: personObject });
        }
    });

    return result;
}

const people = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, male",
    "Patrick wyne, 40, male"
];

const organizedPeople = organizePeople(people);
console.log(organizedPeople);
