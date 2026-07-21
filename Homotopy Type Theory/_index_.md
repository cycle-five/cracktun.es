# Homotopy Type Theory for the Layman 20250926

Wherein I start with section 1. from the FAQ [here](https://ncatlab.org/nlab/show/homotopy+type+theory+FAQ) and try to improve it using different LLM models. Let's start with the orignal. The prompt I used was just "Please Re-write this so it’s more accessible to non-mathematicians." then the paragraph verbatim.

## Original

Homotopy type theory is a theory of objects, which we call terms, collections of objects, which we call types, and equalities between any two objects in a collection, which we call identity types.

One fundamental aspect of mathematics is that equalities between different collections of objects behave differently from each other. If we have a type where for all terms have exactly one identity between them, this is called a proposition or a truth value. The type with no terms is trivially a proposition, as every single one of the nonexistent terms have exactly one identity between them.

However, not all types are propositions: take the type with two distinct terms a and b, there is no identity between a and b. The identity types between two terms here are propositions, and the types are called sets.

Still, not all types are sets: take the type of sets with two terms, the first one with terms a and b, and the second one with terms c and d. There are two ways to say that these types are equal: by adding an identity between a and c and between b and d, or by adding an identity between a and d and between b and c. Thus, the identity types between the two sets is set-valued, rather than proposition-valued, and the type is a groupoid, rather than a set. In this way, we could say that, for example, the set of positive integers is equal to the set of negative integers, or that the set of complex numbers is equal to the set of ordered pairs of real numbers.

One could continue the process, yielding 2-groupoids whose identity types are groupoids, 3-groupoids whose identity types are 2-groupoids, and so forth. And finally, one could have types whose identity types are general types: these types are also known as ∞-groupoids.


## [Gab AI](gabai.md)

## [Claude](claude.md)

## [Gemini](gemini.md)

## [ChatGPT](chatgpt.md)

```
ChatGPT actually did ask for some clarification so I'll put it's second response here as well.
```

## [ChatGPT2](chatgpt2.md)
