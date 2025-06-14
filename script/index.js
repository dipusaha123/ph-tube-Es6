

function loadCetagories (){

    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res) => res.json())
    .then((data) => displayCategoris(data.categories));

}


// {
//     "category_id": "1003",
//     "video_id": "aaaf",
//     "thumbnail": "https://i.ibb.co/5LRQkKF/stick-and-stones.jpg",
//     "title": "Sticks & Stones",
//     "authors": [
//         {
//             "profile_picture": "https://i.ibb.co/rdTZrCM/dev.jpg",
//             "profile_name": "Dave Chappelle",
//             "verified": true
//         }
//     ],
//     "others": {
//         "views": "113K",
//         "posted_date": ""
//     },
//     "description": "Dave Chappelle's 'Sticks & Stones' has garnered 113K views and remains a controversial yet highly engaging piece of stand-up comedy. Known for his fearless approach, Dave dives into a wide range of topics, delivering his unique perspective with wit and sharp humor. As a verified artist, Dave's comedy is raw, honest, and unapologetically funny."
// }

function loadvideos (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayvideos(data.videos))
}

function displayCategoris(categories){
    
    const categoriesContainer = document.getElementById("category-container");
    for(let cat of categories){
        // console.log(cat)

        const cetagoridiv = document.createElement("div");
        cetagoridiv.innerHTML = `
         
         <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white" > ${cat.category}</button>
        `

        categoriesContainer.appendChild(cetagoridiv);
    }
}

const displayvideos = (videos) => {
    
    const videocontainer = document.getElementById("video-container");
    videos.forEach(video => {
        console.log(video);
     
        const videoCard = document.createElement("div")
        videoCard.innerHTML =   `
        <div class="card bg-base-100  shadow-sm">
            <figure>
                <img
                src="${video.thumbnail}"
                alt="Shoes" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">${video.title}</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
            </div>   
        `
        videocontainer.append(videoCard)
        
    });

}

loadCetagories();
loadvideos();