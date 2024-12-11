document.getElementById('profiiliForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    // Tallentaminen voisi olla vaikka paikallisesti selaimessa (localStorage)
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    alert('Profiili tallennettu!');
});

// Reseptihaku
function searchRecipes() {
    let query = document.getElementById('search').value.toLowerCase();
    let recipeList = document.getElementById('recipeList');

    // Esimerkkinä reseptit
    let recipes = [
        'Makaroonilaatikko: 400g jauhelihaa, 7dl maitoa, makaroonia, 3 kananmunaa, uuni 200 astetta, ', 
        'Kaalikääryleet',
        'Karjalanpiirakat'
    ];

    recipeList.innerHTML = ''; // Tyhjennetään aikaisemmat tulokset

    recipes.forEach(function(recipe) {
        if (recipe.toLowerCase().includes(query)) {
            let div = document.createElement('div');
            div.textContent = recipe;
            recipeList.appendChild(div);
        }
    });
}