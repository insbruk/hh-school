export const polyfillExample =
`
console.log('implementation', Array.prototype.toReversed)
const originalToReversed = Array.prototype.toReversed

Array.prototype.toReversed = undefined
console.log('implementation', Array.prototype.toReversed)

const fruits = ['apple', 'banana', 'grape']
fruits.toReversed()


Array.prototype.toReversed = function () {
    const newArray = [...this]
    const reversedArray = newArray.reverse()
    console.log('reversed!')
    return reversedArray
}
fruits.toReversed()

Array.prototype.toReversed = originalToReversed
console.log(Array.prototype.toReversed)

fruits.toReversed()
`
