# [Recurse Center Tags](http://swag.recurse.com)

Ribbons and badges for open source project made at RC.

### What are the tags?
The Recurse Center project tags are small badges inspired by the 'Fork me on GitHub' ribbons used to 
promote RC through your open source projects. Built something awesome during your batch? Let people know by including
a tag in your project pages or documentation.

Tags are available as self-contained HTML snippets that do not require any external resouces or as image tags for less flexible use-cases such as Markdown or Jekyll. All tags link to the Recurse Center homepage.

#### Tag examples

There are many types of available tags and the selection will keep growing. Check out the [project page](http://swag.recurse.com) for the up-to-date collection of RC tags.

Examples of tags are:
###### RC Seal
<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322975/9e575dce-910b-11e5-9f47-1fb1b530a4bd.png' height='75px'/></a>

###### *Made with Love* tag
<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322973/9e557144-910b-11e5-959a-8fdaaa4a88c5.png' height='14px'/></a>

###### Badges
<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322972/9e553260-910b-11e5-8de9-a5bf00c352ef.png' height='59px'/></a>



### How to use the tags?

#### Method 1: Code Snippets

Go to the [tags project page](http://swag.recurse.com) and select a tag you want to embed in your page. Click `Copy to Clipboard` and the a snippet will be copied. The snippet includes all needed HTML, CSS and the logo SVG so it can display properly online or offline without any added resources.

#### Method 2: Image tag snippets

If you're using the tags in environments that don't allow `<style>` tags or custom CSS like in Markdown or Jekyll blogs you can use `<img>` snippets that use a PNG rendering of the tags. The images are still pretty light weight and should load quickly on your pages.

#### Method 3: Compoments

The tags will soon be available as components for React and Angular 1 & 2 (a bit later on).

To install the tags module:
`npm install rc-badges`


### How to build and contribute?

To build the tags run the webpack build command from the project's root folder: `webpack -w`.
Webpack will watch the project files and re-compile on every change. Note that this is not the webpack-dev-server 
so to open the project simply run `index.html` in your browser.


<br/>
<div style='text-align:center; margin:auto;'>
<a href='http://www.recurse.com' title='Made with love at the Recurse Center'><img src='https://cloud.githubusercontent.com/assets/2883345/11322973/9e557144-910b-11e5-959a-8fdaaa4a88c5.png' height='14px'/></a>
</div>
