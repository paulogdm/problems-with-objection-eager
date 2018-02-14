const Martian = require('./Models/Martian.js')
const Thing = require('./Models/Thing.js')

const main = async () => {
  const firstborn = await Martian.query().insert({name: 'Yep'})
  const eviltwin = await Martian.query().insert({name: 'Nope'})

  await Thing.query().insert({name: 'Thing 1', martianid: parseInt(firstborn.id)})
  await Thing.query().insert({name: 'Thing 2', martianid: parseInt(firstborn.id)})
  await Thing.query().insert({name: 'Thing 3', martianid: parseInt(eviltwin.id)})
  await Thing.query().insert({name: 'Thing 4'})

  try {
    const result1 = await Martian.query().eager('things')
    console.info(result1)
    // Fails here
    const result2 = await Thing.query().eager('martian')
    console.info(result2)
  } catch (err) {
    console.error(err.toString())
  }
}

main()
