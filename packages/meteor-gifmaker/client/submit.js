Meteor.submit = function (event, millisecs, mountPoint) {

  millisecs = millisecs ? (millisecs / 1000) : 0.1
  const images = []
  
  Images.find().forEach(file => images.push(file.url()))

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