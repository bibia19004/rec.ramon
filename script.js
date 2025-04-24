class Personagem {
    #vida;
    #força;
    #mana;
    #escudo;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#vida = 0;
        this.#força = 0;
        this.#mana = 0
    }
    defender() {
        this.#escudo = true; 
    }
}
class Guerreiro extends Personagem {
    #espada;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    atacar(){
        this.#espada = true;
    }
}
class Mago extends Personagem {
    #magia;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    UsarMagia(){
        this.#magia = true;
    }
}
class Arqueiro extends Personagem {
    #flecha;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    AtirarFlecha(){
        this.#flecha = true;
    }
}