document.addEventListener("DOMContentLoaded", () => {
    showPage("loginPage");

    // Handle login
    document.getElementById("loginForm").addEventListener("submit", function (e) {
        e.preventDefault();
        showPage("recommendationPage");
        displayMobileRecommendations();
    });

    // Handle signup
    document.getElementById("signupForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Account created! You can now log in.");
        showPage("loginPage");
    });

    // Handle forgot password
    document.getElementById("forgotPasswordForm").addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Password reset link sent to your email.");
        showPage("loginPage");
    });
});

// Function to show pages dynamically
function showPage(pageId) {
    document.querySelectorAll(".container > div").forEach(div => div.classList.add("hidden"));
    document.getElementById(pageId).classList.remove("hidden");
}

// Function to logout
function logout() {
    alert("Logged out successfully!");
    showPage("loginPage");
}

// Function to display mobile recommendations
function displayMobileRecommendations() {
    const mobiles = [
        { name: "iPhone 15 Pro", brand: "Apple", price: "₹1,29,900" },
        { name: "Samsung Galaxy S23 Ultra", brand: "Samsung", price: "₹1,24,999" },
        { name: "Google Pixel 8 Pro", brand: "Google", price: "₹1,06,999" },
        { name: "Redmi Note 12 Pro", brand: "Redmi", price: "₹24,999" },
        { name: "Vivo X100 Pro", brand: "Vivo", price: "₹89,999" },
        { name: "Oppo Find X6 Pro", brand: "Oppo", price: "₹79,999" }
    ];

    const recommendationsDiv = document.getElementById("recommendations");
    recommendationsDiv.innerHTML = "";

    mobiles.forEach(mobile => {
        recommendationsDiv.innerHTML += `
            <div class="mobile-container">
                <h3>${mobile.name}</h3>
                <p><strong>Brand:</strong> ${mobile.brand}</p>
                <p><strong>Price:</strong> ${mobile.price}</p>
            </div>
        `;
    });
}

// Function to search mobiles
function searchMobile() {
    const query = document.getElementById("searchBar").value.toLowerCase();
    document.querySelectorAll(".mobile-container").forEach(mobile => {
        mobile.style.display = mobile.innerText.toLowerCase().includes(query) ? "block" : "none";
    });
}
