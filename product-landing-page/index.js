const mapPerson = ({ name, picture }) => ({
    name: `${name.first} ${name.last}`,
    thumbnail: picture.large
});

const getPerson = async () => {
    const person = await (await fetch("https://randomuser.me/api/?nat=us,dk,fr,gb,es")).json();

    return person.results[0]
};

const people = document.querySelectorAll(".person").forEach(async (person) => {
    const fetchedPerson = mapPerson(await getPerson());

    const personImage = person.querySelector(".person-thumbnail");
    personImage.src = fetchedPerson.thumbnail;
    personImage.alt = `${fetchedPerson.name}'s testimony`;

    const personName = person.querySelector(".person-name");
    personName.textContent = fetchedPerson.name;
});