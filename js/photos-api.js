/* The very first step is to fetch the data from jsonplaceholder's website and display it on the console. 
Let's say you could see the API link of photos on their website by coding it with javascript in the data console. 
Then make some cards (maybe bootstrap card) and you will show the image on the website with html and 
the title of the image below the image.
 */
// 7:

// Load photos from the API server:
const loadPhotos = () => {
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((res) => res.json())
    .then((data) => displayPhotos(data));
};

// Display photos on the website:
const displayPhotos = (photos) => {
  photos = photos.slice(0, 30);
  const photosContainer = document.getElementById("photo-container");
  photos.forEach((photo) => {
    const div = document.createElement("div");
    div.classList.add("col");
    div.innerHTML = `
                <div class="card">
                    <img id="${photo.id}" src="${photo.thumbnailUrl}" class="card-img-top btn-load" alt="Image">
                    <div class="card-body">
                        <h5 class="card-title">${photo.title}</h5>                 
                    </div>
                </div>
            `;
    photosContainer.appendChild(div);
  });
};



document
  .getElementById("photo-container")
  .addEventListener("click", function (event) {
    // console.log(event.target.id);
    detailsLoader(event.target.id);
  });

const detailsLoader = (id) => {
  url = `https://jsonplaceholder.typicode.com/photos/${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayPhotoDetails(data));
};

const displayPhotoDetails = (data) => {
  const photoDetails = document.getElementById("photo-details");
//   console.log(data);
  const a = Object.entries(data);
  //   console.log(a);
  for (const [key, value] of a) {
    const div = document.createElement("div");
    photoDetails.innerHTML = '';
    div.classList.add("col");
    // console.log(a);
    div.innerHTML = `
      <div class="">
          <div class="">
              <h5 class="">${a[2][1]}</h5>  
              <p class="">Album ID: ${a[0][1]} Photo ID: ${a[1][1]}</p>     
          </div>
      </div>`;
    
    photoDetails.appendChild(div);
    break;
  }
  /* 
  
    
  
  
  
  data.forEach((photo) => {
      const div = document.createElement("div");
      div.classList.add("col");
      photoDetails.innerHTML = `
        <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="Image">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>  
                <p class="card-text">Album ID: ${photo.albumId}</p>               
            </div>
            <img class="card-img-bottom" src="${photo.url}" alt="Image">
        </div>`;
      photoDetails.appendChild(div);
    }); */
};

/*

// Display photo details:
const displayPhotoDetails = (photoById) => {
  const photoDetails = document.getElementById("photo-details");
  photoById.forEach((photo) => {
    const div = document.createElement("div");
    div.classList.add("col");
    photoDetails.innerHTML = `
        <div class="card">
            <img src="${photo.thumbnailUrl}" class="card-img-top" alt="Image">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>  
                <p class="card-text">Album ID: ${photo.albumId}</p>               
            </div>
            <img class="card-img-bottom" src="${photo.url}" alt="Image">
        </div>`;
    photoDetails.appendChild(div);
  });
}; */

loadPhotos();
