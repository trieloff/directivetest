# directivetest

## MDAST Tree

```
root[8]
├─0 paragraph[1]
│   └─0 text "One column (\"special\"), two rows"
├─1 containerDirective<block>[2]
│   │ attributes: {"columns":["special"]}
│   ├─0 containerDirective<special>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "I am special"
│   └─1 containerDirective<special>[1]
│       └─0 paragraph[1]
│           └─0 text "I am special, too"
├─2 paragraph[1]
│   └─0 text "Two columns (\"special\" and \"animal\"), two rows"
├─3 containerDirective<block>[4]
│   │ attributes: {"columns":["special","animal"]}
│   ├─0 containerDirective<special>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "I am special"
│   ├─1 containerDirective<animal>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "Woof"
│   ├─2 containerDirective<special>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "I am special, too"
│   └─3 containerDirective<animal>[1]
│       └─0 paragraph[1]
│           └─0 text "Moo"
├─4 paragraph[1]
│   └─0 text "Two columns (\"special\" and untitled), two rows, last cell empty"
├─5 containerDirective<block>[4]
│   │ attributes: {"columns":["special",null]}
│   ├─0 containerDirective<special>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "I am special"
│   ├─1 containerDirective[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "Woof"
│   ├─2 containerDirective<special>[1]
│   │   └─0 paragraph[1]
│   │       └─0 text "I am special, too"
│   └─3 containerDirective[0]
├─6 paragraph[1]
│   └─0 text "Two columns (\"special\" and \"hello, world\"), two rows, last cell empty – this is where things break a bit, as commas in values are ambiguous."
└─7 containerDirective<block>[4]
    │ attributes: {"columns":["special","hello, world"]}
    ├─0 containerDirective<special>[1]
    │   └─0 paragraph[1]
    │       └─0 text "I am special"
    ├─1 containerDirective<hello, world>[1]
    │   └─0 paragraph[1]
    │       └─0 text "Woof"
    ├─2 containerDirective<special>[1]
    │   └─0 paragraph[1]
    │       └─0 text "I am special, too"
    └─3 containerDirective<hello, world>[0]
```

## Output

```markdown
One column ("special"), two rows

::::block{columns="special"}
:::special
I am special
:::

:::special
I am special, too
:::
::::

Two columns ("special" and "animal"), two rows

::::block{columns="special,animal"}
:::special
I am special
:::

:::animal
Woof
:::

:::special
I am special, too
:::

:::animal
Moo
:::
::::

Two columns ("special" and untitled), two rows, last cell empty

::::block{columns="special,"}
:::special
I am special
:::

:::
Woof
:::

:::special
I am special, too
:::

:::
:::
::::

Two columns ("special" and "hello, world"), two rows, last cell empty – this is where things break a bit, as commas in values are ambiguous.

::::block{columns="special,hello, world"}
:::special
I am special
:::

:::hello, world
Woof
:::

:::special
I am special, too
:::

:::hello, world
:::
::::

```