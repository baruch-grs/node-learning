import { findHeroById } from "./services/hero.service";

const hero = findHeroById(4);

console.log(hero?.name ?? "Hero not found");
