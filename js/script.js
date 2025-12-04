function renderQuestions() {
    const area = document.getElementById("areaFilter").value;
    const diff = document.getElementById("difficultyFilter").value;
    const search = document.getElementById("searchBox").value.toLowerCase();
    const container = document.getElementById("questionsContainer");

    container.innerHTML = "";

    const filtered = questions.filter(q =>
        (area === "All" || q.area === area) &&
        (diff === "All" || q.difficulty === diff) &&
        q.question.toLowerCase().includes(search)
    );

    filtered.forEach(q => {
        const card = document.createElement("div");
        card.className = "question-card";

        card.innerHTML = `
            <h3 onclick="toggleAnswer(this)">${q.question}</h3>
            <p>${q.answer}</p>
        `;

        container.appendChild(card);
    });
}

function toggleAnswer(el) {
    const p = el.nextElementSibling;
    p.style.display = p.style.display === "block" ? "none" : "block";
}

document.getElementById("areaFilter").onchange = renderQuestions;
document.getElementById("difficultyFilter").onchange = renderQuestions;
document.getElementById("searchBox").onkeyup = renderQuestions;

document.getElementById("resetBtn").onclick = () => {
    document.getElementById("areaFilter").value = "All";
    document.getElementById("difficultyFilter").value = "All";
    document.getElementById("searchBox").value = "";
    renderQuestions();
};

renderQuestions();
