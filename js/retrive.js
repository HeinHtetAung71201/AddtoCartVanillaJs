let items=document.getElementsByClassName("sales");
console.log(items);
//Displaying
for(let i=1; i<=localStorage.length;i++){
    const storedData = localStorage.getItem(`Item ${i}`);
    
    if (storedData) {
        const formData = JSON.parse(storedData);
        let divParent= document.createElement('div');
        let img= document.createElement('img');
        let divChild=document.createElement('div');
        let p=document.createElement('p');
        divChild.appendChild(p);
        divParent.appendChild(divChild);
        divParent.appendChild(img);
        let items=document.querySelector(".items");
    console.log(items);
     items.appendChild(divParent);
        // Create an img element to display the stored image
        // const img = document.createElement('img');
        img.src = formData.img;
        p.textContent=formData.name;
        // document.body.appendChild(divParent);
    
        // Display the stored text
        // const textElement = document.createElement('p');
        // textElement.textContent = formData.text;
        // document.body.appendChild(textElement);
    } else {
        alert('No data found in localStorage.');
    }
}