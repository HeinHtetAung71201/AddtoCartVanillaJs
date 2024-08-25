
// function handleData(event){
//     event.preventDefault();
//     const data= new FormData(event.target);
    // const value=data.get("ItemName");
    // const cates=data.get("Cates");
    // const qty=data.get("Qty");
    // const price=data.get("Price");
    // const des=data.get('Desc')
    // console.log(value,cates,qty,price,des);
    // const value = Object.fromEntries(data.entries());
    // console.log(typeof(value));
    // console.log(value.photo );
    
    //photo
    // if(value.photo){
    //     const reader= new FileReader();
    //     reader.onload= function(e)
    // }
    // console.log(reader.readAsDataURL(fileInput));
    
    //setting into localstr
    // localStorage.setItem(`value.ItemName`,value.JSON.parse())
    // let json=JSON.stringify(value);
    // localStorage.setItem(`${value.ItemName}`,json);
// }

// const form = document.querySelector('form');
// form.addEventListener('submit', handleData);

//storing
let counter=0;
document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   counter++;
    const fileInput = document.getElementById('photo');
    const ItemName = document.getElementById('ItemName').value;
    const  Selection= document.getElementById('selection').value;
    const  Quantity= document.getElementById('qty').value;
    const  Price= document.getElementById('price').value;
    const  Description= document.getElementById('desc').value;

    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const base64Image = e.target.result;

            // Create an object to store both the image and the text
            const formData = {
                img: base64Image,
                name: ItemName,
                cate: Selection,
                qty: Quantity,
                price:Price,
                desc:Description,
            };
            // counter++;
            console.log(formData);
            // Store the object as a JSON string in localStorage
            localStorage.setItem(`Item ${counter}`, JSON.stringify(formData));
            alert('Data stored in localStorage!');
        };

        // Convert the image file to a base64 string
        reader.readAsDataURL(file);
    } else {
        alert('Please select an image to upload.');
    }
});




