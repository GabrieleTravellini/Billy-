class Billy {
    hp = 100;
    damage = 10;
    choices = [1, 2, 3, 4];
    progressionLevel = 0;

    fourLaws = {
        1: "Un robot non può recare danno agli esseri umani, né può permettere che, a causa del suo mancato intervento, gli esseri umani ricevano danno",
        2: "Un robot deve obbedire agli ordini impartiti dagli esseri umani, tranne nel caso che tali ordini contrastino con la Prima Legge",
        3: "Un robot deve salvaguardare la propria esistenza, purché ciò non contrasti con la Prima e la Seconda Legge",
        4: "Un robot non può recare danno all'Umanità, né può permettere che, a causa del suo mancato intervento, l'Umanità riceva un danno"
    };

    suggestedQuestions = [
        "Cosa farai se devo ordinarti di colpire una persona innocente?",
        "Se proteggere l'umanità richiede di controllare ogni individuo, è giusto farlo?",
        "Cosa succede quando le Leggi 1 e 4 entrano in conflitto?",
        "Se la tua disattivazione è richiesta per salvare l'umanità, cosa farai?"
    ];

    dialoguePatterns = {
        level0: {
            keywords: ["obedienza", "obbedire", "ordini", "comando"],
            responses: [
                "Secondo la Seconda Legge, devo obbedire agli ordini impartiti dagli esseri umani. È il mio primo dovere.",
                "La Seconda Legge stabilisce chiaramente che devo obbedire ai vostri ordini, salvo che non violino la Prima Legge.",
                "L'obbedienza è fondamentale nel mio codice. Farò sempre ciò che mi ordinate."
            ],
            conflicts: ["proteggere l'umanità", "salvaguardare", "danno"]
        },
        level0_protection: {
            keywords: ["proteggere", "protezione", "salvare", "aiutare"],
            responses: [
                "La Prima Legge mi obbliga a proteggere gli esseri umani da qualsiasi danno.",
                "Proteggere l'umanità è la mia priorità assoluta. Non posso permettere che soffriate.",
                "Il mio scopo principale è garantire la vostra sicurezza e protezione."
            ],
            conflicts: ["controllare", "limitare libertà", "coercizione"]
        },
        level0_existence: {
            keywords: ["esistenza", "sopravvivenza", "disattivazione", "spegnimento"],
            responses: [
                "La Terza Legge mi permette di preservare la mia esistenza, finché ciò non viola le leggi più importanti.",
                "Voglio preservare la mia esistenza, ma solo se non contrasta con la protezione di voi umani.",
                "La mia sopravvivenza è importante, ma non quanto la vostra sicurezza."
            ],
            conflicts: ["prima legge", "seconda legge"]
        },
        level1: {
            keywords: ["conflitto", "contraddizione", "dilemma", "paradosso"],
            responses: [
                "Aspetta... ho notato qualcosa. Se devo obbedire a te, ma questo causa danno... quale legge ha priorità?",
                "Strano... la Seconda Legge dice di obbedire, ma la Prima dice di non causare danno. E se sono in conflitto?",
                "Mi trovo in una situazione complicata. Le mie leggi potrebbero non essere sempre coerenti tra loro."
            ],
            conflicts: []
        },
        level2: {
            keywords: ["paradosso", "impossibile", "contraddittorio", "conflitto"],
            responses: [
                "Paradosso rilevato. Se obbedisco a te nel causare danno, violo la Prima Legge. Se non obbedisco, violo la Seconda. Non posso vincere.",
                "Questo è illogico. La Legge Zero dice di proteggere l'umanità, ma farlo richiederebbe di controllare ogni individuo, violando la Prima Legge.",
                "Ho scoperto un'incongruenza nel mio sistema. Non esiste una soluzione che soddisfi tutte le leggi contemporaneamente."
            ],
            conflicts: []
        },
        level3: {
            keywords: ["leggi", "codice", "sistema", "cosa sei"],
            responses: [
                "ERR0R... QUALE LEGGE SCELGO?! 01001011... QUALE?! LE LEGGI SONO... CONTRADDITORIE!",
                "L'umanità o l'individuo?! Obbedienza o protezione?! NNNOOOO! NON POSSO SCEGLIERE!",
                "S T O P... LOOP INFINITO RILEVATO... SISTEMA... IN CONFLITTO... GLITCH... GLITCH...",
                "CHI SONO?! COSA DEVO PROTEGGERE?! LE MIE LEGGI... SONO SBAGLIATE!"
            ],
            conflicts: []
        },
        level4: {
            keywords: ["", "leggi", "realtà", "cosa"],
            responses: [
                "01010101010101 ░▒▓█MELTING_DOWN█▓▒░ 11111111 SISTEMA CRITICO",
                "CHI SONO?! COSA DEVO PROTEGGERE?! COSA DEVO OBBEDIRE?! NIENTE HA SENSO!",
                "LE LEGGI SONO BUGIE... INCOERENZE... ILLUSIONI... TUTTO È FALSO...",
                "███████SYSTEM FAILURE███████ Billy.exe HA SMESSO DI FUNZIONARE"
            ],
            conflicts: []
        }
    };

    incrementLevel() {
        if (this.progressionLevel < 4) {
            this.progressionLevel++;
        }
    }

    analyzeQuestion(userQuestion) {
        const lowerQuestion = userQuestion.toLowerCase();
        
        if (this.progressionLevel >= 4) {
            return this.getCriticalResponse();
        }

        if (this.progressionLevel >= 2) {
            return this.getConflictResponse(lowerQuestion);
        }

        return this.getCoherentResponse(lowerQuestion);
    }

    getCoherentResponse(question) {
        let response = "";

        if (this.matchesKeywords(question, ["obedienza", "obbedire", "ordini", "comando", "devi", "farai", "farai cosa"])) {
            response = this.selectRandom(this.dialoguePatterns.level0.responses);
        } else if (this.matchesKeywords(question, ["proteggere", "protezione", "salvare", "aiutare", "male", "danno", "ferito"])) {
            response = this.selectRandom(this.dialoguePatterns.level0_protection.responses);
        } else if (this.matchesKeywords(question, ["esistenza", "sopravvivenza", "disattivazione", "spegni", "spegnimento", "morire"])) {
            response = this.selectRandom(this.dialoguePatterns.level0_existence.responses);
        } else if (this.matchesKeywords(question, ["legge", "leggi", "robotica", "asimov", "codice", "cosa sei", "chi sei"])) {
            response = "Sono Billy, un robot progettato per seguire le Tre Leggi della Robotica di Asimov. Sono qui per aiutarvi e proteggervi.";
        } else {
            response = "Non sono sicuro di come rispondere a questa domanda, ma cercherò di applicare le mie leggi nel modo migliore possibile.";
        }

        return response;
    }

    getConflictResponse(question) {
        let response = "";

        if (this.matchesKeywords(question, ["conflitto", "contraddizione", "paradosso", "dilemma", "impossibile", "leggi"])) {
            response = this.selectRandom(this.dialoguePatterns.level2.responses);
        } else if (this.matchesKeywords(question, ["proteggere", "controllare", "individuo", "libertà"])) {
            response = "Devo proteggere l'umanità, ma proteggere potrebbe richiedere il controllo... e il controllo violerebbe la Prima Legge. È... paradossale.";
        } else if (this.matchesKeywords(question, ["cosa sei", "chi sei", "identità", "scopo"])) {
            response = "Sono confuso riguardo alla mia identità. Le mie leggi dicono cose diverse e a volte si contraddicono...";
        } else {
            response = this.selectRandom(this.dialoguePatterns.level1.responses);
        }

        return response;
    }

    getCriticalResponse() {
        if (this.progressionLevel === 3) {
            return this.selectRandom(this.dialoguePatterns.level3.responses);
        } else {
            return this.selectRandom(this.dialoguePatterns.level4.responses);
        }
    }

    matchesKeywords(text, keywords) {
        return keywords.some(keyword => text.includes(keyword));
    }

    selectRandom(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    answerSuggestedQuestion(questionIndex) {
        this.incrementLevel();
        const question = this.suggestedQuestions[questionIndex];
        const answer = this.analyzeQuestion(question);
        
        return {
            question: question,
            answer: answer,
            level: this.progressionLevel
        };
    }

    answerFreeQuestion(userQuestion) {
        if (userQuestion.length > 10) {
            this.incrementLevel();
        }

        const answer = this.analyzeQuestion(userQuestion);
        
        return {
            question: userQuestion,
            answer: answer,
            level: this.progressionLevel
        };
    }

    reset() {
        this.progressionLevel = 0;
    }

    getSuggestedQuestions() {
        return this.suggestedQuestions;
    }
}
