const loadPhone = async (searchText=13, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const divContainer = document.getElementById('phone-container');
    divContainer.textContent='';
// display show all utton
    const showAll = document.getElementById('show-all-container');
    if(phones.length > 12  ){
        showAll.classList.remove('hidden')
    }else{
        showAll.classList.add('hidden')
    }
    // console.log('is show all ', isShowAll)
    // display show only 1st 12
    if(!isShowAll){
        phones = phones.slice(0,12)
    };

    phones.forEach(phone =>{
        // console.log(phone)
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
                <button onclick="showDetailsBtn('${phone.slug}');showAll_modal.showModal()" class="btn bg-[#0D6EFD] text-white hover:text-black">Show Details</button>
                </div>
            </div>
        `;
        divContainer.appendChild(phoneCard) 
    });
    // hide toggelespinner
    toggleSpinner(false);
}

// handle search
const handleSearch = (isShowAll) =>{
    toggleSpinner(true);
    const inputField = document.getElementById('search-field');
    const searchField = inputField.value;
    // inputField.value = '';
    console.log(searchField)
    loadPhone(searchField, isShowAll)
}
const toggleSpinner = (isLoading)  =>{
    const loadingSpinner = document.getElementById('loading-spinner')
    if(isLoading){
        loadingSpinner.classList.remove('hidden')
    }else{
        loadingSpinner.classList.add('hidden')

    }
}
// handle show all

const handleShowAll = () =>{
    handleSearch(true)
}

// click show details open modal
const showDetailsBtn = async (id) =>{
    console.log(id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    displayPhoneDetails(data.data);
}
const displayPhoneDetails =(phone)=>{
    console.log(phone)
    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML=`
         <figure class="bg-blue-50 flex justify-center">
         <img class="p-5" src="${phone.image}" alt="Shoes" /></figure>
        <h2 class=" text-2xl font-bold">${phone.name}</h2>
        <p class=" text-gray-600 text-lg">There are many variations of passages of available, but the majority have suffered</p>
        <h2 class=" text-black  font-bold">Storage: <span class=" text-gray-400 text-xs">${phone?.mainFeatures?.storage}</span></h2>
        <h2 class=" text-black font-bold">Display Size: <span class=" text-gray-400 text-xs">${phone?.mainFeatures?.displaySize}</span></h2>
        <h2 class="text-black  font-bold">Memory: <span class=" text-gray-400 text-xs">${phone?.slug}</span></h2>
        <h2 class="text-black  font-bold">Release Date: <span class=" text-gray-400 text-xs">${phone?.releaseDate}</span></h2>
        <h2 class="text-black  font-bold">Band: <span class=" text-gray-400 text-xs">${phone?.brand}</span></h2>
        <h2 class="text-black  font-bold">Chip Set: <span class=" text-gray-400 text-xs">${phone?.mainFeatures?.chipSet}</span></h2>
    `
};


loadPhone();





