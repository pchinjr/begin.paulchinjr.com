const Main = require('@architect/views/main.js')
exports.handler = async function Index () {
  let body = Main({
    fullname: 'Paul Chin Jr.',
    title: 'Prophet of Nicolas Cage',
    occupation: 'Head of Developer Relations at Begin.com',
    location: 'Virginia Beach, VA',
    bio: 'Paul is looking forward to hearing your story. He has spent his life exploring technology and bringing it to people where they are. Serverless, JavaScript, and OpenJS Architect are his favorite tools. Favorite food changes daily. Things Paul is super interested in: mechanical keyboards, food, business, serverless, cloud native development, the modern web.',
    email: 'paul@begin.com',
    twitter: 'paulchinjr',
    linkedin: 'paulchinjr',
    photographer: 'Paul Chin Jr.',
    service: 'Animal Crossing New Horizons',
    credit: 'https://i.imgur.com/NzbgnQP.jpg',
    image: 'https://i.imgur.com/NzbgnQP.jpg'
  })

  return {
    headers: { 'content-type': 'text/html; charset=utf8' },
    body
  }
}
