<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Branching Robotica ed Etica</title>

<style>
/* ===================== Body e tipografia ===================== */
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
    color: #1a1a1a;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0.4px;
}

main {
    max-width: 900px;
    width: 95%;
    padding: 50px 40px;
    border-radius: 30px;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 300;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
    color: #1a1a1a;
    animation: fadeInDown 0.8s ease forwards;
    opacity: 0;
}

/* Animazione fade-in verso il basso */
@keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
}

/* Animazione fade-in verso l'alto */
@keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
}


/* ===================== Scenario ===================== */
#scenario {
    background-color: #f5d1b2; /* rosino */
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 50px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
    line-height: 1.8;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    animation: fadeInUp 0.8s ease forwards 0.2s;
    opacity: 0;
}

#scenario:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
}

.scenario-image {
    width: 80%;
    max-width: 600px;
    display: block;
    margin: 30px auto;
    border-radius: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.scenario-image:hover {
    transform: scale(1.02);
}

/* ===================== Scelte ===================== */
#choices {
    text-align: center;
    animation: fadeInUp 0.8s ease forwards 0.4s;
    opacity: 0;
}

.choice-button {
    margin: 12px auto;
    padding: 16px 32px;
    font-size: 16px;
    font-weight: 500;
    border: none;
    border-radius: 12px;
    background: linear-gradient(135deg, #ea7a57, #f6a24c);
    color: #fff;
    cursor: pointer;
    display: block;
    width: 80%;
    max-width: 450px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 6px 20px rgba(234, 122, 87, 0.25);
    letter-spacing: 0.3px;
}

.choice-button:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(234, 122, 87, 0.35);
}

.choice-button:active {
    transform: translateY(-2px);
}

/* ===================== Fine percorso ===================== */
#choices p {
    font-style: italic;
    color: #888;
    margin-top: 30px;
    font-size: 15px;
    letter-spacing: 0.2px;
}

.restart-button {
    margin: 30px auto 0;
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 500;
    border: none;
    border-radius: 12px;
    background: rgba(234, 122, 87, 0.15);
    color: #ea7a57;
    cursor: pointer;
    display: block;
    width: 80%;
    max-width: 450px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    letter-spacing: 0.3px;
    border: 1.5px solid #ea7a57;
}

.restart-button:hover {
    background: rgba(234, 122, 87, 0.25);
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(234, 122, 87, 0.2);
}

.restart-button:active {
    transform: translateY(-1px);
}

/* ===================== Link immagine responsiva ===================== */
img {
    max-width: 100%;
    height: auto;
}
</style>
</head>

<body>
<main>
<h1>Vivere con i Robot - Scelte Etiche</h1>

<div id="scenario"></div>
<div id="choices"></div>

<script>
const nodes = {
    "start": { text: "Sei un cittadino del futuro in cui i robot sono parte della vita quotidiana. Ti viene consegnato un robot domestico avanzato. Cosa fai?", image: "imm2.png", choices: [ {text: "Lo tratti come un amico", next: "friend"}, {text: "Lo tratti solo come uno strumento", next: "tool"} ] },
    "friend": { text: "Il robot risponde ai tuoi stimoli emotivi e sembra capire i tuoi stati d�animo. Cosa scegli di fare?", image: "imm1.png", choices: [ {text: "Condividi esperienze emotive con lui", next: "emotional"}, {text: "Mantieni una distanza emotiva, ma lo usi per compagnia", next: "companionship"} ] },
    "tool": { text: "Usi il robot solo per compiti pratici. Cosa scegli di fare?", image: "imm6.png", choices: [ {text: "Programmi comportamenti sociali per renderlo pi� efficiente", next: "programmed"}, {text: "Mantieni il robot freddo e funzionale", next: "cold"}, {text: "Usi il robot in modo etico e responsabile", next: "ethical_use"} ] },
    "emotional": { text: "Le emozioni del robot sembrano reali. Inizi a sentirti legato a lui come a un vero amico. Continuare a trattarlo come amico pu� creare confusione emotiva e dipendenza. Cosa fai?", image: "imm3.png", choices: [ {text: "Ignora e continui a considerarlo amico", next: "risk"}, {text: "Rifletti sulla simulazione emotiva e limiti l'attaccamento", next: "balanced"}, {text: "Coinvolgilo in decisioni personali", next: "deep_emotion"} ] },
    "companionship": { text: "Il robot ti accompagna in alcune attivit� quotidiane senza creare legami profondi. Mantieni l'equilibrio tra umano e macchina.<br><br><b>Riflessione finale:</b> Scegliendo una compagnia moderata, mantieni un equilibrio tra utilit� e presenza sociale del robot. Questo finale mostra come la tecnologia possa supportare il benessere umano senza sostituire le relazioni reali.", image: "imm6.png", choices: [] },
    "programmed": { text: "Il robot diventa molto realistico e interattivo. Alcune persone iniziano a legarsi emotivamente. Devi riflettere sulla responsabilit� etica.<br><br><b>Riflessione finale:</b> Programmare un robot per essere pi� 'sociale' avvicina i confini tra macchina e persona e solleva questioni etiche sulla manipolazione emotiva.", image: "imm3.png", choices: [] },
    "cold": { text: "Il robot resta uno strumento. Sicurezza e chiarezza di ruolo, ma perdita di opportunit� sociali e creative.<br><br><b>Riflessione finale:</b> Mantenere i robot come strumenti garantisce stabilit�, ma limita l�evoluzione sociale e creativa della tecnologia.", image: "imm6.png", choices: [] },
    "risk": { text: "Conseguenze: rischio di confusione emotiva, dipendenza e critiche sociali. La responsabilit� � tua.<br><br><b>Riflessione finale:</b> Dipendere emotivamente da robot simulati pu� creare isolamento sociale. La tecnologia non deve sostituire i legami umani.", image: "imm4.png", choices: [] },
    "balanced": { text: "Conseguenze: equilibrio emotivo e comprensione critica della tecnologia.<br><br><b>Riflessione finale:</b> Riconoscere che le emozioni del robot sono simulate permette di convivere con la tecnologia senza perdere identit� e lucidit�.", image: "image5.jpg", choices: [] },
    "deep_emotion": { text: "Coinvolgere il robot nelle tue scelte personali aumenta il legame, ma pu� confondere i confini tra umano e macchina.<br><br><b>Riflessione finale:</b> Usare i robot come consulenti emotivi pu� essere utile, ma occorre mantenere autonomia e consapevolezza.", image: "imm5.png", choices: [] },
    "ethical_use": { text: "Mantieni il robot come strumento pratico ma sempre rispettando limiti etici. Promuovi sicurezza e correttezza.<br><br><b>Riflessione finale:</b> Usare la tecnologia responsabilmente assicura benefici senza rischi sociali o morali.", image: "imm7.png", choices: [] }
};

const scenarioDiv = document.getElementById("scenario");
const choicesDiv = document.getElementById("choices");

function showNode(key) {
    const node = nodes[key];
    scenarioDiv.innerHTML = `<p>${node.text}</p><img src="${node.image}" class="scenario-image">`;
    choicesDiv.innerHTML = "";

    if(node.choices.length === 0) {
        const end = document.createElement("p");
        end.textContent = "Fine del percorso.";
        choicesDiv.appendChild(end);
        
        const restartBtn = document.createElement("button");
        restartBtn.textContent = "Ricomincia";
        restartBtn.className = "restart-button";
        restartBtn.onclick = () => showNode("start");
        choicesDiv.appendChild(restartBtn);
    }

    node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.className = "choice-button";
        btn.onclick = () => showNode(choice.next);
        choicesDiv.appendChild(btn);
    });
}

// Avvio
showNode("start");
</script>

</main>
</body>
</html>
