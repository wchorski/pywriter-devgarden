Create a statically generated site with [NextJS](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/NextJS.md), and pump in my [Obsidian](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Obsidian.md) vault as the content. 
- convert [Markdown](/vault/%F0%9F%93%81developer/Markdown.md) into html via [remarkjs/remark-html](/vault/https://github.com/remarkjs/remark-html) or [remarkjs/react-markdown](/vault/https://github.com/remarkjs/react-markdown)

### syntax highlighting styles
[react-syntax-highlighter/AVAILABLE_STYLES_PRISM.MD at master · react-syntax-highlighter/react-syntax-highlighter (github.com)](/vault/github.com))

#todo 
- [x] folders have their own page that shows all internal link structure
	- [ ] make it obvious what's a folder and what's a file
- [x] Covert **Markdown** to show in NextJS
- [x] import and use frontmatter optionally 
- [x](/vault/daveceddia.com))
- [x] Dynamically create pages based on .md Files
- [x] drill down the **Vault's** directory to retain Obsidian's file structure in NextJS's routing
	- [x] use node to copy directory structure from `./vault` -> `./pages`
	- [x] drop a `[slug].jsx` file in the base of each directory
		- [ ] figure out why this isn't working **async**
- [x] each `[slug].jsx` check's it's own absolute path, then looks in vault 
- [x] ==clean links== could be better
	- [x] during **remark** conversion. remove `.md` from any `<a>` tags so links work correctly 
	- [x] spaces ` ` = `__`
	- [x] apostrophes `'` = `%27`
	- [x] ampersand `&` = `%26`
	- [x] comma `,` = `%2C`
	- [x] only sanatize inside `( ... )` using regex
	- [x] add `/vault/` in front of every link to make it absolute for NextJS routing
- [ ] automate menu nav to match ./pages directory 
- [ ] ==create `aside` with page heading shortcuts==
	- [x] gather all heading tags after hydration (use `isLoading` for react-markdown)
	- [x] build out  smooth scrolling sticky `aside` list 
	- [x] link that connects current route `/vault/MarkdownPage` with `#TheHeading`\
	- [x] highlight active heading anchor
- [x] append `<h1>` of pretty filename to top of any file that doesn't have `title:` metadata 
- [ ] use rsync to copy over vault
- [ ] use **chokedar** to watch and update app's vault 
- [x] pretty up any **slug** (exp: change 'space' to underscore, '&' to 'and', etc) (possibly do this after file has been found, then pretty the URL for user. sounds dangerous tho)
- [x] emoji's work in URL thank god
- [](/vault/https://ahmadawais.com/next-js-absolute-imports-aliases/#:~:text=Next.js__Absolute__Imports__%2523__Basically__you__only__need,via__jsconfig.json__(JS__projects)__or__tsconfig.json__(TS__projects).)
- [ ] search bar with autocomplete 
- [ ] shortcut `/` that focus search bar
- [ ] delete / remove files folders when not building from scratch
- [x] drop a `index.jsx` in root of any `./vault` directory with a spread of links to child files
- [ ] create a loading animation
- [x] can i fix dynamic routing with `./pages/[...folder]/[...slug]`? - NO, CATCH ALLs CAN ONLY BE AT END
- [ ] make tags clickable links
- [ ] does grabbing images work?
- [x] fix list indentation when words wrap in Table of Contents
- [ ] home page
	- [ ] recently added notes carousel
- [x] show language used in codeblock
- [ ] one click copy code block or snippet
- [x] do i need to even remove '.md' for NextJS routing? yeah i can leave on .md
- [ ] tags
	- [ ] [[Solved] Regex to find words that start with a specific | 9to5Answer](/vault/https://9to5answer.com/regex-to-find-words-that-start-with-a-specific-character)
	- [ ] strip tags out of .md
	- [ ] put them in <a> tags in the sidebar
- [ ] wide codeblocks take up large space. shrink down whole page or max-width codeblock 


## Other Tutorials 
- copy folders / files with node - [stackoverflow](/vault/https://stackoverflow.com/a/64255382/15579591)
- auto gen menu off of ./pages - [reactjs - How to generate a menu based on the files in the pages directory in Next.js - Stack Overflow](/vault/https://stackoverflow.com/questions/63692392/how-to-generate-a-menu-based-on-the-files-in-the-pages-directory-in-next-js)
- *Video Tut* [Next.js static blog with Markdown and React.js TypeScript - YouTube](/vault/https://www.youtube.com/watch?v=vdW1VStKUUU)
- *Legacy* [How to use the Remark Markdown converters with Next.js projects - DEV Community 👩‍💻👨‍💻](/vault/https://dev.to/jameswallis/how-to-use-the-remark-markdown-converters-with-next-js-projects-a8a)
- single directory deep markdown to nextJS - [Static Blog With Next.js and Markdown - YouTube](/vault/https://www.youtube.com/watch?v=MrjeefD8sac&t=2055s) 

## Trial & Tribulations
1. converting markdown to NextJS is pretty easy with **remarkjs**
2. copying the folder structure from ./vault to ./pages was fairly simple with the help of **stackoverflow**
3. cloning a `[slug].jsx` was a nightmare as something to do with Node's *async fs.writefile* wasn't writing and didn't show errors, so I made a seprate file to clone a file and that works for some reason  
4. characters allowed in URLs`ALPHA  DIGIT  "-" / "." / "_" / "~"` 
5. dynamically getting vault filepaths with `fs` and `path` while also  splitting the url into an Array  so the Catch All `[...slug].jsx` can read it
6. render heading tags with anchors dynamically - https://github.com/remarkjs/react-markdown/issues/358#issuecomment-782917944 -> [eegil](/vault/https://github.com/eegli)

---

## Setup for new users
1. don't forget this file. sometimes it doesn't copy over -> `./pages/vault/[slug].jsx`

## just messin
[Nginx Proxy Manager](/vault/%F0%9F%93%81developer/Home__Lab__%F0%9F%8F%A0/Nginx__Proxy__Manager.md)
[2022.10.28 Teresa & Thomas](/vault/%F0%9F%93%81music/DJ_William%F0%9F%8E%9B/2022.10.28__Teresa__&__Thomas.md)