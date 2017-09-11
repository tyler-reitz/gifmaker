import { Meteor } from 'meteor/meteor'
import { Template } from 'meteor/templating'

import './home.html'

Template.body.events({
  'change input[type="number"]'(ev) {
    console.log(ev.target.value)
  },
  'dragover #dropDiv'(ev) {
    ev.preventDefault()
  },
  'drop #dropDiv'(ev) {
    ev.preventDefault()

    Meteor.saveFile(ev)
  },
  'click button[type="submit"]'(ev) {
    ev.preventDefault()

    const ms = document.querySelector('input[type=number').value
    const mount = document.getElementById('display')

    Meteor.submit(ev, ms, mount)
  },
  'click button[type="reset"]'(ev) {
    ev.preventDefault()
    console.log('Reset!')

    Meteor.resetImages()
  }
})

Template.gifmaker.events({
  'change input': function(ev) {
    Meteor.saveFile(ev)
  }
})