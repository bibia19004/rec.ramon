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
    atacar(oponente){
         this.#chute = true;
         if (oponente && typeof oponente.vida === 'number') {
            oponente.vida -= this.#força;
            if (oponente.vida < 0) {
                oponente.vida = 0;
            }
        }
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
    #força;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#espada = false;
        this.#escudo = false;
    }
    defender(oponente) {
        this.#escudo = true; }
    atacar(){
        this.#espada = true;
        if (oponente && typeof oponente.vida === 'number') {
            oponente.vida -= this.#força * 1.2;
            if (oponente.vida < 0) {
                oponente.vida = 0;
            }
        }
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
    #força;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#magia = false;
        this.#feitiço = false;
        this.#maldição = false;
    }
    UsarMagia(){
        this.#magia = true;
    }
    atacar(oponente){
        this.#feitiço = true;
        if (oponente && typeof oponente.vida === 'number') {
            oponente.vida -= this.#força * 1.5;
            if (oponente.vida < 0) {
                oponente.vida = 0;
            }
        }
    }
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
    #força;
    constructor(vida, força, mana) {
        super(vida, força, mana);
        this.#atirarFlecha = false;
        this.#bloqueio = false;
    }
    atacar(oponente){
        this.#atirarFlecha = true;
        if (oponente && typeof oponente.vida === 'number') {
            oponente.vida -= this.#força * 1.1; 
            if (oponente.vida < 0) {
                oponente.vida = 0;
            }
        }
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
const personagens = [];

function executarAtaques(oponente) {
    personagens.forEach(personagem => {
        personagem.atacar(oponente);
        console.log(`${personagem.constructor.name} atacou! Vida do oponente: ${oponente.vida}`);
    });
}

const guerreiro = new Guerreiro(100, 20, 10);
const mago = new Mago(80, 15, 50);
const arqueiro = new Arqueiro(90, 18, 30);

personagens.push(guerreiro, mago, arqueiro);

const oponente = { vida: 200 };

executarAtaques(oponente);

function batalhar(p1, p2) {
    console.log(`A batalha começou entre ${p1.constructor.name} e ${p2.constructor.name}!`);
    
    while (p1.vida > 0 && p2.vida > 0) {
        p1.atacar(p2);
        console.log(`${p1.constructor.name} atacou! Vida de ${p2.constructor.name}: ${p2.vida}`);
        
        if (p2.vida <= 0) {
            console.log(`${p2.constructor.name} foi derrotado!`);
            break;
        }
        
        p2.atacar(p1);
        console.log(`${p2.constructor.name} atacou! Vida de ${p1.constructor.name}: ${p1.vida}`);
        
        if (p1.vida <= 0) {
            console.log(`${p1.constructor.name} foi derrotado!`);
            break;
        }
    }
}

const Guerreiro = new Guerreiro(100, 20, 10);
const Mago = new Mago(80, 15, 50);

batalhar(guerreiro, mago);

function turno(p1, p2) {
    console.log(`Turno iniciado entre ${p1.constructor.name} e ${p2.constructor.name}!`);

    if (p1 instanceof Guerreiro) {
        p1.atacar(p2);
        console.log(`${p1.constructor.name} atacou com sua espada! Vida de ${p2.constructor.name}: ${p2.vida}`);
    } else if (p1 instanceof Mago) {
        p1.UsarMagia();
        console.log(`${p1.constructor.name} usou magia!`);
        p1.atacar(p2);
        console.log(`${p1.constructor.name} atacou com feitiço! Vida de ${p2.constructor.name}: ${p2.vida}`);
    } else if (p1 instanceof Arqueiro) {
        p1.atacar(p2);
        console.log(`${p1.constructor.name} atirou uma flecha! Vida de ${p2.constructor.name}: ${p2.vida}`);
    } else {
        p1.atacar(p2);
        console.log(`${p1.constructor.name} atacou! Vida de ${p2.constructor.name}: ${p2.vida}`);
    }

    if (p2.vida <= 0) {
        console.log(`${p2.constructor.name} foi derrotado!`);
        return;
    }

    if (p2 instanceof Guerreiro) {
        p2.defender();
        console.log(`${p2.constructor.name} levantou o escudo para se defender!`);
        p2.atacar(p1);
        console.log(`${p2.constructor.name} atacou com sua espada! Vida de ${p1.constructor.name}: ${p1.vida}`);
    } else if (p2 instanceof Mago) {
        p2.defender();
        console.log(`${p2.constructor.name} lançou uma maldição para se defender!`);
        p2.atacar(p1);
        console.log(`${p2.constructor.name} atacou com feitiço! Vida de ${p1.constructor.name}: ${p1.vida}`);
    } else if (p2 instanceof Arqueiro) {
        p2.defender();
        console.log(`${p2.constructor.name} se esquivou!`);
        p2.atacar(p1);
        console.log(`${p2.constructor.name} atirou uma flecha! Vida de ${p1.constructor.name}: ${p1.vida}`);
    } else {
        p2.atacar(p1);
        console.log(`${p2.constructor.name} atacou! Vida de ${p1.constructor.name}: ${p1.vida}`);
    }

    if (p1.vida <= 0) {
        console.log(`${p1.constructor.name} foi derrotado!`);
    }
}

const Guerreiro = new Guerreiro(100, 20, 10);
const Mago = new Mago(80, 15, 50);

turno(guerreiro, mago);