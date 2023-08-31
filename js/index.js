const loadPhone = () =>{
    fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(res => res.json())
    .then(data => displayPhone(data.data))
}

const displayPhone = phones =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent= '';
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12 ){
      showAll.classList.remove('hidden')
    }else{
      showAll.classList.add('hidden')
    }
    phones = phones.slice(0, 12);
    phones.forEach(phone =>{
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList =`card w-96 bg-base-100 shadow-xl`
        phoneCard.innerHTML =`
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
         <div class="card-body">
           <h2 class="card-title">${phone.phone_name}</h2>
           <p>If a dog chews shoes whose shoes does he choose?</p>
           <h3 class=" text-2xl font-bold">$999</h3>
            <div class="card-actions justify-center">
            <button class="btn bg-[#0D6EFD] text-white hover:text-black">Buy Now</button>
           </div>
        </div>
        `;
        phoneContainer.appendChild(phoneCard);
    });
    toggleSpinner(false)
}
// handle search
const searchHandle = () =>{
  toggleSpinner(true)
  const inputField =document.getElementById('search-field');
  const searchField =inputField.value;
  inputField.value = '';
  loadPhone(searchField)
}
const toggleSpinner =isLoading =>{
  const loadingSpinner =document.getElementById('loading-spinner')
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }else{
    loadingSpinner.classList.add('hidden')
  }
}
// loadPhone()