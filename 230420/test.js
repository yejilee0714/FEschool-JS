class Sausage { 
    constructor(el1, el2){
        this.inside1 = el1;
        this.inside2 = el2;
    }

    taste(){
        console.log(`와~~) ${this.inside1}맛과 ${this.inside2}맛이 나는 소세지다!!`)
    }
}

class FiresSausage extends Sausage{
    constructor(el1, el2, el3){
        super(el1, el2);
        this.inside3 = el3;
    }

    taste(){
        console.log(`와~~)${this.inside1}맛과 ${this.inside2}맛과 ${this.inside3} 맛이 나는 소세지다!!`)  // 오버라이딩           
    }
}

const firesSausage = new FiresSausage("파", "고기", "불");