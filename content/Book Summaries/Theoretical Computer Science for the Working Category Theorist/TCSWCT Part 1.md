# Theoretical Computer Science for the Working Category Theorist: Part One

I'm working on converting text books I want to read into audio books again. This time it's with a little volume that is sort of an introduction to both CS Theory, and Category Theory at once. This is of particular interest to me, considering I studied CS Theory at the Graduate Level for a couple years and have a long standing interest in it and Mathematics.

I'm voicing it with John Derbyshire again, and using Dylan Thomas for some of the intros and section headings and stuff.

I'm making rather significant and effective use of the lexicon files that eleven labs supports. Below is that one that I have created for this CS / Category theory project. The lexicon allows the TTS AI to say the jargon filled parts of the book properly instead of malingering with the cringe result of the default pronunciation.

It's a bit unfortunate to me that this standard is in xml, however it is a nifty little W3C standard for pronunciation that I didn't even know existed before. https://www.w3.org/TR/pronunciation-lexicon/#S4.7

```xml
<?xml version="1.0" encoding="UTF-8"?>
<lexicon version="1.0" 
      xmlns="http://www.w3.org/2005/01/pronunciation-lexicon"
      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
      xsi:schemaLocation="http://www.w3.org/2005/01/pronunciation-lexicon 
        http://www.w3.org/TR/2007/CR-pronunciation-lexicon-20071212/pls.xsd"
      alphabet="ipa" xml:lang="en-US">
  <lexeme>
    <grapheme>f-></grapheme>
    <alias>goes by f to</alias>
  </lexeme>
  <lexeme>
    <grapheme>g-></grapheme>
    <alias>goes by g to</alias>
  </lexeme>
  <lexeme>
    <grapheme>f'-></grapheme>
    <alias>goes by f prime to</alias>
  </lexeme>
  <lexeme>
    <grapheme>g'-></grapheme>
    <alias>goes by g prime to</alias>
  </lexeme>
  <lexeme>
    <grapheme>F-></grapheme>
    <alias>goes by big F to</alias>
  </lexeme>
  <lexeme>
    <grapheme>G-></grapheme>
    <alias>goes by big G to</alias>
  </lexeme>
  <lexeme>
    <grapheme>F'-></grapheme>
    <alias>goes by big f prime to</alias>
  </lexeme>
  <lexeme>
    <grapheme>G'-></grapheme>
    <alias>goes by big G' to</alias>
  </lexeme>
  <lexeme>
    <grapheme>f : b −> a</grapheme>
    <alias>f from b to a</alias>
  </lexeme>
  <lexeme>
    <grapheme>f : b' −> a</grapheme>
    <alias>f from b' to a</alias>
  </lexeme>
  <lexeme>
    <grapheme>id x : x −> x</grapheme>
    <alias>identity x</alias>
    <alias>identity function of x</alias>
  </lexeme>
  <lexeme>
    <grapheme>id a : a −> a</grapheme>
    <alias>identity function of a</alias>
    <alias>identity a</alias>
  </lexeme>
</lexicon>
```
![](ElevenLabs_2024-10-21T09_17_12_Conversion.mp3)