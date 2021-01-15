const unified = require('unified');
const directive = require('remark-directive')
const stringify = require('remark-stringify')
const u = require('unist-builder')

const tree = u('root', [
  u('paragraph', [u('text', {value: 'One column ("special"), two rows'})]),
  u('containerDirective', {name: 'block', attributes: {columns: ['special']}}, [
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special'})])
    ]),
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special, too'})])
    ])
  ]),
  u('paragraph', [u('text', {value: 'Two columns ("special" and "animal"), two rows'})]),
  u('containerDirective', {name: 'block', attributes: {columns: ['special', 'animal']}}, [
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special'})])
    ]),
    u('containerDirective', {name: 'animal'}, [
      u('paragraph', [u('text', {value: 'Woof'})])
    ]),
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special, too'})])
    ]),
    u('containerDirective', {name: 'animal'}, [
      u('paragraph', [u('text', {value: 'Moo'})])
    ]),
  ]),
  u('paragraph', [u('text', {value: 'Two columns ("special" and untitled), two rows, last cell empty'})]),
  u('containerDirective', {name: 'block', attributes: {columns: ['special', undefined]}}, [
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special'})])
    ]),
    u('containerDirective', {name: undefined}, [
      u('paragraph', [u('text', {value: 'Woof'})])
    ]),
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special, too'})])
    ]),
    u('containerDirective', {name: undefined}, [
    ]),
  ]),
  u('paragraph', [u('text', {value: 'Two columns ("special" and "hello, world"), two rows, last cell empty – this is where things break a bit, as commas in values are ambiguous.'})]),
  u('containerDirective', {name: 'block', attributes: {columns: ['special', "hello, world"]}}, [
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special'})])
    ]),
    u('containerDirective', {name: "hello, world"}, [
      u('paragraph', [u('text', {value: 'Woof'})])
    ]),
    u('containerDirective', {name: 'special'}, [
      u('paragraph', [u('text', {value: 'I am special, too'})])
    ]),
    u('containerDirective', {name: "hello, world"}, [
    ]),
  ])
  ]);

const res = unified()
  .use(directive)
  .use(stringify)
  .stringify(tree);

console.log(res);