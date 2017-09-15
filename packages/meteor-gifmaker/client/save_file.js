Meteor.saveFile = function (ev) {
  FS.Utility.eachFile(ev, file => {
    const newFile = new FS.File(file)

    Images.insert(newFile, (error, result) => {
      if (error) {
        // console.log('Error uploading the image')
      } else {
        // console.log('Image uplaod success')
      }
    })
  })
}
