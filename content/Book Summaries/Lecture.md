0:00

[SQUEAKING] [RUSTLING] [CLICKING]

0:12

CASEY RODRIGUEZ: OK. So I have to admit this is extremely awkward,

0:19

lecturing to an empty room. So I have to imagine there's somebody on the other end actually listening to me at some point.

0:26

Perhaps this is what YouTube stars have to go through

0:32

at some point in their career. So what is the purpose of this course?

0:38

So this is for 18 100A, Real Analysis.

0:51

So the purpose of this course is twofold.

1:03

Really, I think the first primary purpose of this course is to gain experience with proofs.

1:16

So that means being able to read a proof,

1:23

being able to write a proof. And the second statement, or the second purpose,

1:31

which is supposed to be a way to obtain the first purpose,

1:37

is to prove statements about real numbers, functions,

1:57

and limits.

2:07

OK. So the second part, this is the analysis part, OK?

2:21

So for the first few lectures, we're going to do what maybe to some will be kind of review.

2:30

And for most of you, a lot of this material in the first few lectures will be review.

2:40

But it's a nice way to ease into the material. And things will most definitely pick up after a few lectures.

2:49

So the first set of objects we're

2:56

going to define and try to prove some statements about are sets. So definition-- and because I use a lot of shorthand,

3:12

I will mostly write Dfn from now on instead of the entire word, definition.

3:18

So a set is a collection of objects

3:39

called elements or members, OK?

3:47

Now, this course is supposed to be

3:54

probably the first really rigorous course in math that many of you will deal with.

4:01

So essentially, everything that we talk about will be rigorously and unambiguously defined.

4:09

But we do have to start somewhere. And so maybe you think this word,

4:16

"collection," is a little ambiguous. And perhaps you should.

4:22

But to actually build up set theory from the ground up

4:28

would take us quite beyond the scope of this class and too far

4:34

afield of the things that we want to do, or at least that what I want to do.

4:41

OK, so a set is just a collection of objects called elements, or members.

4:48

There is the simplest set to define:

4:55

the empty set is the set with no elements.

5:06

And we denote it by this symbol here-- a circle with a dash

5:16

through it.

5:22

OK, so with new math typically comes new notation, new symbols that you use.

5:29

So let me introduce a few shorthand notations we'll use throughout the course.

5:37

I mean, quite honestly, this is a little bit of the fun of doing higher math.

5:42

You get all these funny symbols. And a very accomplished mathematician

5:48

at the University of Chicago, one time said, you're really only interested in the math

5:54

where that has the symbols you like to write over and over again.

5:59

So some notation-- a and this symbol which this symbol, which looks like a e-S

6:07

means a is an element of S. A with a dash

6:22

through this little e means everything here but.

6:30

So a is not an element of S.

6:36

This upside down A means for all.

6:41

It's shorthand for all. Backwards E means there exists.

6:51

And a couple of more-- if you see an arrow like this, this means implies.

7:05

So I've written down one thing. This implies the next statement. I'll put an arrow between them.

7:12

And an arrow going both ways means if and only

7:21

if, meaning if I have a statement P if and only if Q, that means statement P implies Q and statement Q implies

7:31

P, all right? And if you need a quick refresher on basic logic,

7:39

you can find that in the appendix of the textbook.

7:46

OK, so that's the basic definition of set, empty set.

7:54

So set A-- another definition to set

8:04

A is subset of B, which we write A, this little symbol

8:17

that looks like a C, B If every element in A

8:26

is an element in B. Little a's in capital A means little a is in capital B.

8:39

So two sets are equal--

8:48

we write A equals B-- if A is a subset of B and B is a subset of A.

9:15

And A is a proper subset of B if A is a subset of B

9:29

and A does not equal B. And we typically

9:36

write that by A and with a dash going through a line underneath the C to signify that it's not equal.

9:45

So think of it as not, so less than or equal to, but not equal to is one way to think about it.

9:52

OK, so let me say something since I'm now

10:02

1, 2, 3 definitions in. So definitions are a fact of life when it comes to math.

10:09

In the beginning of any subject, there's going to be a lot of definitions because we have to have objects we want to talk about.

10:16

And we have to have these unambiguously defined objects. So it may seem like there's going

10:24

to be a lot of definitions now, but this will let up. And we will start proving some theorems, which

10:30

are facts, about these objects. These are the things that we're really after.

10:36

We're not really after just making up definitions. Definitions are meant to be a rigorous way

10:45

of defining an object we're interested in studying. We're interested in proving theorems, facts about them.

10:52

So again, a lot of this is just probably review.

11:01

11:09

When we describe sets, we will use these braces

11:19

and maybe list the elements in here. Or we will describe it as x in some set A,

11:29

satisfying some property P of x.

11:34

Or we won't write this x and A part. We'll just write all objects x satisfying

11:42

x, as being an element of whatever universe we're in,

11:47

that satisfy property P of x, OK? So again, you should read this as all satisfying property

11:58

P of x. So the basic examples--

12:07

and this is-- you should expect this after seeing any non-trivial definition.

12:14

If you were here, I would ask you to call me out, so I'll have to police myself.

12:19

But after every semi-interesting definition,

12:24

you should see examples, OK? This is how you actually learn about these things,

12:31

or at least digest what these things are. So we have the natural numbers, which everyone is familiar with since they started to count--

12:37

1, 2, 3, 4, and so on. We have the integers, which is 0, 1, minus 1, 2, minus 2.

12:49

So all the natural numbers, along with their additive inverses, along with the 0 element, an additive identity, we have the rational numbers.

13:01

So this is written as m over n such that m and n are integers

13:10

and n does not equal to 0.

13:15

And we have R, the real numbers, which I, as of right now,

13:29

cannot actually write down what they are in terms of set-building notation.

13:36

In fact, this will be our first goal of the course, is to give a proper description or definition of what

13:44

R actually is.

13:49

But you can think of this as you did in calculus,

13:55

as Q along with--

14:01

so rationals and irrationals, like pi and 2 and these things.

14:09

So this is fine to think about for now.

14:17

So of course, I didn't have to use these.

14:27

Maybe I'm interested in odd numbers. That's a set of numbers of the form 2m minus 1,

14:34

where m is a natural number. So this is just 1, 3, 5, and so on, OK?

14:44

And so note that we have the inclusions.

14:49

Natural numbers are contained in the integers, which are contained in the rational numbers, which are contained

14:55

in the real numbers, OK? And if you look at the history of why these things were

15:03

thought up in the first place, I mean, they were thought up to solve polynomial equations

15:11

that you couldn't solve in the number system before. Integers were created because I could not

15:17

solve the equation x plus 1 equals 0 in the natural numbers.

15:23

Rationals were thought of because I could not solve the equation 2x plus 1 equals 0 in the integers.

15:31

And the real numbers were thought of because I cannot solve the equation x squared minus 2 equals 0

15:37

in the rational numbers. Now, I can't solve the equation x squared plus 1 equals 0

15:43

in the real numbers, which led to the creation

15:48

of complex numbers. But we will not deal with complex numbers in this class. Although hopefully, if you keep studying analysis,

15:55

you go on to complex analysis, which is really a beautiful subject of study to this day.

16:07

So as I said-- let me write this here--

16:14

our first goal, real goal of the class-- and this is something to keep in mind.

16:19

We're not going to do it right now. Our first real goal is to describe what R is, OK?

16:36

I mean, if we're going to be proving statements about the real numbers, functions of real numbers, and limits,

16:42

whatever-- those limits that you learned in calculus-- then we have to be able to really describe

16:49

what we're starting with, the real numbers.

16:55

OK, so let's get back to sets, to our review of sets.

17:00

So there were some examples.

17:06

We have a few more definitions.

17:14

The union of two sets, A and B, is the set which we write--

17:24

so this is how we denote it, A U B. This

17:30

is the set of all elements x. x is in A or x is in B.

17:49

The intersection of A and B-- so this was defining the union.

17:56

This was defining the intersection--

18:02

is the set A cap B. And this is a set of all

18:10

x's so that x is in A and x is in B.

18:23

So the union is take all the things from A, take all the things from B, and put them together

18:29

in one big basket. The intersection is just take the things that A and B have in common.

18:35

The set difference of A with respect to B

18:53

is the set A backslash B. This is

19:05

the set of all elements in A such that x is not in B. The complement of A is the set A--

19:28

so this is how I'm denoting the set. The next part is how I'm defining the set.

19:34

This is a set of all elements in our universe that is not in A.

19:44

And when I say universe, I don't mean this universe necessarily.

19:50

I mean, if we're looking at subsets of R, the complement is generally with respect to R.

20:00

Or if all of our sets are subsets of Q, then our universe would be Q, the rationals.

20:06

And we're taking the complement in there.

20:12

Two sets are disjoint if their intersection is empty, OK?

20:28

So it took me quite a long time to figure out

20:35

this compliment has an E in the middle as opposed to an I, as in the compliment you would give a friend.

20:42

I had to do a lot of spell-checking in my thesis

20:47

when my advisor pointed that out. So this is just something to keep in mind. This complement has an E in the middle of it.

20:54

OK, so let me just draw a quick picture.

21:05

So this blob over here is A. This is a set B. This is a set C. In fact, let's

21:15

make this a little more-- OK, let's keep C there. Then what I have here, that's A intersect B. This bit

21:29

over here, with the lines going this way but not including this, this is A take away B, A backslash B.

21:38

And OK, so that was not meant to be

21:45

along the same direction as this one, so let's go vertical. And everything with a vertical line is A intersect B, OK?

21:59

So A backslash has the lines going this direction.

22:04

A intersect has the lines going this direction.

22:10

A union B has the lines going vertical. And C is way over here not touching any of A and B.

22:18

So A and C are disjoint and B and C are disjoint.

22:33

OK, they have nothing in common.

22:38

22:44

OK, so this was a lot of definitions.

22:54

We have not proven a single statement yet, so it's about time we do. This is probably one of the most basic theorems

23:03

one can prove at the start of a Real Analysis class or any class about proofs.

23:09

This is analogous to when you write your first Hello World

23:14

program in a programming class. So let me state the theorem, which is DeMorgan's Laws.

23:30

And the statement is the following. So if A, B, C are sets, then I have several things I can say.

23:46

23:51

The union of B and C, taking their complement, this is the intersection of the complements.

24:00

So the complement of the union is the intersection of the compliments.

24:06

If I take their intersection and take the complement, this is the union of the complements.

24:14

So the complement of the intersection is the union of the complements.

24:21

Now, these are complements, meaning I am, in some sense, taking a set difference with respect to the entire universe.

24:27

But I can make these things relative to some set A. So A take away B union C, this is the same

24:36

as A take away B intersect A take away C. Really, again,

24:45

you should think of this as a special case of one.

24:51

Or at least if you were to write the proof-- I'm not going to because it's all

24:56

going to be contained in the first two-- then you would see it's really just a proof of this guy.

25:03

A take away B intersects C equals A take away B union A

25:12

take away C, OK? So again, for a quick refresher about logic

25:22

I would look at the appendix of the textbook. In general, so let me make a few remarks

25:30

before we move on to the proof about typically how this is going to look.

25:35

So this is some remarks.

25:40

Typically, a theorem is a statement

25:47

of the type P implies Q. Let me write this out in English. If some statement P holds, then Q--

25:56

for us, it's if I have any three sets, then I have these equalities between these operations

26:03

of sets.

26:08

So the general structure you'll see of the class is I have objects which I define unambiguously.

26:13

I want to prove theorems now, meaning true statements about these objects. And the real meat is the proof part.

26:21

So what is in this mysterious guy, the proof?

26:28

It's quite simple. You start with-- you assume P, meaning what you were given,

26:43

the hypotheses, the hypothesis, P, and--

26:49

I'm going to put dots here-- through logic and most

27:00

definitely, most of the time some calculations, you arrive at Q is true.

27:12

And most proofs are ended with this little box here, OK? So most proofs have this structure.

27:22

I take my hypotheses. And these hypotheses mean something

27:30

in terms of the definitions I have given. And now, I need to use these unambiguous definitions,

27:38

along with logic and maybe some calculations, to conclude that statement Q is true.

27:45

That is the essence of a proof. That is all there is to it.

27:54

Now, that doesn't mean it's a simple thing to learn how to do. That's the point of this course.

28:00

But distilled down, that's what a proof is, OK?

28:06

And Q-- so I said P usually means something in terms

28:11

of the definitions we have. But also, Q will usually mean something in the definitions that we've given.

28:17

And so our job is to verify Q. So let's

28:22

go with proving this theorem.

28:28

And in fact, I'm only going to prove property 1. Property 2, 3, and 4 I'll likely put on the homework.

28:37

So let B and C be sets.

28:44

So I mean, this is the only hypothesis I get. I'm trying to prove that B union C

28:50

complement equals the intersection of the complements. So what does that mean?

28:55

So we want to prove. So this is-- it's quite helpful, especially

29:04

when you're first starting to do proofs, to write down what you're actually trying to prove. So even though I have this statement here,

29:13

it's an equality between two sets. Equality between two sets means something specifically, right?

29:20

We have that in our definition-- where is it-- over there that two sets

29:28

are equal if one is a subset of the other and vice versa. So that's what we have to prove.

29:34

We have to prove that the left side, B union C complement, is a subset of B complement intersect C complement and vice

29:42

versa. So we want to prove that is a subset of B and--

29:56

30:05

OK? So that's what the equality means.

30:11

That's what we have to prove. We have to prove those two statements now, OK? And that's as distilled down as far as we can go.

30:18

So let's prove this. Now, we'll prove this using, again, logic and what

30:27

these things actually are. So let's prove this first statement here.

30:35

So I have to show that every element in this set is an element of this set.

30:42

So I'll even write this down as WTS.

30:49

That means Want To Show. This is the first thing we'll show.

30:56

As we go on, I'm not going to write as much as I'm doing right now. But this is the first theorem and proof you're seeing,

31:03

so I should write down quite a bit. So the first thing we want to show

31:08

is we have this inclusion, OK? That means every element here is an element here.

31:13

So let x be in B union C complement.

31:22

And now, we're going to trace what this means. And we'll eventually arrive at x as in this.

31:28

So then x is not in B union C. That's just

31:36

the definition of the complement. Now, x is not in B union C means x is not in B and x is not in C

31:51

because the union is-- something's in the union if it's in B or C. So something's not in the union if it's not in B and not in C.

32:02

Now, this implies, simply again by the definition of what it means to be in the complement,

32:09

x is in B complement and x is in C complement.

32:15

But this, again, is simply the definition

32:23

of x being in B complement intersect C complement, OK?

32:31

So you see, we started off with an element in this guy and we showed that it's also an element of the right-hand side.

32:41

So thus, B union C complement is contained in B complement

32:51

intersect C complement. Now, we want to do this other inclusion here.

32:56

33:10

Now, this is one of those rare situations where

33:16

you get to essentially reverse the entire argument and get what you want.

33:25

But let's just go through it in a linear fashion.

33:33

Let's take something from here and show it's in here.

33:38

So let x be in the intersection of the complements. Then that means x is in B complement

33:48

and x is in C complement. That means x is not in B--

33:58

so that's this statement. That's the definition of being in the complement-- and x is not in C. That's, again,

34:07

the definition of being in the complement. Now, just like we used here in this step,

34:14

this is equivalent to-- so really, I should-- in this statement, I should have written

34:21

this statement is equivalent to this statement, but we'll remove that.

34:26

So x is not in B and x is not in C. This means x is not in their union, which

34:36

implies that x is in the complement of the union, OK?

34:46

So thus, we've proven is a subset of B.

35:00

And since we've shown both sets are

35:05

a subset of each other, that means, by the definition of two sets being equal, they are equal.

35:12

35:21

Again, this box means really nothing. It just means that's the end of the proof.

35:40

All right, let's move over here.

35:47

35:54

This is terrible.

36:10

And not everybody uses that little box to finish a proof.

36:15

Some people don't put anything. When I was in graduate school, I was a TA for this guy named Paul Sally who

36:25

was a fantastic teacher and really loved math,

36:32

who would end-- So amazing story about this guy is, when I was his TA,

36:40

he was in his 70s, I think. But he had also had diabetes.

36:47

So he had lost both of his legs beneath his knees.

36:52

He was also legally blind. And he had a patch over one eye.

36:58

So he himself often referred to himself as the a pirate mathematician.

37:06

But he would end his proofs with-- at least in his textbook-- he didn't

37:13

ask me to do this on the board, thankfully. He would end his proofs with a picture of himself

37:22

with this cob pipe that he had, very much

37:27

in the pirate fashion. Anyways, OK, moving on from things that end proofs,

37:35

let's go on to a next subject, induction.

37:45

So induction is a way to prove theorems about natural numbers,

37:53

OK? The theorem itself is more of a tool rather

38:01

than an interesting fact on its own, OK?

38:07

So let me state the theorem. And then we'll go over a couple of examples on how to use induction.

38:13

So let me recall from--

38:20

I think I just erased it. N is the natural numbers.

38:27

And it has an ordering, meaning--

38:33

so we'll precisely define what ordering means. But just in your head, this means the usual thing--

38:39

1 is less than 2 is less than 3 is less than 4.

38:47

So a property of the natural numbers, which will take as an axiom, is the well-ordering property.

38:56

39:07

So an axiom is not something you prove. You assume this about the objects

39:13

that you've defined or are studying up to this point.

39:19

And so the statement is if I take

39:26

a subset of natural numbers, which is non-empty,

39:33

then S has a least element or smallest element.

39:44

Now, what does this mean? Let me write this last statement out.

39:50

i.e. There exists an x in S--

39:56

"st" I will often write, meaning such that or so that-- such that x is less than or equal to y for all y in S, OK?

40:11

So every non-empty subset of the natural numbers has a smallest element, OK?

40:19

We're going to take that as an axiom, as just a property of the natural numbers, which

40:25

we'll assume. Now, using this axiom, we're going to prove--

40:32

it's not really often you hear it called as a principle of mathematical induction,

40:38

but this will state it as a theorem instead of a principle, whatever a principle is supposed to be. So induction, so this is due to Pascal.

41:00

Or at least in its first rigorous formulation is let Pn be a statement depending on natural number n.

41:26

OK, so maybe we have some equality between two quantities that involves a natural number n,

41:32

OK? That could be our statement P of n. Now, we're going to assume--

41:40

so what are our hypotheses about this statement? What's our if?

41:46

Assume that this statement satisfies two properties.

41:51

This first property is usually referred to as a base case.

42:01

That is that P of 1 is true. And the second property is called the inductive step.

42:10

42:18

So this statement satisfies the following property

42:24

that if you assume P of m is true,

42:31

then you can prove that P of m plus 1 is true.

42:39

So I have a statement which satisfies both of these properties, OK? In particular, since I'm assuming P of 1 is true,

42:47

by the second property, P of 2 is true. And then again by the second property, P of 3 is true.

42:53

And then P of 4, and then P of 5. And so if you followed that last line of reasoning,

42:59

this means you should be able to guess what the conclusion of this theorem is.

43:06

Then P n is true for all natural numbers, OK?

43:21

All right, so we're going to use the well-ordering property of the natural numbers to prove this theorem

43:31

about the induction. OK, so we have our assumptions.

43:41

I'm not going to-- although, I said over there let B, C be sets, I'm not going to rewrite the assumptions that we have about our statement

43:48

P. We're just going to start trying to prove P of n is true for all n.

43:54

So let me write our conclusion slightly differently.

44:02

Let S be the set of all natural numbers such that P of n

44:15

is not true. So what I want to show is that P of n is true for all n.

44:20

So that's equivalent to saying we want

44:26

to show that S is empty, OK?

44:34

The set of natural numbers where P of n is not true, this is empty. This is equivalent to saying P of n is true for all n.

44:42

And the way we're going to do this is another staple of mathematical proofs

44:57

is trying to prove this by contradiction, OK?

45:12

So what does that mean? Let me make a few comments about what that means,

45:21

proof by a contradiction.

46:01

OK, so in a proof by contradiction-- so this is-- what I'm about to write down

46:07

is not part of the proof. This is commentary not to be included in the proof.

46:13

What does it mean to say we're going to prove S is equal to the empty set by contradiction?

46:23

We're going to assume that the statement we want to prove

46:28

is false. Or not false, but we want to assume that the negation of the statement we want to prove

46:37

is true and then arrive at a false statement, OK?

46:43

So we want to assume-- this is what we're going to do.

46:48

We're going to assume the negation of the statement we want to prove-- namely, S is non-empty, OK?

46:58

And from this, we want to derive a false statement, OK?

47:14

And so if we are to do-- if we were able to do that, then--

47:22

let me just say, again, you can check in the appendix or you can just believe me that the rules of logic

47:34

then say that our initial assumption, that S was not

47:48

empty, is false to begin with, OK? So rules of logic, meaning I cannot start from a true

47:56

assumption and derive, in a logically consistent way,

48:02

a false statement, OK? That is, if we believe that the rules of logic we're using

48:09

are consistent, which that's a little bit hairy to talk about.

48:19

But for our purposes of our class,

48:24

you can believe me that the rules of logic we use-- or at least accept that the rules

48:30

of logic we're going to use are consistent and sound.

48:36

OK, so back to the proof at hand. We have this set of natural numbers

48:42

where the statement is not true. We want to show it is empty. We're going to do it by contradiction, meaning

48:48

we're going to assume the negation of the statement we want to prove-- namely, S is non-empty. And we're going to derive a false statement

48:55

from that assumption, OK? And by the rules of logic-- that means that our initial assumption--

49:02

that S is non-empty-- is, in fact, false, OK?

49:09

All right, so towards a contradiction,

49:16

suppose that S is non-empty, OK? Now, we're going to use the well-ordering property

49:23

of the natural numbers. By the well-ordering property of the natural numbers,

49:37

S has a least element, x, OK?

49:48

Now, what do we know about x?

49:58

So first off, x cannot be 1, OK? S is a set where this property does not hold.

50:03

x cannot be 1 because-- let me again rewrite this fact that S has the least element.

50:13

Let me just reiterate that S has a least element in the set, OK?

50:18

Now, x cannot be 1 because we're assuming the base case, meaning P of 1 is true.

50:24

So since P of 1 is true, that means 1 is not

50:34

an S, which means x is not 1.

50:39

50:45

In particular, x must be bigger than 1. So x is some magical natural number out there bigger than 1

50:51

that's the least element of this set S.

50:56

OK, since x is the least element of S--

51:09

so let me draw.

51:15

On the number line, we have 1, 2, 3, 4. Out there is some magic point x, which

51:21

is the least element of S. And the rest of the subset S lies to the right of this number x, right?

51:30

Because it's the least element of S. And therefore, x minus 1 cannot be in S.

51:41

So since x is the least element of S and x minus 1 is less than

51:49

x, this means that x minus 1 is not in S. Otherwise,

51:56

it would be a smaller element than x in S. So thus,

52:05

what does it mean to not be in S? It means that P of x minus 1 is true.

52:11

By the definition of S, this means P of x minus 1

52:20

is true, OK?

52:27

But by the second property we're assuming about our statement P,

52:36

this means that the next guy in line, x minus 1 plus 1,

52:44

is true, which is just x, which means that x is not in S, OK?

52:58

So from the assumption-- so let me just recap.

53:04

From the assumption that S is non-empty, we've derived two facts. 1, x has the least element in S. And that element is also not

53:16

in S. So written out, we've concluded there

53:34

exists a natural number which is both in S and not in S.

53:41

And this is a false statement. You cannot have an object and member that's both in the set

53:48

and not in the set, OK? And at the end of contradiction arguments,

53:56

I'll usually put two arrows hitting each other. So that's a contradiction. Therefore, our initial assumption that S is non-empty

54:03

has to be false.

54:10

And therefore, S is the empty set, OK?

54:16

So I encourage you to go through that proof a little slowly because maybe you got turned around

54:24

by taking the complements or the general scheme of how

54:30

a proof by contradiction works. But don't spend too much time on it because, as I've said,

54:40

this theorem itself and its proof are not the thing we're really interested in. Or at least, it's not the most interesting.

54:47

It's more of a tool that we'll use to prove more interesting statements.

54:53

OK, so how do we actually use this theorem, induction, to prove other statements?

54:59

So I guess I should include this here. This falls under the umbrella of logic,

55:06

meaning we're going to approve previous-- we're going to use previous statements we've proven to prove new statements.

55:13

But anyway, so how do we use induction in practice?

55:27

So if we want to prove some statement--

55:34

55:39

for all n, Pn is true--

55:44

in the print then, this theorem about induction-- this theorem of induction-- tells us

55:49

we just have to do two things, OK?

56:02

We have to prove the base case.

56:08

And this is usually easy. You just stick the number 1 into the statement

56:14

that you want to prove. And that's the end of the story.

56:21

56:27

And the second step is usually-- or the second thing we have to prove is the more involved part, which is

56:33

we have to prove that the statement that if PM is true,

56:50

then P of m plus 1 is true, OK?

56:56

If we want to do a proof by induction, there's two smaller proofs we have to do. First, we have to prove P of 1 is true.

57:04

And then we have to prove this statement. If P of m, then P of m plus 1.

57:09

So again, this is usually referred to as the base case.

57:15

This is the inductive step. So let's try and actually do this.

57:29

All right, so-- so another question I get at the beginning

57:39

of a course, especially about proofs-- because there's a lot of uncertainty about what you

57:45

can assume is true, what can you use, what can you not use, right now, at this point, you

57:51

can use whatever you know about any

57:57

of the algebraic properties, you know about the real numbers, the rational numbers--

58:02

and by algebraic properties, I mean if a plus b equals

58:08

c, then a plus b times d equals c times d-- and what you know about inequalities.

58:16

So we're going to go much more in depth into ordering, which is what inequality is a part of.

58:27

But you can use all the properties you know about solving inequalities or manipulating

58:33

inequalities, meaning if I have one number is less than or equal to another number, then when I multiply

58:39

both sides by a positive number, that doesn't change the inequality. So you can use all of these algebraic properties

58:48

of rationals and real numbers from here on out.

58:55

I mean, so we're going to be proving things about calculus. So you certainly cannot use anything about continuity,

59:03

differentiation, or anything like that. But for now, you can use all the algebraic properties you know.

59:12

So the first statement we're going to try and prove using induction is the statement that for all c not equal

59:24

to 1, for all n, a natural number, 1

59:30

plus c plus c squared plus c to the n equals 1 minus c to the n

59:37

plus 1 over 1 minus c, OK? So this here is our statement P of n.

59:49

It depends on the natural number n, OK? So we're going to do this by induction, which means we're

59:57

going to do those two things. We're going to prove the base case, P of 1, which I said is easy.

1:00:02

And then we're going to prove the second case, the second property, the inductive step, which is a little more involved, but not so much involved,

1:00:12

at least in the beginning. So let me call this inequality star.

1:00:19

1:00:27

We're going to prove star by induction. So first, we will do the base case.

1:00:35

1:00:41

And like I said, the base case is usually you

1:00:46

just plug in n equals 1 and verify that P of n is true. And that's what we do.

1:00:53

1 plus c to the 1, which is the left-hand side, does, in fact, equal 1 minus c to the 1 plus 1 over 1 minus c because this

1:01:05

right-hand side--

1:01:11

1 minus c squared is 1 minus c times 1 plus c--

1:01:17

the 1 minus c's cancel. And so the base case is proven, all right?

1:01:26

1:01:31

Now, we do the inductive step, OK?

1:01:41

So we're going to assume that star holds for n equals m

1:01:47

So we're going to assume P of m. So assume that 1 plus c plus c to the m

1:01:57

equals 1 minus c over 1 minus c, OK?

1:02:04

Now, we want to show-- again, let's write out what we want to do, what's our plan.

1:02:11

We want to prove that this equality, that this line

1:02:22

star holds for n equals m plus 1, OK?

1:02:33

So again, what I wrote here, this is basically star for n equals m, OK?

1:02:47

And let me call this second inequality-- the second equality 2 star.

1:02:53

So this is my assumption for m, n equals m.

1:03:00

OK, so let's take the left side for n equals m plus 1 and see

1:03:09

if we cannot massage it to get the right-hand side for--

1:03:15

I should say the right-hand side for n equals m plus 1.

1:03:23

So here is the calculation part. So we have 1 plus c plus c to the m plus c to the m plus 1.

1:03:33

This is the m plus 1 case of the left-hand side of star,

1:03:38

which we want to show is to the-- is equal to the n equals n plus 1 case of the right-hand side.

1:03:46

Now, this is equal to-- now, we already know what this is equal to by our assumption.

1:03:53

This is by the second star there, which is what we're assuming is true.

1:03:59

This is equal to 1 minus c n plus 1 over 1 minus c plus cm plus 1.

1:04:12

And so now, we just do a little bit of algebra. This is equal to 1 over 1 minus c

1:04:18

m plus 1 plus c m plus 1 minus c m plus 2 over 1 minus c.

1:04:27

Those cancel and I'm left with 1 minus c to the m plus 2. And I'll write it just so that you can see this is really

1:04:36

the m plus 1 case, all right?

1:04:46

So again, we arrived at this first step

1:04:51

by our assumption, the second starred equation, OK?

1:04:57

So thus, star holds for n equals m plus 1.

1:05:10

So by induction-- or really, I should say the theorem

1:05:17

of induction that we proved--

1:05:23

our equality between those two objects, or two expressions,

1:05:29

is valid for all n, OK?

1:05:38

1:05:58

OK.

1:06:50

OK, so let's do one more example of using induction.

1:06:59

So let's prove if C is a real number bigger

1:07:07

than or equal to minus 1, then for all n,

1:07:16

a natural number, 1 plus c to the n

1:07:22

is bigger than or equal to 1 plus n times c, OK?

1:07:30

All right, so we're going to do this by induction again.

1:07:37

That means we need to prove the base case and we need to do the inductive step.

1:07:43

So base case, as always, will-- so this is just right here. We're going to do this by induction.

1:07:52

So as you can see, the base case is,

1:08:00

again, n equals 1 is clear just by looking at it.

1:08:05

1 plus c to the 1, in fact, equals 1 plus 1 times c.

1:08:12

So it's certainly bigger than or equal to 1 plus n times c. So I think that's the last stars I'll use for this lecture.

1:08:28

So our statement, our inequality star star star,

1:08:37

holds for n equals 1. All right, so that's our base case.

1:08:42

Now, we're going to assume that this inequality holds for n equals m and try to prove that it

1:08:49

holds for n equals m plus 1.

1:08:59

So we're assuming this when n equals m.

1:09:05

So 1 plus c to the m is bigger than or equal to 1 plus m times

1:09:12

c. And we want to prove this inequality with n

1:09:19

equal to m plus 1. And we're just assuming this guy, OK?

1:09:26

So I want to get the statement for n equals m plus 1. One way to do that is this left side.

1:09:34

I want to get-- let's look at the n equals m plus 1 side

1:09:40

and see what we can do with it. So again, this is a calculation part and logic.

1:09:47

So we have 1 plus c to the m plus 1. So that's the n equals m plus 1 side of this.

1:09:55

This is equal to 1 plus c times 1 plus c to the m.

1:10:03

Now, we're assuming, again, this inequality. This is the n equals m case.

1:10:09

So we can use it. So we're assuming it. We use it. And since C is bigger than or equal to minus 1, 1 plus C

1:10:17

is non-negative. So this thing is bigger than or equal to this thing.

1:10:22

So if I multiply both sides by 1 plus c, I preserve the inequality. So this is bigger than or equal to 1 plus mc, OK?

1:10:37

Again, this just follows from essentially the assumption multiplied through by 1 plus c, OK?

1:10:44

So now, I'm going to finagle this.

1:10:56

So let me just--

1:11:01

I'm not doing anything different here. I'm just going to rewrite this over here so that I can have a chain of inequality.

1:11:12

So I have 1 plus c to the m plus 1 is greater than or equal to 1 plus c 1 plus mc.

1:11:20

All right, so now, this is bigger than or equal to this. And this here-- so when I write equal,

1:11:27

I do not mean that this left side is now equal to what I'm about to write here. That means the previous thing on here is equal to what I'm about

1:11:36

to write here, OK/ this is a typical fashion and writing

1:11:46

down inequalities-- or I guess, practice. So this is equal to 1--

1:11:51

so just doing the algebra-- m plus 1 times c plus m times c squared, OK?

1:12:01

Now, this part is exactly the n equals m plus 1 side of this.

1:12:07

And I have a little room to give because now this

1:12:13

is plus something that's non-negative.

1:12:21

So let me just rewrite this again. This means that 1 plus c to the m plus 1

1:12:27

is greater than or equal to 1 plus--

1:12:34

so again, I'm kind of writing a lot here. I will stop writing as much as the course goes on.

1:12:40

But I encourage you, especially in the beginning,

1:12:46

to write all the steps and logic, OK?

1:12:53

So again, I'm not rewriting anything. I'm just summarizing what I've done here.

1:13:01

Now, this right-hand side-- so I have this as bigger than or equal to this. And this right-hand side, since I

1:13:07

have a number plus something non-negative, m times c squared-- m's a natural number. This is bigger than or equal to 1 m plus 1 times c.

1:13:19

Thus, 1 plus c to the m plus 1 is greater than or equal to,

1:13:30

which is the n equals n plus 1 case.

1:13:46

So by induction, this inequality triple star holds for all n.

1:13:58

1:14:13

All right.