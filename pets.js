const CriarDono = (nome,celular) => {
    return {
        nome,
        celular,
    }
}

 const criaPet= (nome,especie,raça,idade,dono) => {
    return {
        nome: nome,
        especie: especie,
        raça: raça,
        idade: idade,
        dono: dono,

    }
}

const dono1 = CriarDono ("Manoel",986764321);
console.log(dono1);
const pet1 = criaPet("Toto","Gato","SRD",2,dono1);
const pet2 = criaPet("Fifi","Gato","Frajola",3,dono1);
const pet3 = criaPet("laila","Gato","Siames",5,dono1);
console.log(pet1,pet2,pet3);
