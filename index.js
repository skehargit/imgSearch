const searchForm=document.getElementById("searchForm");
const searchBox=document.getElementById("searchBox");
const searchResult=document.getElementById("search_result");
const showMore=document.getElementById("show_more");

let keyword="";
let page=1;
let key="-6mdxCJftT02kGtxzxTKxxCQzAsSb4ewHU_bvGBtigw";
async function searchImages(){

    keyword=searchBox.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${key}&per_page=6`;

    const response=await fetch(url);
    const data=await response.json();
    console.log(data);
    const results=data.results;
    results.map((result)=>{
        const image=document.createElement('img');
        image.src=result.urls.small;
        const imglink=document.createElement('a');
        imglink.href=result.links.html;
        imglink.target='_blank';
        imglink.appendChild(image);
        searchResult.appendChild(imglink);
    })
    page++;
    showMore.style.display="block"
}
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    searchImages();
})
showMore.addEventListener("click",()=>{
    page++;
    searchImages();
})
document.getElementById("newbtn").addEventListener("click",()=>{
    location.reload();
})