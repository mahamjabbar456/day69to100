/********************
 * HTMLIMAGEELEMENT *
 ********************/

const imageElement : HTMLImageElement = document.createElement("img");
imageElement.src = "image.src";
imageElement.alt = "My image";

if(imageElement.complete){
    console.log(`Image dimension : ${imageElement.naturalWidth} X ${imageElement.naturalHeight}`);
}
else{
    imageElement.addEventListener("load",()=>{
        console.log(`Image dimension : ${imageElement.naturalWidth} X ${imageElement.naturalHeight}`);
    })
}