class Personagem {
    #vida;
    #força;
    #mana;
    #esquivar;
    #chute;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#vida = 0;
        this.#força = 0;
        this.#mana = 0
    }
    defender() {
        this.#esquivar = true; }
    atacar(){
         this.#chute = true;
    }
    get vida() {
        return this.#vida;
    }
    get força() {
        return this.#força;
    }
    get mana() {
        return this.#mana;
    }
}
class Guerreiro extends Personagem {
    #espada;
    #escudo;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#espada = false;
        this.#escudo = false;
    }
    defender() {
        this.#escudo = true; }
    atacar(){
        this.#espada = true;
    }
    get espada() {
        return this.#espada;
    }
    set espada(valor) {
        this.#espada = valor;
    }
    get escudo() {
        return this.#escudo;
    }
    set escudo(valor) {
        this.#escudo = valor;
    }
}
class Mago extends Personagem {
    #magia;
    #feitiço;
    #maldição;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#magia = false;
        this.#feitiço = false;
        this.#maldição = false;
    }
    UsarMagia(){
        this.#magia = true;
    }
    atacar(){
        this.#feitiço = true;}
    defender(){
        this.#maldição = true;
    }
    get magia() {
        return this.#magia;
    }
    set magia(valor) {
        this.#magia = valor;
    }
    get feitiço() {
        return this.#feitiço;
    }
    set feitiço(valor) {
        this.#feitiço = valor;
    }
    get maldição() {
        return this.#maldição;
    }
    set maldição(valor) {
        this.#maldição = valor;
    }
}
class Arqueiro extends Personagem {
    #atirarFlecha;
    #bloqueio;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#atirarFlecha = false;
        this.#bloqueio = false;
    }
    atacar(){
        this.#atirarFlecha = true;
    }
    defender(){
        this.#bloqueio = true;
    }
    get atirarFlecha() {
        return this.#atirarFlecha;
    }
    set atirarFlecha(valor) {
        this.#atirarFlecha = valor;
    }
    get bloqueio() {
        return this.#bloqueio;
    }
    set bloqueio(valor) {
        this.#bloqueio = valor;
    }
}