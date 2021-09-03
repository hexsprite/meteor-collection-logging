import { Meteor } from 'meteor/meteor'
import { onPageLoad } from 'meteor/server-render'
import { Mongo } from 'meteor/mongo'

//
const docs = new Mongo.Collection('docs')

Meteor.startup(() => {
  // Code to run on server startup.
  console.log(`Greetings from ${module.id}!`)
  docs.find({ _id: 'sdgsdsg' })
})

onPageLoad((sink) => {
  // Code to run on every request.
  sink.renderIntoElementById(
    'server-render-target',
    `Server time: ${new Date()}`
  )
})
