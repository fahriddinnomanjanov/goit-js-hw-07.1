const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const ulGallery = document.getElementById('gallery')

// const makeGallaryImages = images.map(image => {
    // ulGallery.insertAdjacentHTML(`src='${image.url}', alt='${image.alt}'`)
// })

const makeGallaryImages = images.map(image => {
    const listImagesEl = document.createElement('li')
    listImagesEl.classList.add('gallery_list')
    const createImage = document.createElement('img')
    createImage.classList.add('gallery_img')
    createImage.src = image.url
    createImage.alt = image.alt
    // createImage.style.width = '300px'
    // createImage.style.height = '200px'
    // listImagesEl.style.display = 'flex'

    listImagesEl.append(createImage)
    ulGallery.append(listImagesEl)
    console.log(createImage);
})


// const makeGallaryImages = images => images.map(image => {
//     const listImagesEl = document.createElement('li')
//     const createImage = document.createElement('img')
//     createImage.src = image.url
//     createImage.alt = image.alt
//     createImage.style.width = '400px'
// listImagesEl.append(createImage)
//     ulGallery.append(listImagesEl)
//     console.log(createImage);
// })

// const element = makeGallaryImages(images)
// ulGallery.append(element)

