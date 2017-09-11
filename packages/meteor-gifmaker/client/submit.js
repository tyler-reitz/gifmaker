Meteor.submit = function (event, millisecs, mountPoint) {

  millisecs = millisecs ? (millisecs / 1000) : 100
  const images = []
  
  Images.find().forEach(file => images.push(file.url()))

  console.log(images)

  gifshot.createGIF({'images': images, 'interval': millisecs }, obj => {
    if (!obj.error) {
      const link = document.createElement('a')
      link.href = obj.image
      link.download = true
      const image = document.createElement('img')
      image.src = obj.image
      link.appendChild(image)
      mountPoint.prepend(link)
    } else {
      console.log('Gifshot error!')
    }
  })
}