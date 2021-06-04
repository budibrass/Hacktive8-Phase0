# Membuat Layout dan Desain Halaman Web dengan CSS

- index.html
```JavaScript
<html>
  <head>
    <link href="style.css" rel="stylesheet" />
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <header>
      <img id="logo" src="img/sample-logo.png" width="200px" />
      <nav>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </nav>
    </header>
    <section>
      <h1>Featured Posts</h1>
      <div id="article-list">
        <article>
          <a href=""><h3>Lorem Post 1</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </article>
        <article>
          <a href=""><h3>Lorem Post 2</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </article>
        <article>
          <a href=""><h3>Lorem Post 3</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </article>
        <article>
          <a href=""><h3>Lorem Post 4</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </article>
        <article>
          <a href=""><h3>Lorem Post 5</h3></a>
          <p>
            Lorem Ipsum Dolor Sit Amet, mea te verear signiferumque, per illum labores ne. Blandit omnesque scripserit pri ex, et pri dicant eirmod deserunt. Aeque perpetua ea nec. Sit erant patrioque delicatissimi ut. Et sea quem sint, nam in minim voluptatibus. Etiam placerat eam in.
          </p>
        </article>
      </div>
    </section>
    <footer>
      <h5>copyright &copy; 2016 by HACKFOX</h5>
    </footer>
  </body>
</html>
```

- style.css
```JavaScript
* {
  /*border: 1px solid rgba(0, 0, 0, 0.3);*/
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Slabo 27px', serif;
}

/* === HEADER === */
header {
  background: #FFF;
  width: 100%;
  height: 8%;
  border-bottom: 2px solid rgba(0, 0, 0, 0.3);
  position: fixed;
}

#logo {
  display: block;
  float: left;
  margin: 0.5% 5%;
}

/* == Navigation == */
nav {
  float: right;
  margin-right: 0.5%;
}

li {
  display: inline-block;
  font-size: 120%;
  font-style: bold;
  margin: 10px 20px;
  padding-top: 1%;
}

/* === CONTENT === */
section {
  width: 100%;
  background-image: url("img/sample-pattern.png");
  padding-top: 50px;
  padding-bottom: 30px;
}

h1 {
  color: MidnightBlue;
  font-size: 250%;
  text-align: center;
  padding: 30px 0px;
}

/* == LIST == */
#article-list {
  width: 70%;
  margin: 0px auto;
  padding: 0px 0px;
  background-color: #fff;
}

#article-list h3{
  color: LightBlue;
  margin-bottom: 1em;
}

#article-list a{
  text-decoration: none;
}

#article-list article {
  margin: 0px auto;
  /*padding: 30px 30px;*/
  padding: 3% 3%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
}

/* === FOOTER === */
footer{
  color: white;
  background: black;
  height: 6em;
  width: 100%;
}
h5{
  text-align: center;
  padding-top: 2em;
  font-size: 0.75em;
}
/*
h5{
  color: white;
  text-align: center;
  padding: 30% 0;
}*/
```