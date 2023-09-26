import { valueInSampleApp } from 'sample'

type Main = () => Promise<void>

const main: Main = async () => {
  console.log('hello! from bun', valueInSampleApp)
}

main()
  .then(() => {
    console.log('successfully completed!')
  })
  .catch((err) => {
    console.error(err)
  })
