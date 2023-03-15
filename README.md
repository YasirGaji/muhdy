# Muhdy Portfolio Website

[in progress]

A portfolio website. this time i am using [next.js](https://nextjs.org/), [chakra](https://chakra-ui.com/), [framer motion](https://www.framer.com/motion/), and [three.js](https://threejs.org/).

## other tools/technology and libraries used

  ##`frontend`

  [framer motion](https://www.framer.com/motion/) for animations |

  ##`backend`

  None Yet

## What I Learned

  1. How to use Next.js
  2. How to use Chakra
  3. How to use Framer Motion
  
## Errors I Faced

  1. `SyntaxError: Named export 'chakra' not found. The requested module '@chakra-ui/system' is a CommonJS module, which may not support all module.exports as named exports.`
  `CommonJS modules can always be imported via the default export, for example using:`
  `import pkg from '@chakra-ui/system';` - I fixed this by deleting nodemodules and re-installing npm | Solution Reference - [Stack Overflow](https://github.com/chakra-ui/chakra-ui/issues/7170)

  2. `'WorkGridItem' cannot be used as a JSX component. Its return type 'void' is not a valid JSX element.` - I fixed this by adding `return` before the `WorkGridItem` component. | Solution Reference - [Stack Overflow](https://stackoverflow.com/questions/65832262/react-cannot-be-used-as-a-jsx-component-its-return-type-void-is-not-a-valid)

  3. `Type 'StaticImageData' is not assignable to type 'string'.` - I fixed this by adding `as string` after the image import. | Solution Reference - [Stack Overflow](https://stackoverflow.com/questions/65832262/react-cannot-be-used-as-a-jsx-component-its-return-type-void-is-not-a-valid)

## Current Error
  
  1. Non Yet

## [View Project](#)

