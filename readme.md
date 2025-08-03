# Test Chas Page

## SSG Method Using Hugo

- https://gohugo.io/getting-started/quick-start/
  - https://gohugo.io/installation/
  - https://git-scm.com/book/en/v2/Getting-Started-Installing-Git
  - https://gohugo.io/getting-started/quick-start/#commands
    
## Tools

- Code Editor
- Git
- Terminal

## Basic Commands

- git
  - `git clone <repo>` - CLone a repo in your environment
  - `git pull` - Pull from origin and merge into local
  - `git add <files>` - Add changes
  - `git commit -m <message>` - Add commit message
  - `git push` - Push changes to origin
- Hugo
  - `hugo server` - Start a server
  - `hugo` - Build the site
  - `hugo mod clean --all` - Clear Cache


## Content Management

### File Structure

This project is basically the working file.

```
root
├── assets
│   ├── js
│   │   └── main.js
│   └── sass
│       └── main.scss
├── content
├── layouts
│   └── _default
│       └── home.html
├── static
│   └── images
└── public
```

#### Assets folder 

- Contains js and sass. Sass file is were you put the styles

#### Content folder

- Content folder is where the content is. 
- You should create a folder per category.
- The file name could be named anything `.md` extentions
- Each content file should have the following:
  
```
Example:
+++
draft = false
title = 'Lesson 5 - Drawing'
link = "#"
image = "/images/icon.png"
category = ["drawing"]
tags = ["charcoal"]
+++
```

- Draft: `true` or `false`
  - `false` by default
  - Determines if it's 'published' or not. If set to true, item will not show up.
- Title: `'string'`
  - Determines the title of the item
- Link:  `url`
  - Link to the pdf
- Image: `url`
  - Relative path to the images in the `static/images` folder
- Category: `array`
  - String for the category
  - Lower case
- Tags: `array`
  - String for the tags
  - Lower case
  - Multiple tags must be comma delimited. Example `["charcoal", "pencil"]`

#### Layout 

- The only file you really need to edit is `home.html`
- This is where the mark up is for the page

#### Static

- Static >  Images 
  - Put your images in the images folder

#### Public

After you make your changes, run `hugo` command. This will build the static site and compile it into the public folder.

The content of this folder is what you need to upload and is what is viewable in the browser.

