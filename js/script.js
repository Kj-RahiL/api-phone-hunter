const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones)
}

const displayPhones = phones => {
    const divContainer = document.getElementById('phone-container');
    phones.forEach(phone =>{
        console.log(phone)
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card shadow-xl bg-blue-50 `;
        phoneCard.innerHTML = `
            <figure><img class="pt-10" src="${phone.image}" alt="Shoes" />
            </figure>
            <div class="card-body text-center ">
                <h2 class=" text-2xl font-bold">${phone.phone_name}</h2>
                <p class=" text-gray-600 text-lg">There are many variations of passages of available, but the majority have suffered</p>
                <h3 class=" text-2xl font-bold">$999</h3>
                <div class="card-actions justify-center">
                <button class="btn bg-[#0D6EFD] text-white hover:text-black">Buy Now</button>
                </div>
            </div>
        `;
        divContainer.appendChild(phoneCard) 
    });
}

// handle search
const handleSearch = () =>{
    const inputField = document.getElementById('search-field');
    const searchField = inputField.value;
    console.log(searchField)
    loadPhone(searchField)
}

// loadPhone();

// console.log('heloo')


