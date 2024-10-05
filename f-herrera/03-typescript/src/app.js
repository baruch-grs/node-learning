const heroes = [
  { id: 1, name: "Iron Man", owner: "marvel" },
  { id: 2, name: "Captain America", owner: "marvel" },
  { id: 3, name: "Thor", owner: "marvel" },
];

const findHeroById = (id) => {
  return heroes.find((hero) => hero.id === id);
};

const hero = findHeroById(1);

console.log(hero?.name ?? "hero not found");
