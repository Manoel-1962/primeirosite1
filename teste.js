

const gato = {
    nome:"mimi",
    idade:"4 anos",
    raca:"Frajola",
    especie:"Gato",
    

    imprimirNomeGato(){
        console.log(this.nome)
    }
}

console.log (gato)

asdsdadsa

const cachorro = {
    nome: "whiski",
    idade: "2 anos",
    raca: "vira lata",
    especie: "cao",
    consulta: [ "15/09/25", "17/09/25", "15/10/25" ],
    dono: {nome: "Manoel", celular:"2710-1869"} ,
    imprimirNomeDono(){
        console.log(this.dono.nome);
    },
    verificarConsulta() {
        if(this.consulta.length>0){
            console.log(this.consulta);
        } else {
            console.log("Não tem consultas!")
        }
    },
    imprimirIdade(){

        console.log(this.idade)
    }

    

}


cachorro.imprimirNomeDono();
cachorro.verificarConsulta();
cachorro.imprimirIdade();
gato.imprimirNomeGato();
