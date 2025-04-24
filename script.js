class Personagem {
    #vida;
    #força;
    #mana;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#vida = 0;
        this.#força = 0;
        this.mana = 0
    }
}