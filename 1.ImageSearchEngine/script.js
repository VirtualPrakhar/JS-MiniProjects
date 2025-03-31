//We only want our Unsplash API Access Key 
// 4kMyYTfaxk32Xdr4umd9LpMa0EDKE5kd83IoT21t4Qk


let input = document.querySelector(".search-box input");
let btn = document.querySelector(".btn button");
let images = document.querySelector(".images");
let load = document.querySelector("#load");
// let download = document.querySelector(".download");

const accessKey="4kMyYTfaxk32Xdr4umd9LpMa0EDKE5kd83IoT21t4Qk";
let page=1;
let keyword="";
function download(imgurl){
    fetch(imgurl).then(res=>res.blob()).then(file=>{
        let a = document.createElement("a");
        a.href = URL.createObjectURL(file);
        a.download = new Date().getTime();
        a.click();

    }).catch(()=>alert("Download Failed"))
}

async function getResponse() {
    keyword = input.value;
    let url= `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=11`;
    let response = await fetch(url);
    let data = await response.json();
    let results = data.results;
    if(page == 1){
        images.innerHTML ="";
    }
    load.style.display ="block";

    console.log(results);

    results.map((result)=>{
        let li = document.createElement("li");
        li.classList.add("image");
        let html = `<img src="${result.urls.small}" alt="img" class="photo">
                <div class="details">
                    <div class="user">
                        <img src="camera.svg" alt="camera image">
                        <span>${result.alt_description}</span>
                    </div>
                    <div class="download" onclick=download("${result.urls.small}")>
                        <img src="download.svg" alt="download image">
                    </div>
                </div>`
                li.innerHTML = html;
                images.appendChild(li);
    })
}
btn.addEventListener("click",()=>{
    page=1;
    getResponse();
})
load.addEventListener("click",()=>{
    page++;
    getResponse();
})
input.addEventListener("keyup",(e)=>{
    page=1;
    if(e.key == "Enter"){
        getResponse();
    }
    
})