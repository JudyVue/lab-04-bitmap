- Access the buffer of a bitmap file
  - Break into components
    - Convert header field buffer to string
    - Access, parse & store, file size
    - Access & store offset (location) for pixel array
- Access the color array
- Figure out what RGB byte sequence is
  - (x3) run through each color byte in color array, convert to
  - save modified bitmap locally as 1/2/3/4
  - see which is black, red, green, blue
- Manipulate bitmap in >3 ways:
  - Invert colors
  - Grayscale colors
  - R/G/B scale
- [Optional]