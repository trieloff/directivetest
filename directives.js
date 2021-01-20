const unified = require("unified");
const directive = require("remark-directive");
const stringify = require("remark-stringify");
const u = require("unist-builder");
const inspect = require("unist-util-inspect");
const original = `
# Tables

Cards from Character Animator

|Callout three||
|-|-|
|![](https://hlx.blob.core.windows.net/external/dda817bda66620bdc8e63904251583be1294a234#image.jpeg)|<h3>Bluster</h3><p>Vector snowman with head parallax, dangling scarf, and snowy background. Featured in <a href="https://youtu.be/0Va3_e-4bKE">Creating an Animated Livestream</a>.</p><p><a href="https://adobe.ly/2SNco6q">Download</a></p>|
|![](https://hlx.blob.core.windows.net/external/2bc7fa6accf17a3096f0a97a138e52f5c629c79b#image.jpeg)|<h3>Brooklyn Buddies</h3><p>Low-poly fox, bunny, and pug characters with cycle-based head turns, walking, and background. Featured in <a href="https://youtu.be/w2Hcw3mb6zw">New Puppets January 2019</a>. Created by <a href="https://youtube.com/theweathergirls">Emily Watts</a>.</p><p><a href="https://adobe.ly/2NAuGqe">Download</a></p>|
|![](https://hlx.blob.core.windows.net/external/4c1479f00910aded125bc16ee83ac7761ca0a883#image.png)|<h3>Barbarasaurus</h3><p>Clay sculpted dinosaur newscaster with triggered graphics and news crawls. Featured in <a href="https://youtu.be/IIsxwN9J4Ww">Make a Clay Puppet</a>. Created by <a href="https://www.shmideo.com/">Dovid Taub</a>.</p><p><a href="https://adobe.ly/2HjCnyt">Download</a></p>|
|![](https://hlx.blob.core.windows.net/external/6c17267c5da4ae56efeb97f68c4e4e946c11ca62#image.jpeg)|<h3>Red Monster 3D</h3><p>Updated 3D version of the Character Animator mascot, as seen in the <a href="https://youtu.be/dq02549_ycg">The Story Behind Red Monster</a>. Created by <a href="https://davidarbor.com/">David Arbor</a>.</p><p><a href="https://adobe.ly/2S2CCUN">Download</a></p>|

Columns from Adobe Stock Advocates

|Columns||
|-|-|
|<h4>The concept of the gender binary is being increasingly questioned and scrutinized — and rightly so.</h4><p>In recent years, people have only become more vocal about our need to reassess how we think about gender, and brands have begun to place a high priority on truly inclusive visuals.<br> We need authentic, empowering, everyday narratives that represent people across the gender spectrum. With this topic, we explore the true lived experiences of individuals and communities through the lens of gender, and we celebrate the LGBTQ+ community. Together, we can use the power of inclusivity to highlight stories about living life on your own terms.</p><p><a href="https://contributor.stock.adobe.com/?as_channel=microsite&#x26;as_campclass=brand&#x26;as_audience=contributors&#x26;as_campaign=advocates&#x26;as_source=lp&#x26;as_camptype=awareness&#x26;as_content=identityandgender">Submit your work to Adobe Stock</a></p><p></p>|<p><img src="https://hlx.blob.core.windows.net/external/7a3ef836cca9d8c4ce2d6871033f27f00dd12741#image.jpeg"></p><p>Adobe Artist: Leandro Crespi - Stocksy</p>|
|<p><img src="https://hlx.blob.core.windows.net/external/c461432d7b8a392d8a899020f5a12710f9b74792#image.png"></p><p>Adobe Artist: Stocksy</p>||
|<p><img src="https://hlx.blob.core.windows.net/external/b5ae0673812957ebaf8152a75708ef9cad4e0413#image.png"></p><p>Adobe Artists: Fancy Bethany, Lucas Ottone - Stocksy, Jennifer Brister - Stocksy &#x26; Hilde Atalanta</p>|<h3><strong>Identity &#x26; Gender:</strong>Inspiration</h3><p></p><p>Looking for inspiration? Here are some angles to consider. Pick one and run with it or explore your own unique take on how individuals are expressing their authentic selves through and beyond gender.</p><p></p>|
|<h2>Every woman honored</h2><p>Women moving through everyday work and home life with power and purpose. Cis women and transwomen playing with, reversing, subverting, or all-out shattering preconceived ideas about gender and how we express it.</p><p></p>|<p><img src="https://hlx.blob.core.windows.net/external/11c115a543a672269350e4c88d17c9432f742ce8#image.jpeg"></p><p>Adobe Artist: Zinkevych</p>|

Blocks from Adobe Blog


| Block Embed                                                    |
| -------------------------------------------------------------- |
| <https://www.youtube.com/watch?v=AgR7BVpxwhw&feature=youtu.be> |

This past summer, we launched [Adobe Stock Audio](https://stock.adobe.com/audio), featuring a curated collection of royalty-free music and audio tracks from two powerhouse agencies, Epidemic Sound and Jamendo. Audio drives multimedia like nothing else, and 2020 saw a dramatic rise in content creation, with no signs of slowing down. In other words, it is the perfect time for us to roll out our first-ever Audio Trends forecast for 2021.



| Animation                                                                                       |
| ----------------------------------------------------------------------------------------------- |
| <https://hlx.blob.core.windows.net/external/45b8d3f95c5003a81426fa76e977de8937dd0254#image.mp4> |
`;
const tree = u("root", [
  u('heading', { depth: 1}, [u('text', {value: 'Directives'})]),
  u("paragraph", [u("text", { value: 'Cards from Character Animator' })]),
  u("containerDirective", { name: "Callout three" }, [
    u("containerDirective", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/dda817bda66620bdc8e63904251583be1294a234#image.jpeg", alt: "" })]),
    ]),
    u("containerDirective", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Bluster" })]),
      u('paragraph', {}, [
        u('text', {value: 'Vector snowman with head parallax, dangling scarf, and snowy background. Featured in '}),
        u('link', {url: 'https://youtu.be/0Va3_e-4bKE'}, [u('text', {value: 'Creating an Animated Livestream'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2SNco6q'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),

    u("containerDirective", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/2bc7fa6accf17a3096f0a97a138e52f5c629c79b#image.jpeg", alt: "" })]),
    ]),
    u("containerDirective", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Brooklyn Buddies" })]),
      u('paragraph', {}, [
        u('text', {value: 'Low-poly fox, bunny, and pug characters with cycle-based head turns, walking, and background. Featured in '}),
        u('link', {url: 'https://youtu.be/w2Hcw3mb6zw'}, [u('text', {value: 'New Puppets January 2019'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://youtube.com/theweathergirls'}, [u('text', {value: 'Emily Watts'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2NAuGqe'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),


    u("containerDirective", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/4c1479f00910aded125bc16ee83ac7761ca0a883#image.png", alt: "" })]),
    ]),
    u("containerDirective", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Barbarasaurus" })]),
      u('paragraph', {}, [
        u('text', {value: 'Clay sculpted dinosaur newscaster with triggered graphics and news crawls. Featured in '}),
        u('link', {url: 'https://youtu.be/IIsxwN9J4Ww'}, [u('text', {value: 'Make a Clay Puppet'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://www.shmideo.com/'}, [u('text', {value: 'Dovid Taub'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2HjCnyt'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),

    u("containerDirective", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/6c17267c5da4ae56efeb97f68c4e4e946c11ca62#image.jpeg", alt: "" })]),
    ]),
    u("containerDirective", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Red Monster 3D" })]),
      u('paragraph', {}, [
        u('text', {value: 'Updated 3D version of the Character Animator mascot, as seen in the '}),
        u('link', {url: 'https://youtu.be/dq02549_ycg'}, [u('text', {value: 'The Story Behind Red Monster'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://davidarbor.com/'}, [u('text', {value: 'David Arbor'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2S2CCUN'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
  ]),
  u("paragraph", [u("text", { value: 'Columns from Adobe Stock Advocates' })]),
  u("containerDirective", { name: "Callout three" }, [
    u("containerDirective", {}, [
      u('heading', {depth: 4}, [ u('text', {value: 'The concept of the gender binary is being increasingly questioned and scrutinized — and rightly so.'})]),
      u('paragraph', {}, [
        u('text', {value: 'In recent years, people have only become more vocal about our need to reassess how we think about gender, and brands have begun to place a high priority on truly inclusive visuals.'}),
        u('break'),
        u('text', {value: 'We need authentic, empowering, everyday narratives that represent people across the gender spectrum. With this topic, we explore the true lived experiences of individuals and communities through the lens of gender, and we celebrate the LGBTQ+ community. Together, we can use the power of inclusivity to highlight stories about living life on your own terms.'})
      ]),
      u('paragraph', [
        u('link', {url: 'https://contributor.stock.adobe.com/?as_channel=microsite&as_campclass=brand&as_audience=contributors&as_campaign=advocates&as_source=lp&as_camptype=awareness&as_content=identityandgender'}, [u('text', {value: 'Submit your work to Adobe Stock'})])
      ]),
      u('paragraph')
    ]),
    u('containerDirective', [
      u('paragraph', [u('image', {url: 'https://hlx.blob.core.windows.net/external/7a3ef836cca9d8c4ce2d6871033f27f00dd12741#image.jpeg'})]),
      u('paragraph', [
        u('text', {value: 'Adobe Artist: Leandro Crespi - Stocksy'})
      ])
    ]),
    u('leafDirective', { name: 'break'}),
    u('containerDirective', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/c461432d7b8a392d8a899020f5a12710f9b74792#image.png'})
      ]),
      u('paragraph', [
        u('text', {value: 'Adobe Artist: Stocksy'})
      ])
    ]),
    u('leafDirective', { name: 'break'}),
    u('containerDirective', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/b5ae0673812957ebaf8152a75708ef9cad4e0413#image.png'})
      ]),
      u('paragraph', [
        u('text', {value: 'Adobe Artists: Fancy Bethany, Lucas Ottone - Stocksy, Jennifer Brister - Stocksy & Hilde Atalanta'})
      ])
    ]),
    u('containerDirective', [
      u('heading', {depth: 3}, [
        u('strong', [u('text', {value: 'Identity & Gender:'})]),
        u('text', {value: 'Inspiration'})]),
      u('paragraph'),
      u('paragraph', [
        u('text', {value: 'Looking for inspiration? Here are some angles to consider. Pick one and run with it or explore your own unique take on how individuals are expressing their authentic selves through and beyond gender.'})
      ]),
      u('paragraph')
    ]),
    u('leafDirective', { name: 'break'}),
    u('containerDirective', [
      u('heading', {depth: 2}, [u('text', {value: 'Every woman honored'})]),
      u('paragraph', [
        u('text', {value: 'Women moving through everyday work and home life with power and purpose. Cis women and transwomen playing with, reversing, subverting, or all-out shattering preconceived ideas about gender and how we express it.'})
      ]),
      u('paragraph')
    ]),
    u('containerDirective', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/11c115a543a672269350e4c88d17c9432f742ce8#image.jpeg'})
      ]),
      u('paragraph', [u('text', {value: 'Adobe Artist: Zinkevych'})])
    ])
  ]),
  u('paragraph', [u('text', {value: 'Blocks from Adobe Blog'})]),
  u('containerDirective', { name: 'Block Embed'}, [
    u('containerDirective', [
      u('link', {url: 'https://www.youtube.com/watch?v=AgR7BVpxwhw&feature=youtu.be'}, [u('text', {value: 'https://www.youtube.com/watch?v=AgR7BVpxwhw&feature=youtu.be'})])
    ])
  ]),
  u('paragraph', [
    u('text', {value: 'This past summer, we launched '}),
    u('link', {url: 'https://stock.adobe.com/audio'}, [u('text', {value: 'Adobe Stock Audio'})]),
    u('text', {value: ', featuring a curated collection of royalty-free music and audio tracks from two powerhouse agencies, Epidemic Sound and Jamendo. Audio drives multimedia like nothing else, and 2020 saw a dramatic rise in content creation, with no signs of slowing down. In other words, it is the perfect time for us to roll out our first-ever Audio Trends forecast for 2021.'})
  ]),
  u('containerDirective', {name: 'Animation'}, [
    u('containerDirective', [
      u('link', {url: 'https://hlx.blob.core.windows.net/external/45b8d3f95c5003a81426fa76e977de8937dd0254#image.mp4'}, [u('text', {value: 'https://hlx.blob.core.windows.net/external/45b8d3f95c5003a81426fa76e977de8937dd0254#image.mp4'})])
    ])
  ]),



  u('heading', { depth: 1}, [u('text', {value: 'Directives and Blockquotes'})]),
  u("paragraph", [u("text", { value: 'Cards from Character Animator' })]),
  u("containerDirective", { name: "Callout three" }, [
    u("blockquote", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/dda817bda66620bdc8e63904251583be1294a234#image.jpeg", alt: "" })]),
    ]),
    u("blockquote", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Bluster" })]),
      u('paragraph', {}, [
        u('text', {value: 'Vector snowman with head parallax, dangling scarf, and snowy background. Featured in '}),
        u('link', {url: 'https://youtu.be/0Va3_e-4bKE'}, [u('text', {value: 'Creating an Animated Livestream'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2SNco6q'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),

    u("blockquote", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/2bc7fa6accf17a3096f0a97a138e52f5c629c79b#image.jpeg", alt: "" })]),
    ]),
    u("blockquote", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Brooklyn Buddies" })]),
      u('paragraph', {}, [
        u('text', {value: 'Low-poly fox, bunny, and pug characters with cycle-based head turns, walking, and background. Featured in '}),
        u('link', {url: 'https://youtu.be/w2Hcw3mb6zw'}, [u('text', {value: 'New Puppets January 2019'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://youtube.com/theweathergirls'}, [u('text', {value: 'Emily Watts'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2NAuGqe'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),


    u("blockquote", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/4c1479f00910aded125bc16ee83ac7761ca0a883#image.png", alt: "" })]),
    ]),
    u("blockquote", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Barbarasaurus" })]),
      u('paragraph', {}, [
        u('text', {value: 'Clay sculpted dinosaur newscaster with triggered graphics and news crawls. Featured in '}),
        u('link', {url: 'https://youtu.be/IIsxwN9J4Ww'}, [u('text', {value: 'Make a Clay Puppet'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://www.shmideo.com/'}, [u('text', {value: 'Dovid Taub'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2HjCnyt'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
    u("leafDirective", { name: "break" }),

    u("blockquote", {}, [
      u("paragraph", [u("image", { url: "https://hlx.blob.core.windows.net/external/6c17267c5da4ae56efeb97f68c4e4e946c11ca62#image.jpeg", alt: "" })]),
    ]),
    u("blockquote", {}, [
      u("heading", { depth: 3 }, [u("text", { value: "Red Monster 3D" })]),
      u('paragraph', {}, [
        u('text', {value: 'Updated 3D version of the Character Animator mascot, as seen in the '}),
        u('link', {url: 'https://youtu.be/dq02549_ycg'}, [u('text', {value: 'The Story Behind Red Monster'})]),
        u('text', {value: '. Created by '}),
        u('link', {url: 'https://davidarbor.com/'}, [u('text', {value: 'David Arbor'})]),
        u('text', {value: '.'}),
      ]),
      u('paragraph', {}, [
        u('link', {url: 'https://adobe.ly/2S2CCUN'}, [u('text', {value: 'Download'})]),
      ]),
    ]),
  ]),
  u("paragraph", [u("text", { value: 'Columns from Adobe Stock Advocates' })]),
  u("containerDirective", { name: "Callout three" }, [
    u("blockquote", {}, [
      u('heading', {depth: 4}, [ u('text', {value: 'The concept of the gender binary is being increasingly questioned and scrutinized — and rightly so.'})]),
      u('paragraph', {}, [
        u('text', {value: 'In recent years, people have only become more vocal about our need to reassess how we think about gender, and brands have begun to place a high priority on truly inclusive visuals.'}),
        u('break'),
        u('text', {value: 'We need authentic, empowering, everyday narratives that represent people across the gender spectrum. With this topic, we explore the true lived experiences of individuals and communities through the lens of gender, and we celebrate the LGBTQ+ community. Together, we can use the power of inclusivity to highlight stories about living life on your own terms.'})
      ]),
      u('paragraph', [
        u('link', {url: 'https://contributor.stock.adobe.com/?as_channel=microsite&as_campclass=brand&as_audience=contributors&as_campaign=advocates&as_source=lp&as_camptype=awareness&as_content=identityandgender'}, [u('text', {value: 'Submit your work to Adobe Stock'})])
      ]),
      u('paragraph')
    ]),
    u('blockquote', [
      u('paragraph', [u('image', {url: 'https://hlx.blob.core.windows.net/external/7a3ef836cca9d8c4ce2d6871033f27f00dd12741#image.jpeg'})]),
      u('paragraph', [
        u('text', {value: 'Adobe Artist: Leandro Crespi - Stocksy'})
      ])
    ]),
    u('leafDirective', { name: 'break'}),
    u('blockquote', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/c461432d7b8a392d8a899020f5a12710f9b74792#image.png'})
      ]),
      u('paragraph', [
        u('text', {value: 'Adobe Artist: Stocksy'})
      ])
    ]),
    u('leafDirective', { name: 'break'}),
    u('blockquote', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/b5ae0673812957ebaf8152a75708ef9cad4e0413#image.png'})
      ]),
      u('paragraph', [
        u('text', {value: 'Adobe Artists: Fancy Bethany, Lucas Ottone - Stocksy, Jennifer Brister - Stocksy & Hilde Atalanta'})
      ])
    ]),
    u('blockquote', [
      u('heading', {depth: 3}, [
        u('strong', [u('text', {value: 'Identity & Gender:'})]),
        u('text', {value: 'Inspiration'})]),
      u('paragraph'),
      u('paragraph', [
        u('text', {value: 'Looking for inspiration? Here are some angles to consider. Pick one and run with it or explore your own unique take on how individuals are expressing their authentic selves through and beyond gender.'})
      ]),
      u('paragraph')
    ]),
    u('leafDirective', { name: 'break'}),
    u('blockquote', [
      u('heading', {depth: 2}, [u('text', {value: 'Every woman honored'})]),
      u('paragraph', [
        u('text', {value: 'Women moving through everyday work and home life with power and purpose. Cis women and transwomen playing with, reversing, subverting, or all-out shattering preconceived ideas about gender and how we express it.'})
      ]),
      u('paragraph')
    ]),
    u('blockquote', [
      u('paragraph', [
        u('image', {url: 'https://hlx.blob.core.windows.net/external/11c115a543a672269350e4c88d17c9432f742ce8#image.jpeg'})
      ]),
      u('paragraph', [u('text', {value: 'Adobe Artist: Zinkevych'})])
    ])
  ]),
  u('paragraph', [u('text', {value: 'Blocks from Adobe Blog'})]),
  u('containerDirective', { name: 'Block Embed'}, [
    u('blockquote', [
      u('link', {url: 'https://www.youtube.com/watch?v=AgR7BVpxwhw&feature=youtu.be'}, [u('text', {value: 'https://www.youtube.com/watch?v=AgR7BVpxwhw&feature=youtu.be'})])
    ])
  ]),
  u('paragraph', [
    u('text', {value: 'This past summer, we launched '}),
    u('link', {url: 'https://stock.adobe.com/audio'}, [u('text', {value: 'Adobe Stock Audio'})]),
    u('text', {value: ', featuring a curated collection of royalty-free music and audio tracks from two powerhouse agencies, Epidemic Sound and Jamendo. Audio drives multimedia like nothing else, and 2020 saw a dramatic rise in content creation, with no signs of slowing down. In other words, it is the perfect time for us to roll out our first-ever Audio Trends forecast for 2021.'})
  ]),
  u('containerDirective', {name: 'Animation'}, [
    u('blockquote', [
      u('link', {url: 'https://hlx.blob.core.windows.net/external/45b8d3f95c5003a81426fa76e977de8937dd0254#image.mp4'}, [u('text', {value: 'https://hlx.blob.core.windows.net/external/45b8d3f95c5003a81426fa76e977de8937dd0254#image.mp4'})])
    ])
  ])

]);

// console.log(inspect.noColor(tree));

console.log(original);

const res = unified().use(directive).use(stringify).stringify(tree);

console.log(res);
