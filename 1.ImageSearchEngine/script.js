//We only want our Unsplash API Access Key 
// 4kMyYTfaxk32Xdr4umd9LpMa0EDKE5kd83IoT21t4Qk


let input = document.querySelector(".search-box input");
let btn = document.querySelector(".btn button");

const accessKey="4kMyYTfaxk32Xdr4umd9LpMa0EDKE5kd83IoT21t4Qk";
let page=1;
let keyword="";

async function getResponse() {
    keyword = input.value;
    let url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}`;
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;
    console.log(results);
    results.map((result)=>{
        let li = document.createElement("li");
        li.classList.add("image");
        let html = `<img src="${result}" alt="list-images" class="photo">
                <div class="details">
                    <div class="user">
                        <img src="camera.svg" alt="camera image">
                        <span>Iron man</span>
                    </div>
                    <div class="download">
                        <img src="download.svg" alt="download image">
                    </div>
                </div>`
    })
}
btn.addEventListener("click",()=>{
    page=1;
    getResponse();
})
