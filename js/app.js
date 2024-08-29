let counter=0;
document.getElementById('imageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
   counter++;
    const fileInput = document.getElementById('photo');
    const ItemName = document.getElementById('ItemName').value;
    // alert(ItemName);
    const  Selection= document.getElementById('selection').value;
    const  Quantity= document.getElementById('qty').value;
    const  Price= document.getElementById('price').value;
    const  Description= document.getElementById('desc').value;

    const file = fileInput.files[0];
    // console.log(file);

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




