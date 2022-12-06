import { instagramGetUrl } from './other.js'

async function instagram(url) {
let result = await instagramGetUrl(url)
return result
}

export {
instagram
}