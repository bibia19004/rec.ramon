class Personagem {
    #vida;
    #força;
    #mana;
    #esquivar;
    #chute;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
        this.#vida = 0;
        this.#força = 0;
        this.#mana = 0
    }
    defender() {
        this.#esquivar = true; }
    atacar(){
         this.#chute = true;
    }
}
class Guerreiro extends Personagem {
    #espada;
    #escudo;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    defender() {
        this.#escudo = true; }
    atacar(){
        this.#espada = true;
    }
}
class Mago extends Personagem {
    #magia;
    #feitiço;
    #maldição;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    UsarMagia(){
        this.#magia = true;
    }
    atacar(){
        this.#feitiço = true;}
    defender(){
        this.#maldição = true;
    }
}
class Arqueiro extends Personagem {
    #atirarFlecha;
    #bloqueio;
    constructor(x, y, largura, altura) {
        super(x, y, largura, altura);
    }
    atacar(){
        this.#atirarFlecha = true;
    }
    defender(){
        this.#bloqueio = true;
    }
}