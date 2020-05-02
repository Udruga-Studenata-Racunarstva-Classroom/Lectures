# JS-1

## Intro

### History

- JavaScript vs Java - Brendan Eich -> Mocha, Netscape -> LiveScript
- JavaScript vs JS - Oracle -> Sun -> Netscape
- JavaScript is an artifact of marketing shenanigans, some people suggest using **JS**, or **ES20xx** instead.
- Official name of the language is the **ECMAScript**, specified by TC39 and formalized by the ECMA standards body.

### Language Specification

- [The Web Rules Everything About (JS)](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#the-web-rules-everything-about-js)
- [Not All (Web) JS...](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#not-all-web-js) - `alert("Hello, JS!");`, `console.*` etc. are specified withing JS environment, not withing JS. `alert(..)` call is JS, but `alert` itself is really just an enviroment specification (implementation)!
- "Most of the cross-browser differences people complain about with 'JS is so inconsistent!' claims are actually due to differences in how those environment behaviors work, not in how the JS itself works."
- JavaScript is dynamically typed, types of variables are generally not known at compile time.

### Backwards and forwards compatibility

- JS is Backwards-compatible && !Forwards-compatible. "We don't break the web!" - TC39
- Pseudo forward-compatibility is achieved by **transpiling**. New language features are based upon old language features/syntax and can always be "transpiled" back.
- HTML and CSS, by contrast, are forwards-compatible but not backwards-compatible. The new unrecognized CSS/HTML in old browsers is skipped over, while the rest of the CSS/HTML would be processed accordingly. Old HTML/CSS code might not work (or work the same) in new browsers.
- Compiled or Interpreted language? [What's in an Interpretation?](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch1.md#whats-in-an-interpretation)

### Programing Paradigms

- Typical paradigm-level code categories include procedural, object-oriented (OO/classes), and functional (FP):
  - **Procedural style** organizes code in a top-down, linear progression through a pre-determined set of operations, usually collected together in related units called procedures.
  - **OO style** organizes code by collecting logic and data together into units called classes.
  - **FP style** organizes code into functions (pure computations as opposed to procedures), and the adaptations of those functions as values.
- Paradigms are neither right nor wrong. They're orientations that guide and mold how programmers approach problems and solutions, how they structure and maintain their code.
- Some languages are heavily slanted toward one paradigm - C is procedural, Java/C++ are almost entirely class oriented, and Haskell is FP through and through.
- JS is...? **Multi-paradigm language**!

## Basics

### Syntax and features

- Comments
- **Primitive types:** boolean, null, undefined, number, string, symbol
- **Standard objects:** Object, Array, Function, Boolean, Symbol, Error, Number, String, RegExp, Math, Set
- Variable declaration and initialization - `undefined`
- **Hoisting** - mechanism where variables and function declarations are moved to the top of their scope before code execution.
- String Immutability
- [Functions are First-class citizens](http://ryanchristiani.com/functions-as-first-class-citizens-in-javascript/)
- `push()`, `pop()`, `shift()`, `unshift()`
- Global vs Local scope
- "use strict"
- **Type coercion** and "==" vs "===" - (un)coercive equality
- Ternary operator
- **JSON**
- Recursion...

## Links

- [Kyle Simpsons "Get Started" - CH1](https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started)
- [JavaScript Essentials: Types & Data Structures](https://codeburst.io/javascript-essentials-types-data-structures-3ac039f9877b)
- [Kyle Simpsons "Get Started" - CH2](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/get-started/ch2.md)

## Vježba

- [JS-1 repo](https://github.com/Volki312/JS-1)
- [JS-1 invite link](https://classroom.github.com/a/vWxR5yzc)
