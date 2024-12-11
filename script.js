document.getElementById('profiiliForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);

    alert('Profiili tallennettu!');
});


function searchRecipes() {
    let query = document.getElementById('search').value.toLowerCase();
    let recipeList = document.getElementById('recipeList');


    recipeList.innerHTML = ''; 

    recipes.forEach(function(recipe) {
        if (recipe.toLowerCase().includes(query)) {
            let div = document.createElement('div');
            div.textContent = recipe;
            recipeList.appendChild(div);
        }
    });
}
