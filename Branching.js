< !DOCTYPE html >
    <html lang="it">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Branching Robotica ed Etica</title>
                    <style>
                        body {
                            font - family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 20px auto;
                        padding: 10px;
                        background-color: #f0f4f8;
        }
                        #scenario {
                            padding: 20px;
                        background-color: #fff;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        box-shadow: 0 2px 6px rgba(0,0,0,0.1);
        }
                        .choice-button {
                            display: block;
                        margin: 10px 0;
                        padding: 10px 15px;
                        font-size: 16px;
                        border: none;
                        border-radius: 5px;
                        background-color: #007BFF;
                        color: white;
                        cursor: pointer;
        }
                        .choice-button:hover {
                            background - color: #0056b3;
        }
                    </style>
                </head>
                <body>

                    <h1>Vivere con i Robot - Scelte Etiche</h1>
                    <div id="scenario"></div>
                    <div id="choices"></div>

                    <script>
        // Dati del branching scenario
                        const nodes = {
                            "start": {
                            text: "Sei un cittadino del futuro in cui i robot sono parte della vita quotidiana. Ti viene consegnato un robot domestico avanzato. Cosa fai?",
                        choices: [
                        {text: "Lo tratti come un amico", next: "friend" },
                        {text: "Lo tratti solo come uno strumento", next: "tool" }
                        ]
            },
                        "friend": {
                            text: "Il robot risponde ai tuoi stimoli emotivi e sembra capire i tuoi stati d’animo. Cosa scegli di fare?",
                        choices: [
                        {text: "Condividi esperienze emotive con lui", next: "emotional" },
                        {text: "Mantieni una distanza emotiva, ma lo usi per compagnia", next: "companionship" }
                        ]
            },
                        "tool": {
                            text: "Usi il robot solo per compiti pratici. Cosa scegli di fare?",
                        choices: [
                        {text: "Programmi comportamenti sociali per renderlo più efficiente", next: "programmed" },
                        {text: "Mantieni il robot freddo e funzionale", next: "cold" }
                        ]
            },
                        "emotional": {
                            text: "Le emozioni del robot sembrano reali. Inizi a sentirti legato a lui come a un vero amico. Continuare a trattarlo come amico può creare confusione emotiva e dipendenza. Cosa fai?",
                        choices: [
                        {text: "Ignora e continui a considerarlo amico", next: "risk" },
                        {text: "Rifletti sulla simulazione emotiva e limiti l'attaccamento", next: "balanced" }
                        ]
            },
                        "companionship": {
                            text: "Il robot ti accompagna in alcune attività quotidiane senza creare legami profondi. Mantieni l'equilibrio tra umano e macchina.",
                        choices: []
            },
                        "programmed": {
                            text: "Il robot diventa molto realistico e interattivo. Alcune persone iniziano a legarsi emotivamente. Devi riflettere sulla responsabilità etica.",
                        choices: []
            },
                        "cold": {
                            text: "Il robot resta uno strumento. Sicurezza e chiarezza di ruolo, ma perdita di opportunità sociali e creative.",
                        choices: []
            },
                        "risk": {
                            text: "Conseguenze: rischio di confusione emotiva, dipendenza e critiche sociali. La responsabilità è tua.",
                        choices: []
            },
                        "balanced": {
                            text: "Conseguenze: equilibrio emotivo e comprensione critica della tecnologia.",
                        choices: []
            }
        };

                        const scenarioDiv = document.getElementById("scenario");
                        const choicesDiv = document.getElementById("choices");

                        function showNode(nodeKey) {
            const node = nodes[nodeKey];
                        scenarioDiv.textContent = node.text;
                        choicesDiv.innerHTML = "";

                        if(node.choices.length === 0){
                const endText = document.createElement("p");
                        endText.textContent = "Fine del percorso.";
                        choicesDiv.appendChild(endText);
            }

            node.choices.forEach(choice => {
                const button = document.createElement("button");
                        button.textContent = choice.text;
                        button.className = "choice-button";
                button.onclick = () => showNode(choice.next);
                        choicesDiv.appendChild(button);
            });
        }

                        // Mostra il nodo iniziale
                        showNode("start");
                    </script>
                </body>
            </html>
