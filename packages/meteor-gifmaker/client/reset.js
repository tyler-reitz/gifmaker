Meteor.resetImages = function (ev) {
  console.log('Running?')
  Images.find({}).forEach(img => {
    Images.remove(img._id)
  })
}