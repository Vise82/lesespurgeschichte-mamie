// ========================================
// Lesespurgeschichte: Une surprise pour Mamie
// script.js (mit Bildpfaden + LocalStorage + Mehrfach-Konfetti)
// ========================================

// Story-Daten
const storyData = {
    1: {
        text: `<h2>Abschnitt 1</h2>
               <p>Bonjour ! Je m'appelle Chloé.<br>
               Aujourd'hui, c'est le 12 mars.<br>
               C'est l'anniversaire de ma grand-mère.</p>
               <p>Elle a soixante-dix ans.<br>
               À la maison, tout le monde prépare une surprise.</p>
               <p>Je cherche d'abord ma mère.</p>
               <p>Dans la cuisine, je vois une femme avec un jus d'orange et du pain.</p>`,
        image: 'images/scene1_kitchen.png',
        choices: [
            { text: "Si c'est ma mère → 2", next: 2 },
            { text: "Si c'est ma sœur → 5", next: 5 }
        ]
    },
    2: {
        text: `<h2>Abschnitt 2</h2>
               <p>La femme dit :<br>
               — Bonjour Chloé ! Je m'appelle Camille.</p>
               <p>Camille est la mère de Chloé.<br>
               Elle prépare le petit déjeuner.</p>
               <p>Camille dit :<br>
               — Va dans le salon. Ton frère est là. Après, allez ensemble à la boulangerie.</p>`,
        image: 'images/scene1_kitchen.png',
        choices: [
            { text: "Si Camille est la mère → 3", next: 3 },
            { text: "Si Camille est la grand-mère → 6", next: 6 }
        ]
    },
    3: {
        text: `<h2>Abschnitt 3</h2>
               <p>Dans le salon, Chloé voit un garçon avec un ballon bleu.</p>
               <p>Elle demande :<br>
               — Comment tu t'appelles ?</p>
               <p>Il répond :<br>
               — Je m'appelle Nathan.</p>
               <p>Nathan dit :<br>
               — Salut Chloé ! Oui, je suis ton frère. On va à la boulangerie ?</p>`,
        image: 'images/scene2_livingroom.png',
        choices: [
            { text: "Si Nathan est le frère → 4", next: 4 },
            { text: "Si Nathan est le père → 7", next: 7 }
        ]
    },
    4: {
        text: `<h2>Abschnitt 4</h2>
               <p>Chloé et Nathan vont à la boulangerie.</p>
               <p>La boulangère dit :<br>
               — Bonjour les enfants !</p>
               <p>Chloé répond :<br>
               — Bonjour Madame. Je voudrais un gâteau pour ma grand-mère, s'il vous plaît.</p>
               <p>La boulangère demande :<br>
               — Quel gâteau ?</p>`,
        image: 'images/scene3_bakery.png',
        choices: [
            { text: "Si Chloé choisit un gâteau pour l'anniversaire → 8", next: 8 },
            { text: "Si Chloé achète vingt baguettes → 9", next: 9 }
        ]
    },
    5: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Dans la cuisine, Chloé voit une femme adulte.<br>
               Ce n'est pas la sœur.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 1", next: 1 }
        ],
        isError: true
    },
    6: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Camille est la mère de Chloé.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 2", next: 2 }
        ],
        isError: true
    },
    7: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Nathan est le frère de Chloé.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 3", next: 3 }
        ],
        isError: true
    },
    8: {
        text: `<h2>Abschnitt 8</h2>
               <p>Chloé regarde les gâteaux.<br>
               Il y a :</p>
               <ul>
                   <li>un gâteau au chocolat</li>
                   <li>un gâteau aux fraises</li>
               </ul>
               <p>Nathan dit :<br>
               — Mamie aime le chocolat.</p>
               <p>Chloé dit :<br>
               — Alors, un gâteau au chocolat, s'il vous plaît.</p>
               <p>La boulangère demande :<br>
               — C'est pour combien de personnes ?</p>`,
        image: 'images/scene3_bakery.png',
        choices: [
            { text: "Si Chloé doit compter la famille → 10", next: 10 },
            { text: "Si Chloé va à l'école → 11", next: 11 }
        ]
    },
    9: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Pour un anniversaire, Chloé veut un gâteau.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 4", next: 4 }
        ],
        isError: true
    },
    10: {
        text: `<h2>Abschnitt 10</h2>
               <p>Chloé compte :</p>
               <ul>
                   <li>la grand-mère</li>
                   <li>le grand-père</li>
                   <li>la mère</li>
                   <li>le père</li>
                   <li>le frère</li>
                   <li>la sœur</li>
                   <li>le bébé</li>
                   <li>Chloé</li>
               </ul>
               <p>Ça fait huit personnes.</p>
               <p>Chloé dit :<br>
               — C'est pour huit personnes.</p>
               <p>La boulangère demande :<br>
               — Quel âge a votre grand-mère ?</p>
               <p>Chloé répond :<br>
               — Elle a soixante-dix ans.</p>`,
        image: 'images/scene3_bakery.png',
        choices: [
            { text: "Si tout est correct → 12", next: 12 },
            { text: "Si Mamie a dix ans → 13", next: 13 }
        ]
    },
    11: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Chloé est à la boulangerie, pas à l'école.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 8", next: 8 }
        ],
        isError: true
    },
    12: {
        text: `<h2>🎉 Bravo!</h2>
               <p>Chloé et Nathan rentrent à la maison avec le gâteau.</p>
               <p>À quatre heures, Mamie arrive.</p>
               <p>Toute la famille crie :<br>
               — Joyeux anniversaire !</p>
               <p>Mamie est très contente.<br>
               Elle dit :<br>
               — Merci beaucoup !</p>
               <p>Chloé sourit.<br>
               La surprise est réussie.</p>
               <p><strong>Bravo ! Tu as trouvé la bonne piste.</strong></p>`,
        image: 'images/scene4_birthday.png', // ← NEU: Abschluss-Illustration
        isSuccess: true
    },
    13: {
        text: `<h2>❌ Fehler!</h2>
               <p>Non, ce n'est pas correct.<br>
               Mamie n'a pas dix ans.<br>
               Elle a soixante-dix ans.</p>`,
        image: 'images/error.png',
        choices: [
            { text: "↩️ Retourne à 10", next: 10 }
        ],
        isError: true
    }
};

// Pfad-Tracking
let currentPath = [1];
let currentSection = 1;

// ========================================
// LocalStorage
// ========================================

function saveProgress() {
    localStorage.setItem('lesespurPath', JSON.stringify(currentPath));
    localStorage.setItem('lesespurSection', currentSection);
}

function loadProgress() {
    const savedPath = localStorage.getItem('lesespurPath');
    const savedSection = localStorage.getItem('lesespurSection');
    if (savedPath && savedSection) {
        currentPath = JSON.parse(savedPath);
        currentSection = parseInt(savedSection, 10);
        return true;
    }
    return false;
}

function resetProgress() {
    localStorage.removeItem('lesespurPath');
    localStorage.removeItem('lesespurSection');
    currentPath = [1];
    currentSection = 1;
    showSection(1);
}

// ========================================
// Konfetti (Mehrfach-Konfetti-Variante)
// ========================================

function celebrateWithMultipleConfetti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 }
        });
    }, 200);
    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.7 }
        });
    }, 400);
}

// ========================================
// Rendering
// ========================================

function showSection(sectionNumber) {
    const section = storyData[sectionNumber];
    const content = document.getElementById('story-content');

    let html = section.text;

    if (section.image) {
        html += `<img src="${section.image}" alt="Illustration" class="story-image">`;
    }

    if (section.choices) {
        html += '<div class="choices">';
        section.choices.forEach(choice => {
            html += `<button class="choice-btn" onclick="goToSection(${choice.next})">${choice.text}</button>`;
        });
        html += '</div>';
    }

    content.innerHTML = html;

    if (!currentPath.includes(sectionNumber)) {
        currentPath.push(sectionNumber);
    }
    document.getElementById('path').textContent = currentPath.join(' → ');

    saveProgress();

    if (section.isSuccess) {
        setTimeout(() => {
            celebrateWithMultipleConfetti();
        }, 300);
        checkSolution();
    }
}

function goToSection(sectionNumber) {
    currentSection = sectionNumber;
    showSection(sectionNumber);
    window.scrollTo(0, 0);
}

function checkSolution() {
    const correctPath = [1, 2, 3, 4, 8, 10, 12];
    const userPath = currentPath.filter(n => !storyData[n]?.isError);

    if (JSON.stringify(userPath) === JSON.stringify(correctPath)) {
        setTimeout(() => {
            alert('🎉 Perfekt! Du hast den direkten Weg gefunden! ⭐⭐⭐');
        }, 600);
    } else {
        setTimeout(() => {
            alert('✅ Geschafft! Du hast die Geschichte gelöst! ⭐⭐');
        }, 600);
    }
}

// Hilfskarten Toggle
document.getElementById('help-btn')?.addEventListener('click', () => {
    document.getElementById('help-cards').classList.toggle('hidden');
});

// Initialisierung
window.addEventListener('DOMContentLoaded', () => {
    const hasProgress = loadProgress();
    if (hasProgress) {
        const cont = confirm('Du hast eine gespeicherte Geschichte. Möchtest du fortfahren?');
        if (cont) {
            showSection(currentSection);
            return;
        } else {
            resetProgress();
            return;
        }
    }
    showSection(1);
});
