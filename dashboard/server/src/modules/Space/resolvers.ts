import community from '../../lib/community'

const spaces = async () => {
  try {
    const data = await community.getSpaces()

    return Array.isArray(data) && data.map(({ id, name }) => ({ id, name }))
  } catch (e) {
    console.error(e)
  }
}

export { spaces }
