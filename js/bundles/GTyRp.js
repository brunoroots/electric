var pageComponent=webpackJsonppageComponent([4],{142:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=o(0),d=n(l),s=o(2),c=n(s);o(5),o(6),o(7),o(8),o(9),o(10),o(11),o(12);var p=o(143),u=n(p),f=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(d.default);c.default.register(f,u.default),t.default=f},143:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.templates=t.GTyRp=void 0;var l,d=o(0),s=n(d),c=o(2),p=n(c);goog.loadModule(function(e){function t(e,t,n){var l=function(){r("article",null,null,"id","front_matter"),r("h2"),a("Front Matter"),i("h2"),r("p"),a("All files in the "),r("code"),a("pages"),i("code"),a(" directory must have the following front matter declared at the beginning of the file."),i("p"),d({code:'---\ntitle: "Page Title"\ndescription: "Description."\n---',mode:"text"},null,n),r("p"),a("The "),r("code"),a("title"),i("code"),a(" property will be used for auto-generated navigation elements and as the page's "),r("code"),a("<title>"),i("code"),a("."),i("p"),r("p"),a("Both the "),r("code"),a("title"),i("code"),a(" and "),r("code"),a("description"),i("code"),a(" properties will be used for search functionality."),i("p"),i("article"),r("article",null,null,"id","soy_files"),r("h2"),a("Soy"),i("h2"),r("p"),a("All files ending with the "),r("code"),a(".soy"),i("code"),a(" extension will be rendered as soy templates."),i("p"),d({code:'---\ndescription: "Page description."\ntitle: "Page"\n---\n\n&#123;namespace page&#125;\n\n/**\n */\n&#123;template .render&#125;\n    <span>Hello, World!</span>\n&#123;/template&#125;',mode:"text/x-soy"},null,n),r("p"),a("Note: all "),r("code"),a("namespace"),i("code"),a(" properties must be unique across all files within the "),r("code"),a("src"),i("code"),a(" directory, and every soy file must define a "),r("code"),a(".render"),i("code"),a(" template."),i("p"),r("h3"),a("Site/Page Data"),i("h3"),r("p"),a("Every page is passed a "),r("code"),a("site"),i("code"),a(" and "),r("code"),a("page"),i("code"),a(" param."),i("p"),r("p"),a("The "),r("code"),a("page"),i("code"),a(" param represents the front matter of the current file."),i("p"),d({code:"{$page.title}\n{$page.description}",mode:"text/x-soy"},null,n),r("p"),a("The "),r("code"),a("site"),i("code"),a(" param contains project meta data such as "),r("code"),a("site.title"),i("code"),a(" and "),r("code"),a("site.repo"),i("code"),a(". It also contains the structure of the entire site which can be used to generate navigation elements. This structure data is defined as the "),r("code"),a("site.index"),i("code"),a(" property representing the index page of the project."),i("p"),d({code:"{$site.title}\n{$site.index}",mode:"text/x-soy"},null,n),r("p"),a("This data is pulled from the "),r("code"),a("dist/site.json"),i("code"),a(" file. Additional properties can be added to this data by editing the "),r("code"),a("src/site.json"),i("code"),a(" file."),i("p"),i("article"),r("article",null,null,"id","markdown_files"),r("h2"),a("Markdown"),i("h2"),r("p"),a("Markdown files are intended for easier writing of documentation and content, these files are rendered to HTML and then wrapped in a "),r("code"),a("soy"),i("code"),a(" template and rendered along all "),r("code"),a("soy"),i("code"),a(" pages."),i("p"),r("p"),a("The "),r("code"),a("namespace"),i("code"),a(" is also auto-generated based on the file path, so it does not need to be declared at the top of the file."),i("p"),d({code:'---\ndescription: "Page description."\nlayout: "docs"\ntitle: "Page"\n---\n\n# Hello, World!',mode:"markdown"},null,n),r("p"),a("See "),r("a",null,null,"href","https://developers.google.com/closure/templates/docs/commands#specialcharacters"),a("google's documentation"),i("a"),a(" for more info."),i("p"),i("article"),r("input",null,null,"type","hidden","value",e.page.title),i("input"),r("input",null,null,"type","hidden","value",e.site.title),i("input")};s(o.$$assignDefaults({content:l},e),null,n)}goog.module("GTyRp.incrementaldom");var o=goog.require("soy");goog.require("soydata");goog.require("goog.asserts"),goog.require("soy.asserts"),goog.require("goog.i18n.bidi"),goog.require("goog.string");var n=goog.require("incrementaldom"),r=n.elementOpen,i=n.elementClose,a=(n.elementVoid,n.elementOpenStart,n.elementOpenEnd,n.text),d=(n.attr,p.default.getTemplate("ElectricCode.incrementaldom","render")),s=p.default.getTemplate("docs.incrementaldom","render");return e.render=t,goog.DEBUG&&(t.soyTemplateName="GTyRp.render"),e.render.params=["page","site"],e.render.types={page:"?",site:"?"},e.templates=l=e,e});var u=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),t}(s.default);p.default.register(u,l),t.GTyRp=u,t.templates=l,t.default=l}},[142]);