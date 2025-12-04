function filterQuestions() {
    const subject = document.getElementById("subjectSelect").value;
    const difficulty = document.getElementById("difficultySelect").value;
    const qaSection = document.getElementById("qaSection");

    qaSection.innerHTML = "";

    if (!subject || !difficulty) {
        qaSection.innerHTML = "<p>Please select both subject and difficulty.</p>";
        return;
    }

    const filtered = questions.filter(q =>
        q.subject === subject && q.difficulty === difficulty
    );

    if (filtered.length === 0) {
        qaSection.innerHTML = "<p>No questions found.</p>";
        return;
    }

    filtered.forEach(item => {
        const card = document.createElement("div");
        card.className = "question-card";

        card.innerHTML = `
            <h3>${item.question}</h3>
            <p>${item.answer}</p>
        `;

        qaSection.appendChild(card);
    });
}
