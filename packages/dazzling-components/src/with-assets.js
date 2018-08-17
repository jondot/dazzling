const imageFix = loader => f => ({
  ...f,
  image: loader(f.image)
})
export default loader => config => ({
  ...config,
  logo: loader(config.logo),
  usedIn: config.usedIn.map(imageFix(loader)),
  features: config.features.map(imageFix(loader))
})
