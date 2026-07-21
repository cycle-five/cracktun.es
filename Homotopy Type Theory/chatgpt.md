Homotopy type theory (HoTT) is a way of talking about three things:

1. **Objects** (which we call _terms_),
    
2. **Collections of objects** (which we call _types_), and
    
3. **Ways of saying two objects are the same** (which we call _identities_).
    

A key idea in mathematics is that equality can behave differently depending on what kinds of objects you’re talking about.

For example, suppose you have a type where, for every two objects in it, there is exactly one way to say they’re equal. Such a type is called a **proposition** or a **truth value**. The simplest case is the empty type (the collection with no objects at all). Since there are no objects to compare, it automatically satisfies the rule—trivially, every non-existent object is “equal to itself” in the only possible way.

But not every type is like this. Imagine a type with just two objects, call them _a_ and _b_. There’s no way to declare _a_ and _b_ equal, since they’re distinct. Still, if you look at the identity of _a_ with itself, or _b_ with itself, each of those behaves like a proposition. Types like this are called **sets**.

Yet, even sets are not the end of the story. Take a type that itself contains two sets:

- one set with objects _a_ and _b_,
    
- another set with objects _c_ and _d_.
    

Now, how can we say these two sets are equal? There are two different valid ways:

- Match _a_ with _c_ and _b_ with _d_, or
    
- Match _a_ with _d_ and _b_ with _c_.
    

So here, the _identity_ between the two sets isn’t just a single proposition—it’s itself set-like, because there are multiple distinct equalities. A type like this is called a **groupoid**, which is a richer structure than a set. In everyday terms, this kind of reasoning lets us say, for example, that the set of positive integers is “the same as” the set of negative integers, or that the set of complex numbers is “the same as” the set of pairs of real numbers—there can be more than one valid way to match things up.

And this process keeps going. You can have:

- **2-groupoids**, where the equalities between equalities behave like groupoids,
    
- **3-groupoids**, where equalities between those behave like 2-groupoids,
    
- and so on without end.
    

The most general case is when you allow this to continue indefinitely. Such types are called **∞-groupoids**.
