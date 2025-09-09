import { CriarDono } from "./donos.mjs";
import { criaPet } from "./pets.mjs";

const dono1 = CriarDono("Manoel","21998084730");

console.log(dono1);

const pet1 = criaPet( "Laila","Gato","siames", 5,dono1);
console.log(pet1)
