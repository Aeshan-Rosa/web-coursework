document.addEventListener("DOMContentLoaded", function() {
    // Fun Facts Interactive Effects
    const facts = document.querySelectorAll(".facts li");

    facts.forEach(fact => {
        fact.addEventListener("mouseover", function() {
            fact.style.color = "#00d4ff";
            fact.style.transform = "scale(1.1)";
            fact.style.transition = "0.3s";
        });

        fact.addEventListener("mouseout", function() {
            fact.style.color = "white";
            fact.style.transform = "scale(1)";
        });

        fact.addEventListener("click", function() {
            alert(fact.innerText);
        });
    });

    // Image Hover Zoom Effect
    const images = document.querySelectorAll("img");

    images.forEach(image => {
        image.addEventListener("mouseover", function() {
            image.style.transform = "scale(1.1)";
            image.style.transition = "0.3s";
        });

        image.addEventListener("mouseout", function() {
            image.style.transform = "scale(1)";
        });
    });

    // Clickable Deep-Sea Conditions
    const conditions = document.querySelectorAll("#conditions li");

    conditions.forEach(condition => {
        condition.addEventListener("click", function() {
            alert(`Did you know? ${condition.innerText}`);
        });
    });

});
