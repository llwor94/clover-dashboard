import community from '../../lib/community'

const spaces = async () => {
  try {
    const data = await community.getSpaces()

    return data
  } catch (e) {
    console.error(e)
  }
}

export { spaces }
