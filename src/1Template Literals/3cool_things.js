/* Cool things you could do */
const multiLineString = `
    This is a multi line string that quotation marks cannot do.
    Quotation marks/Inverted commmas do not need to be escaped by backslash here.
    e.g. Don't need to write \", can just write " or ' (Convenience 100%)
    Spaces and line breaks are reflected.
    // comments cannot be written here since it makes the whole area a string
`
console.log(multiLineString)

// Can use String.raw`string` to get the raw string and don't need to escape the escape character (\)
const goodByeDoubleBackslash = String.raw`
https://textart.io/art/tag/rocket/1

         /\
        |==|
        |  |
        |  |
        |  |
       /____\
       |    |
       |    |
       |    |
       |    |
      /| |  |\
     / | |  | \
    /__|_|__|__\
       /_\/_\
       ######
        ####

`