

function loadCetagories (){

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoris(data.categories));

}

function displayCategoris(categories){
    
    const categoriesContainer = document.getElementById("category-container");
    for(let cat of categories){
        console.log(cat)

        const cetagoridiv = document.createElement("div");
        cetagoridiv.innerHTML = `
         
         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white" > ${cat.category}</button>
        `

        categoriesContainer.appendChild(cetagoridiv);
    }
}

loadCetagories();