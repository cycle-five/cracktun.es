### What is Homotopy Type Theory?

_(For the person on the street)_

At its heart, mathematics is about _things_ and the _relationships_ between them. Homotopy type theory (HoTT) is a new way of organizing those things and relationships.

Think of it like this:

- You have **objects** (like apples, chairs, or numbers).
    
- You have **collections of objects** (like “all apples,” “all chairs,” or “all numbers”).
    
- And you have **ways of saying when two objects are the same** (like saying two apples are equally red, or two numbers are equal).
    

Now, here’s the twist: in HoTT, the idea of “sameness” isn’t always simple. Sometimes there’s only one clear way to say two things are the same. Other times, there might be _several different but equally valid_ ways.

For example:

- If a collection is so simple that there’s at most one way to compare any two things in it, that’s like a **yes-or-no fact**. (“Is this collection empty?” Yes or no.)
    
- If a collection has distinct objects, but each equality is straightforward, that’s like an ordinary **set** (like the set of numbers 1, 2, and 3).
    
- But sometimes, there can be _multiple ways_ to match one collection with another. That’s like saying the set of positive numbers is “the same as” the set of negative numbers—but there are two different ways to line them up: (1 → –1, 2 → –2, …) or (1 → –2, 2 → –1, …).
    

When that happens, sameness itself starts to feel richer—it’s not just “yes or no,” it’s more like a **web of possibilities**.

And this idea doesn’t stop: you can talk about equalities between equalities, and equalities between _those_, and so on, forever. HoTT has a name for this tower of relationships: **∞-groupoids**.

So, in plain terms:  
Homotopy type theory is a way of thinking about mathematics where _equality itself has layers_. Instead of just asking “are these two things the same?”, it asks “in how many ways can they be the same—and how do those ways relate to each other?”