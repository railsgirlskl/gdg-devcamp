Link to sample project: etc etc etc

**Introduction**

Open sublime.
Required files:
create a folder and call it `devcamp`
create a html file and call it `index.html`
write the html basic.

**HTML**

Define the basic structure of the website

```
<!DOCTYPE html>
<html>
  <head>
    <title>Title of the document</title>
  </head>
  <body>
    The content of a document
  </body>
</html>
```

Tip: Save your code after every step.

Open `index.html` with the browser of your choice. (We prefer Chrome :))

It should look something like this:

== gambar sini

Below `<body>`, and make sure before `</body>` add code:

```
<h1>Johan bin Dolah</h1>
<h2>Software Developer</h2>
<span>johan@google.com</span>
<span>+6 016 585 0000</span>
<hr>
<h3>Personal Summary</h3>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
<hr>
```

You can go ahead and replace the name and details to yours. After all, it is your resume. :)

Save it and preview it on the browser.

It should look something like this:

After the last line, `<hr>`, continue adding more information, as such:

```
<h3>Work Experience</h3>
<p>Google Inc</p>
<p>Software Engineer</p>
<p>Jan 2015 - current </p>
<ul>
  <li>List one</li>
  <li>List two</li>
  <li>List three</li>
</ul>
<p>AirBnb Inc</p>
<p>Software Engineer</p>
<p>Jan 2014 - Dec 2015</p>
<ul>
  <li>List one</li>
  <li>List two</li>
  <li>List three</li>
</ul>
```

When you're done, don't forget to save your work and refresh your browser.

The page should look like this:

== gambar

You now have a basic resume page. But, it doesn't look very nice.

Now, let's talk about CSS.

**Coach: Explain what is CSS**

**CSS**

Link to the stylesheet to the page
```
<link rel="stylesheet" href="style.css">
```

Before styling the header, reset the default styling of the page. This ensures consistency across different browsers.

```
body {
  padding: 0;
  margin: 0;
}
```

Then, change the default font-family to:
```
font-family: 'Proxima Nova', sans-serif;
```

Javacript:

Add this code before `</head>`
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
```
