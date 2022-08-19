

 //script.js
const products = document.getElementById("products");
const fruList = document.getElementById("fruList");
const vegList = document.getElementById("vegList");

//Fetch Item
async function getdata(item,element){
  const response = await fetch("http://localhost:5000/"+item)
  .then((response)=>{
   return response.json();
   }).then((data)=>{
    data.forEach((product) => {
     const li = document.createElement("li");
     if (item != "products") {
      li.innerHTML = product["name"];
     }else{
      li.innerHTML = product["name"].concat("<br/>").concat(product["category"]);
     }
     element.appendChild(li);
   });
 })
}

//Products
getdata("/products",products);

//fruits
getdata("products/fruits",fruList);

//vegetables
getdata("products/vegetables",vegList);