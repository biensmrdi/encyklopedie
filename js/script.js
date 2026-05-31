function searchFunction() {
    const input = document.getElementById("searchInput").value.toLowerCase().trim();
    
    if (input === "html") {
        window.location.href = "pojem1.html";
    } else if (input === "css") {
        window.location.href = "pojem2.html";
    } else if (input === "javascript" || input === "js") {
        window.location.href = "pojem3.html";
    } else if (input === "git") {
        window.location.href = "pojem4.html";
    } else if (input === "responsive" || input === "responzivni web") {
        window.location.href = "pojem5.html";
    } else {
        alert("Pojem nenalezen! Zkuste: HTML, CSS, JavaScript, Git nebo Responsive.");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                searchFunction();
            }
        });
    }

    const container = document.querySelector(".fade-in");
    if (container) {
        setTimeout(() => {
            container.classList.add("visible");
        }, 50);
    }
});