import { CollectionExtensions } from 'meteor/lai:collection-extensions'

if (Meteor.isServer) {
  process.env.LOG_COLLECTIONS = 1
  if ((process.env.LOG_COLLECTIONS || 0) < 1) return

  let started = false
  Meteor.startup(() => {
    started = true
  })

  CollectionExtensions.addExtension(function (name, options) {
    this.before.find(() => {
      if (started && name) {
        console.trace('FIND', name, ...arguments)
      }
    })
  })
}
