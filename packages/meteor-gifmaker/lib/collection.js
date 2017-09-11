Images = new FS.Collection('Images', {
  stores: [new FS.Store.GridFS('images')],
  filter: {
    allow: {
      contentTypes: ['image/*'],
      extensions: ['png', 'jpg', 'jpeg', 'gif']
    },
    onInvalid: function (mssg) {
      console.log(mssg)
    }
  }
})

Images.allow({
  insert: function () { return true },
  update: function () { return true },
  remove: function () { return true },
  download: function () { return true }
})
