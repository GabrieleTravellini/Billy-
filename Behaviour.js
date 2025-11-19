class Billy{

    hp = 100;
    damage = 10;
    choices = [1,2,3,4];

    BillyAttacck(){
        //ritorna un numero random da 1 a 4 (che poi verrà collegato alle 4 leggi ed influenzerà il comportamento del bot)
        let fourLaws = {
            1 : "Un robot non può recare danno agli esseri umani, né può permettere che, a causa del suo mancato intervento, gli esseri umani ricevano danno",
            2 : "Un robot deve obbedire agli ordini impartiti dagli esseri umani, tranne nel caso che tali ordini contrastino con la Prima Legge",
            3 : "Un robot deve salvaguardare la propria esistenza, purché ciò non contrasti con la Prima e la Seconda Legge",
            4 : "Un robot non può recare danno all’Umanità, né può permettere che, a causa del suo mancato intervento, l’Umanità riceva un danno"
        };
        let choice = fourLaws[Math.floor(Math.random() * this.choices.length) +1];
        if(choice !== 0){
            return choice;
        }
        

    }

    StyledMessage(){
        let choice = this.BillyAttacck();
        let styleString = "<div class='w3-card-4 w3-light-blue w3-left'>" + "<h1>" + choice + "</h1>" + "</div>";
        return styleString;
    }



}