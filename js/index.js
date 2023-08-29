const loadPhone = () =>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = phones =>{
    const phoneContainer = document.getElementById('phone-container')
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card w-96 bg-base-100 shadow-xl`
        phoneCard.innerHTML =`
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">Shoes!</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <div class="card-actions justify-end">
             <button class="btn btn-primary">Buy Now</button>
           </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
}
loadPhone()