

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

const loadcategoriesVideos = (id) => {
    
    const url = `
    https://openapi.programming-hero.com/api/phero-tube/category/${id}
    `
    console.log(url)

    fetch(url)
    .then((res) => res.json())
    .then ((data) => displayvideos(data.category))

}

function displayCategoris(categories){
    
    const categoriesContainer = document.getElementById("category-container");
    for(let cat of categories){
        // console.log(cat)

        const cetagoridiv = document.createElement("div");
        cetagoridiv.innerHTML = `
         
         <button id="btn-${cat.category_id}" onclick = "loadcategoriesVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white" > ${cat.category}</button>
        `

        categoriesContainer.appendChild(cetagoridiv);
    }
}

const displayvideos = (videos) => {
    
    const videocontainer = document.getElementById("video-container");

    videocontainer.innerHTML = "";

    if(videos.length ==0) {
         videocontainer.innerHTML = `
         
          <div class="py-20 col-span-full flex flex-col justify-center items-center text-center">
            <img class="w-[120px]" src="image/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oops!! Sorry, There is no content here</h2>
        </div>
         `;
         return;

    }
    videos.forEach(video => {
        console.log(video);
     
        const videoCard = document.createElement("div")
        videoCard.innerHTML =   `
             <div class="card bg-base-100  ">
            <figure class="relative">
                <img
                class = "w-full h-[170px] object-cover"
                src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-sm text-white bg-black px-2 rounded">3hrs 56 min ago</span>
            </figure>
            <div class=" flex gap-3 px-0 py-5 ">
                <div class="profile">
                   <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                        <img src="${video.authors[0].profile_picture}" />
                    </div>
                    </div>
                </div>
                <div class="into">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-sm text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-sm text-gray-400">${video.others.views}</p>
                </div>   
                
            </div>
            </div>  
        `
        videocontainer.append(videoCard)
        
    });

}

loadCetagories();
