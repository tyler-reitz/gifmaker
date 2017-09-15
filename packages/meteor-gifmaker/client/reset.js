Meteor.resetImages = function (ev) {
  Images.find({}).forEach(img => {
    Images.remove(img._id)
  })
}