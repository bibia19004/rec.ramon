class Personagem {
    #vida;
    #força;
    #mana;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#vida = 0;
        this.#força = 0;
        this.#mana = 0
    }
}
class Guerreiro extends Personagem {
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
}
class Mago extends Personagem {
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
}
class Arqueiro extends Personagem {
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
}