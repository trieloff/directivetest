const unified = require('unified');
const directive = require('remark-directive');
const stringify = require('remark-stringify');
const u = require('unist-builder');
const inspect = require('unist-util-inspect');

const tree = u('root', [
  u('paragraph', [u('text', {value: 'One column ("special"), two rows'})]),
  u('containerDirective', {name: 'cards' }, [
    u('containerDirective', {}, [
      u('paragraph', [u('image', {url: 'card1.png', alt: ''})])
    ]),
    u('containerDirective', {}, [
      u('paragraph', [u('heading', {level: 3}, [
        u('text', {value: 'First Card'})
      ])])
    ]),
    u('leafDirective', {name: 'break'}),
    u('containerDirective', {}, [
      u('paragraph', [u('image', {url: 'card2.png', alt: ''})])
    ]),
    u('containerDirective', {}, [
      u('paragraph', [u('heading', {level: 3}, [
        u('text', {value: 'Last Card'})
      ])])
    ]),
  ]),
  ]);

console.log(inspect.noColor(tree));

const res = unified()
  .use(directive)
  .use(stringify)
  .stringify(tree);

console.log(res);