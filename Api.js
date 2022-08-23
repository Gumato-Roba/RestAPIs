
//script.js
const products = document.getElementById("products");
const fruList = document.getElementById("fruList");
const vegList = document.getElementById("vegList");
const prodHeader = document.getElementById("prodHeader");
const fruitHeader = document.getElementById("fruitHeader");
const vegHeader = document.getElementById("vegHeader");

//Fetch Item
async function getdata(item){
  const response = await fetch("http://localhost:5000/"+item)
  .then((response)=>{
   return response.json();
   }).then((data)=>{
    data.forEach((product) => {
     const li = document.createElement("li");
     if (item != "products") {
      li.innerHTML = product["name"];
      if (item =='products/fruits') {
       fruList.style.display='block';
       fruitHeader.style.display='block';
       fruList.appendChild(li);
      }else{
       vegHeader.style.display='block';
       vegList.style.display='block';
       vegList.appendChild(li);
      }
     }else{
      li.innerHTML = product["name"].concat("<br/>").concat(product["category"]);
      prodHeader.style.display='block';
      products.style.display='block';
      products.appendChild(li);
     }
     
   });
 })
}

const queryString = window.location.search;
//get the query part
const query = queryString.split('?')[1];

//hide tha page headers
vegList.style.display='none';
fruList.style.display='none';
products.style.display='none';
prodHeader.style.display='none';
fruitHeader.style.display='none';
vegHeader.style.display='none';


//Display result
console.log(query);
getdata(query);




 