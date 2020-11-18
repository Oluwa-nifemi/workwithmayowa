export const classNames = (...klasses) => klasses.filter(className => Boolean(className)).join(" ")

export const convertTo3By3Array = (array) => {
  return array.reduce((currentImages, image) => {
    let currentArray = currentImages[currentImages.length - 1];
    if(currentArray.length === 3){
      currentArray = []
      currentImages.push(currentArray)
    }
    currentArray.push(image)

    return currentImages
  }, [[]])
}
