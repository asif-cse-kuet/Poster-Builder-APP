let heading_opt = document.getElementById('heading-options');
let heading = document.getElementById('heading');
let img_opt = document.getElementById('image-options');
let img = document.getElementById('image');
let description_opt = document.getElementById('description-options');
let description = document.getElementById('description');
let head_svg = document.getElementById('svg-heading');
let img_svg = document.getElementById('svg-image');
let des_svg = document.getElementById('svg-description');


//addEventListener for heading button options
heading_opt.addEventListener('click',() =>{
    heading.classList.toggle('hidden');
    heading_opt.classList.toggle('hidden');
    itemCheck();
});
//addEventListener for heading-part hiding option
head_svg.addEventListener('click',() =>{
    heading_opt.classList.toggle('hidden');
    heading.classList.toggle('hidden');
    itemNotCheck();
});



//addEventListener for image button options
img_opt.addEventListener('click',() =>{
    img.classList.toggle('hidden');
    img_opt.classList.toggle('hidden');
    itemCheck();
});
//addEventListener for img-part
img_svg.addEventListener('click',() =>{
    img_opt.classList.toggle('hidden');
    img.classList.toggle('hidden');
    itemNotCheck();
});


//addEventListener for description button options
description_opt.addEventListener('click',() =>{
    description.classList.toggle('hidden');
    description_opt.classList.toggle('hidden');
    itemCheck();
});
//addEventListener for description-part
des_svg.addEventListener('click',() =>{
    description_opt.classList.toggle('hidden');
    description.classList.toggle('hidden');
    itemNotCheck();
});

//Item Text Field Hiding Function
function itemCheck(){
    if((heading_opt.classList.contains('hidden'))&&(description_opt.classList.contains('hidden'))&&(img_opt.classList.contains('hidden')))
    {
        document.getElementById('item-option').classList.toggle('hidden');
    }
}


//Item Text Field Appearance Function
function itemNotCheck(){
    if((heading.classList.contains('hidden'))||(description.classList.contains('hidden'))||(img.classList.contains('hidden')))
    {
        itemopt = document.getElementById('item-option');
        //checking if the item-text is already visible or not
        if(itemopt.classList.contains('hidden')){
            itemopt.classList.toggle('hidden');
        }
    }
}



// Live Preview Function
function updatePreview() {
    const imageInput = document.getElementById('imageInput');
    const headlineInput = document.getElementById('headlineInput').value;
    const descriptionInput = document.getElementById('descriptionInput').value;
    const livePreview = document.getElementById('livePreview');
    const livePreviewDescription = document.getElementById('liveDescription');

    if (imageInput.files.length > 0) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const image = `<img src="${event.target.result}" class="my-4" alt="Uploaded Image" />`;
        livePreview.innerHTML = headlineInput + image;
        livePreviewDescription.textContent = descriptionInput;
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      livePreview.innerHTML = headlineInput;
      livePreviewDescription.textContent = descriptionInput;
    }
  }

  //addEventListener for internal heading alignment options(Preview)
  let head_right = document.getElementById('right');
  let head_left = document.getElementById('left');
  let head_center = document.getElementById('center');
  head_right.addEventListener('click',() =>{
    livePreview.style.textAlign = 'right';
  });
  head_left.addEventListener('click',() =>{
    livePreview.style.textAlign = 'left';
  });
  head_center.addEventListener('click',() =>{
    livePreview.style.textAlign = 'center';
  });


//addEventListener for internal heading coloring options(Preview)
  let head_blue = document.getElementById('blue');
  let head_black = document.getElementById('black');
  let head_green = document.getElementById('green');
  head_blue.addEventListener('click',() =>{
    livePreview.style.color = 'blue';
  });
  head_black.addEventListener('click',() =>{
    livePreview.style.color = 'black';
  });
  head_green.addEventListener('click',() =>{
    livePreview.style.color = 'green';
  });

  
  // Download Image Function
  function downloadImage() {
    const livePreview = document.getElementById('livePreview');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const content = livePreview.innerHTML;

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = content;

    const containerWidth = tempDiv.offsetWidth;
    const containerHeight = tempDiv.offsetHeight;

    canvas.width = containerWidth;
    canvas.height = containerHeight;

    context.clearRect(0, 0, containerWidth, containerHeight);
    context.fillStyle = '#FFFFFF';
    context.fillRect(0, 0, containerWidth, containerHeight);

    const imgElements = tempDiv.getElementsByTagName('img');

    // Preload images and draw on the canvas once loaded
    Promise.all([...imgElements].map(img => {
      return new Promise(resolve => {
        img.onload = () => resolve();
        img.onerror = () => resolve();
      });
    })).then(() => {
      [...imgElements].forEach(img => {
        context.drawImage(img, img.offsetLeft, img.offsetTop, img.width, img.height);
      });

      const downloadLink = document.createElement('a');
      downloadLink.download = 'content_preview.png';
      downloadLink.href = canvas.toDataURL('image/png');
      downloadLink.click();
    });
  }





//Preview Event Listener (Right Section Rendering Method)
document.getElementById('headlineInput').addEventListener('input', updatePreview);
document.getElementById('descriptionInput').addEventListener('input', updatePreview);
document.getElementById('imageInput').addEventListener('change', updatePreview);
document.getElementById('downloadBtn').addEventListener('click', downloadImage);

