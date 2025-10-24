const products = [
  { name: "Smart Watch", price: "₹2,999", img: "https://tse2.mm.bing.net/th/id/OIP.mKFLpspnQHrT8XLEws3bhwHaHa?pid=Api&P=0&h=180" },
  { name: "Wireless Earbuds", price: "₹1,499", img: "https://tse2.mm.bing.net/th/id/OIP.i_0MyUcCXVZpY78Gw8PDwgHaHa?pid=Api&P=0&h=180" },
  { name: "Sneakers", price: "₹2,799", img: "https://tse1.mm.bing.net/th/id/OIP.ptd8RKPwMW_1aEMTUc-OogHaD4?pid=Api&P=0&h=180" },
  { name: "Sunglasses", price: "₹999", img: "https://tse3.mm.bing.net/th/id/OIP.v5bCEiiAwA1f2fSXyth9hAHaDR?pid=Api&P=0&h=180" },
  { name: "Backpack", price: "₹1,299", img: "https://tse3.mm.bing.net/th/id/OIP.iuU-8DRmR78XzP_yKL5NMgHaI0?pid=Api&P=0&h=180" },
  { name: "T-Shirt", price: "₹599", img: "https://tse3.mm.bing.net/th/id/OIP.zlU_VppiYPbUaXm2rUOJ4AHaHa?pid=Api&P=0&h=180" },
  { name: "Jeans", price: "₹1,199", img: "https://sp.yimg.com/ib/th?id=OPAC.NmnhyFm6rcLC3w474C474&o=5&pid=21.1&w=160&h=105" },
  { name: "TV", price: "₹45,999", img: "https://tse1.mm.bing.net/th/id/OIP.iOUCfUa3d5PIr4t81tyQngHaEK?pid=Api&P=0&h=180" },
  { name: "Gift Box", price: "₹599", img: "https://tse1.mm.bing.net/th/id/OIP.chZoZ-UYS7e9zcsvIU9N8AHaFj?pid=Api&P=0&h=180" },
  { name: "Kurta Set", price: "₹1,199", img: "https://sp.yimg.com/ib/th/id/OIP.OyBR9RAwB3vvygMoIbU7_gAAAA?pid=Api&w=148&h=148&c=7&dpr=2&rs=1" },
  { name: "Women slippers", price: "₹999", img: "https://tse4.mm.bing.net/th/id/OIP.yiSbFbI1VcjldMuYRGTplwHaHa?pid=Api&P=0&h=180" },
  { name: "Lunch Box", price: "₹599", img: "https://tse1.mm.bing.net/th/id/OIP.yplwLRY8A48iK1XoWq-YSwHaHa?pid=Api&P=0&h=180" },
  { name: "Mobiles", price: "₹45,999", img: "https://tse4.mm.bing.net/th/id/OIP.09uF1Zok3o-AiDDCRpjWmAHaEE?pid=Api&P=0&h=180" },
  
];

const productList = document.getElementById('product-list');

function displayProducts() {
  productList.innerHTML = products.map(p => `
    <div class="product-card">
      <img src="${p.img}" alt="${p.name}" />
      <h3>${p.name}</h3>
      <p>${p.price}</p>
      <button class="add-btn">Add to Cart</button>
    </div>
  `).join('');
}

displayProducts();
