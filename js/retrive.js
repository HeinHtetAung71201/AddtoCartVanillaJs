let items=document.getElementsByClassName("sales");
let itemsList= document.querySelector(".itemSection");
// console.log(items);
//Displaying
// console.log("worked"); 
    if (localStorage.length>0) {
        // console.log("worked");
        for(let i=1; i<=localStorage.length;i++){
        const storedData = localStorage.getItem(`Item ${i}`);
        // console.log("storedData"+storedData);
        const formData = JSON.parse(storedData);
        // console.log("formData"+formData);
        
        // console.log(formData);
        itemsList.innerHTML+=(` <div class="card col-3 p-3 me-4 mb-5" style="width: auto;">
                <img src='${formData.img}' class="card-img-top" alt="">
                <div class="card-body">
                <p class="card-text">${formData.name}</p>
                <p class="card-text">Price: ${formData.price}</p>
                </div>
                <div class="">
                            <button class="btn btn-primary" id='${i}' onClick="Clicked(this)">Add Item</button>
                </div>
            </div>`);
    } 
}
    else {
        // alert('No data found in localStorage.');
        itemsList.innerHTML=`
        <div class="col-12  w-100 bg-secondary d-flex justify-content-center align-items-center " style="height: 500px !important;">
            No items are not added!
        </div>`;
    }
    
    //click
    // let addToCart=0;
    
    let NoOfItem=0;
    
    function Clicked(el){
        // el.preventDefault()
        let NUM=document.querySelector("#NumItems");

        // addToCart++;
        NoOfItem=sessionStorage.length+1;
        console.log(NoOfItem);
        // console.log(addToCart);
        // const storedData = localStorage.getItem(`Item ${el.id}`);
        // const formData = JSON.parse(storedData);
        // console.log(formData.name);
        NUM.innerText=NoOfItem;
       const storedData = localStorage.getItem(`Item ${el.id}`);
        // console.log(storedData);
        const formData = JSON.parse(storedData);
        // console.log(formData.name);
        // console.log(formData.price);
        // console.log(typeof(formData));
        let name=formData.name;
        let value=formData.price;
      
            // console.log(id);
        const carriedData={
            itemName:name,
            itemPrice:value,
        };
        sessionStorage.setItem(`cart${NoOfItem}`,JSON.stringify(carriedData)); 
        

    } 
    // function getCookie(name) {
    //     var nameEQ = name + "=";
    //     var cookies = document.cookie.split(';');

    //     for(var i = 0; i < cookies.length; i++) {
    //         var cookie = cookies[i].trim();
    //         if (cookie.indexOf(nameEQ) === 0) {
    //             return decodeURIComponent(cookie.substring(nameEQ.length));
    //         }
    //     }

    //     return null;
    // }
    
