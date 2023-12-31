// Function to render All Basic Body Components components
function renderHeadings(callback) {
  const parentDiv = document.getElementById('app');
  parentDiv.classList.add('h-full');
  parentDiv.innerHTML = `
          <div id="appStart" class="flex h-full pb-4 pt-4">
          <!--Left Section-->
          <div class="mx-2 p-2 w-1/2 mt-4 border-dotted border-blue-700 border rounded-lg bg-gray-100 relative">

          <!--Components-->
          <p class="text-[18px] -top-6 bg-white justify-center items-center rounded-lg p-[5px] relative flex">
              <svg class="h-7 p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
              <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
          </svg>
          Components</p>

          <!--All items with item-box options-->
          <div id="items">
              <!--Item box for Heading-->
              <div id="heading" class="border relative border-gray-300 border rounded-lg pt-5 p-2 hidden">
                  <svg id="svg-heading" class="absolute w-5 -top-2 -right-1 bg-white rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                  <p class="absolute -top-2 left-1 w-12 text-center bg-gray-300 rounded text-[9px]">Heading</p>
                  <input type="text" id="headlineInput" placeholder="Dashboard" class="w-full p-2 border rounded">
                  <!--Options Into Heading-->
                  <div class="flex justify-between m-1">
                  <!--Items left-->
                  <div class="flex">
                      <button id="left" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                      </svg>                                   
                      <strong> left </strong>
                      </button>
                      <button id="center" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                      </svg>                  
                      <strong> center </strong>
                      </button>
                      <button id="right" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                      </svg>                  
                      <strong> right </strong>
                      </button>
                  </div>

                  <!--Items right-->
                  <div class="flex">
                      <button id="blue" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
                      </svg>                                   
                      <strong> blue </strong>
                      </button>
                      <button id="black" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5" />
                      </svg>                  
                      <strong> black </strong>
                      </button>
                      <button id="green" class="bg-white flex flex-row m-1 p-1 text-[8px] rounded-lg">
                      <svg class="w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" clip-rule="evenodd" />
                      </svg>                  
                      <strong> green </strong>
                      </button>
                  </div>
                  </div>
              </div>

              <!--Item box for Image-->
              <div id="image" class="border relative mt-7 pt-5 border-gray-300 border rounded p-2 hidden">
                  <p class="absolute -top-2 left-1 w-16 text-center bg-gray-300 rounded text-[9px]">Poster image</p>
                  <svg id="svg-image" class="absolute w-5 -top-2 -right-1 bg-white rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
                  </svg>
                  <label for="imageInput" class="cursor-pointer">
                  <div class="border bg-white border-dashed border-gray-400 rounded-lg h-40 flex items-center justify-center">
                      <svg class="w-6 absolute top-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                      </svg>
                      <div class="text-gray-400 p-1 text-center text-sm"><strong> Click to upload</strong> or drag and drop</div>
                      <div class="text-gray-400 absolute bottom-10 p-4 text-center text-sm">SVG, PNG, JPG or GIF (Max 800x400 px)</div>
                  </div>
                  </label>
                  <input type="file" id="imageInput" class="hidden">
              </div>
              

              <!--Item box for Description-->
              <div id="description" class="border mt-7 pt-5 relative border-gray-300 border rounded-lg p-2 hidden">
              <svg id="svg-description" class="absolute w-5 -top-2 -right-1 bg-white rounded-full p-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                  <path fill-rule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clip-rule="evenodd" />
              </svg>
              <p class="absolute -top-2 left-2 w-14 text-center bg-gray-300 rounded text-[9px]">Description</p>
              <textarea id="descriptionInput" placeholder="Write your thoughts..." class="w-full h-20 p-2 border rounded"></textarea>
              </div>



              <!--Item Options Only-->
              <div>
              <div id="item-option" class="flex justify-center">
                  <strong>Items</strong>
              </div>
              <div id="options" class="flex m-1 justify-center">
                  <button id="heading-options" class="bg-yellow-300 basis-1/3 h-10 m-1 text-yellow-600 rounded-lg hover:bg-yellow-400 hover:text-black">
                  Heading
                  </button>
                  <button id="image-options" class="bg-green-300 basis-1/3 h-10 m-1 text-green-600 rounded-lg hover:bg-green-400 hover:text-black">
                  Image
                  </button>
                  <button id="description-options" class="bg-blue-200 basis-1/3 h-10 m-1 text-blue-500 rounded-lg hover:bg-blue-400 hover:text-black">
                  Description
                  </button>
              </div>
              </div>
          </div>


          </div>

          <!--Right Section-->
          <div class="mx-2 p-2 w-1/2 mt-4 border-dotted border-blue-700 border rounded-lg bg-gray-100 relative">

          <!--Preview-->
          <p class="text-[18px] -top-6 bg-white justify-center items-center rounded-lg p-[5px] relative flex">
              <svg class="h-7 p-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
              </svg>
              Preview
          </p>

          <!--Live Preview-->
          <!--<div class="absolute grid grid-row-2 px-4 py-0">-->
          <div id="livePreview" class="py-0 text-[20px] font-bold whitespace-pre-wrap"></div>
          <div id="liveDescription" class="py-0 text-[10px] whitespace-pre-wrap"></div>
          <!-- </div> -->

          <!--Image Download Option-->
          <div class="absolute left-4 bottom-6">
              <button id="downloadBtn" class=" text-black text-[12px]">Download</button>
          </div>
          </div>

      </div>
  `;

  if (typeof callback === 'function') {
      callback();
    }
}



// Wait for the page to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  // Calling the renderHeadings function from render.js
  renderHeadings(renderFunctionality);
});

function renderFunctionality(){
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

  }