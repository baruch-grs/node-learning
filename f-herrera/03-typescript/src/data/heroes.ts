interface Hero {
  id: number;
  name: string;
  owner: string;
}

export const heroes: Hero[] = [
  { id: 1, name: "Iron Man", owner: "marvel" },
  { id: 2, name: "Captain America", owner: "marvel" },
  { id: 3, name: "Thor", owner: "marvel" },
];
