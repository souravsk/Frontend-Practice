# Chapter 27 - Regular Expressions

# The RegExp Object

A regular expression is a **pattern** of characters.

The pattern is used for **searching and replacing** characters in strings.

The **RegExp Object** is a regular expression with added **Properties** and **Methods**.

```jsx
/pattern/modifier(s);
```

### Example

```jsx
let pattern = /w3schools/i;
```

Example explained:

| w3schools | The pattern to search for |
| --- | --- |
| /w3schools/ | A regular expression |
| /w3schools/i | A case-insensitive regular expression |

# Modifiers

Modifiers are used to perform case-insensitive and global searches:

| Modifier | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_regexp_g.asp | Perform a global match (find all matches rather than stopping after the first match) |
| https://www.w3schools.com/jsref/jsref_regexp_i.asp | Perform case-insensitive matching |
| https://www.w3schools.com/jsref/jsref_regexp_m.asp | Perform multiline matching |

# Brackets

Brackets are used to find a range of characters:

| Expression | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_regexp_charset.asp | Find any character between the brackets |
| https://www.w3schools.com/jsref/jsref_regexp_charset_not.asp | Find any character NOT between the brackets |
| https://www.w3schools.com/jsref/jsref_regexp_0-9.asp | Find any character between the brackets (any digit) |
| https://www.w3schools.com/jsref/jsref_regexp_not_0-9.asp | Find any character NOT between the brackets (any non-digit) |
| https://www.w3schools.com/jsref/jsref_regexp_xy.asp | Find any of the alternatives specified |

---

---

# Metacharacters

Metacharacters are characters with a special meaning:

| Metacharacter | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_regexp_dot.asp | Find a single character, except newline or line terminator |
| https://www.w3schools.com/jsref/jsref_regexp_wordchar.asp | Find a word character |
| https://www.w3schools.com/jsref/jsref_regexp_wordchar_non.asp | Find a non-word character |
| https://www.w3schools.com/jsref/jsref_regexp_digit.asp | Find a digit |
| https://www.w3schools.com/jsref/jsref_regexp_digit_non.asp | Find a non-digit character |
| https://www.w3schools.com/jsref/jsref_regexp_whitespace.asp | Find a whitespace character |
| https://www.w3schools.com/jsref/jsref_regexp_whitespace_non.asp | Find a non-whitespace character |
| https://www.w3schools.com/jsref/jsref_regexp_begin.asp | Find a match at the beginning/end of a word, beginning like this: \bHI, end like this: HI\b |
| https://www.w3schools.com/jsref/jsref_regexp_begin_not.asp | Find a match, but not at the beginning/end of a word |
| https://www.w3schools.com/jsref/jsref_regexp_nul.asp | Find a NULL character |
| https://www.w3schools.com/jsref/jsref_regexp_newline.asp | Find a new line character |
| https://www.w3schools.com/jsref/jsref_regexp_formfeed.asp | Find a form feed character |
| https://www.w3schools.com/jsref/jsref_regexp_carriagereturn.asp | Find a carriage return character |
| https://www.w3schools.com/jsref/jsref_regexp_tab.asp | Find a tab character |
| https://www.w3schools.com/jsref/jsref_regexp_vtab.asp | Find a vertical tab character |
| https://www.w3schools.com/jsref/jsref_regexp_octal.asp | Find the character specified by an octal number xxx |
| https://www.w3schools.com/jsref/jsref_regexp_hex.asp | Find the character specified by a hexadecimal number dd |
| https://www.w3schools.com/jsref/jsref_regexp_unicode_hex.asp | Find the Unicode character specified by a hexadecimal number dddd |

# Quantifiers

| Quantifier | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_regexp_onemore.asp | Matches any string that contains at least one n |
| https://www.w3schools.com/jsref/jsref_regexp_zeromore.asp | Matches any string that contains zero or more occurrences of n |
| https://www.w3schools.com/jsref/jsref_regexp_zeroone.asp | Matches any string that contains zero or one occurrences of n |
| https://www.w3schools.com/jsref/jsref_regexp_nx.asp | Matches any string that contains a sequence of X n's |
| https://www.w3schools.com/jsref/jsref_regexp_nxy.asp | Matches any string that contains a sequence of X to Y n's |
| https://www.w3schools.com/jsref/jsref_regexp_nxcomma.asp | Matches any string that contains a sequence of at least X n's |
| https://www.w3schools.com/jsref/jsref_regexp_ndollar.asp | Matches any string with n at the end of it |
| https://www.w3schools.com/jsref/jsref_regexp_ncaret.asp | Matches any string with n at the beginning of it |
| https://www.w3schools.com/jsref/jsref_regexp_nfollow.asp | Matches any string that is followed by a specific string n |
| https://www.w3schools.com/jsref/jsref_regexp_nfollow_not.asp | Matches any string that is not followed by a specific string n |

# RegExp Object Properties

| Property | Description |
| --- | --- |
| https://www.w3schools.com/jsref/jsref_regexp_constructor.asp | Returns the function that created the RegExp object's prototype |
| https://www.w3schools.com/jsref/jsref_regexp_global.asp | Checks whether the "g" modifier is set |
| https://www.w3schools.com/jsref/jsref_regexp_ignorecase.asp | Checks whether the "i" modifier is set |
| https://www.w3schools.com/jsref/jsref_regexp_lastindex.asp | Specifies the index at which to start the next match |
| https://www.w3schools.com/jsref/jsref_regexp_multiline.asp | Checks whether the "m" modifier is set |
| https://www.w3schools.com/jsref/jsref_regexp_source.asp | Returns the text of the RegExp pattern |

# RegExp Object Methods
Method	Description
compile()	Deprecated in version 1.5. Compiles a regular expression
exec()	Tests for a match in a string. Returns the first match
test()	Tests for a match in a string. Returns true or false
toString()	Returns the string value of the regular expression