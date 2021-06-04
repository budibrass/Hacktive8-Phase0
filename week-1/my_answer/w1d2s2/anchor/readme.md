# Menghias HTML dengan CSS

- index.html
```JavaScript
<html>
  <head>
    <link href="https://fonts.googleapis.com/css?family=Slabo+27px" rel="stylesheet">
    <link href="style.css" rel="stylesheet" />
    <link href="style.css" rel="stylesheet" type="text/css">
  </head>
  <body>
    <div class="separator">
      <h1>1. Selector dan Styling Sederhana</h1>
      <div class="box-100" id="maroon-box" >Saya adalah Box Berwarna Maroon</div>
      <div class="box-100" id="dark-blue-box">Saya adalah Box Berwarna Dark Blue</div>
      <div class="box-100" id="salem-box">Saya adalah Box Berwarna Salem</div>
    </div>
    <div class="separator">
      <h1>2. Selector Lebih Dari Satu</h1>
      <div class="box-100 red-background">Saya adalah Box Red berukuran 100</div>
      <div class="box-200 red-background">Saya juga Box Red tapi ukurannya 200</div>
      <div class="box-200 blue-background">Saya adalah Box Blue berukuran 200</div>
      <div class="box-200 green-background">Saya juga berukuran 200 tapi warnanya Green</div>
    </div>
    <div class="separator">
      <h1>3. Selector Melalui Parent</h1>
      <div class="box-list div">
        <div>Desain saya diatur oleh Parent Saya</div>
        <div>Desain saya diatur oleh Parent Saya</div>
        <div id="gold-box">Desain saya diatur oleh Parent Saya, tapi saya punya warna khusus, yaitu Gold!</div>
      </div>
    </div>
  </body>
</html>
```

- style.css
```JavaScript
/* Style Default */
body {
  font-family: 'Slabo 27px', serif;
}

h1 {
  border-bottom: 1px solid rgba(0, 0, 0, .1);
  padding-bottom: 10px;
}

.separator {
  width: 100%;
  height: auto;
  overflow: hidden;
}

/* Style Untuk Soal 1, 2, dan 3. Gunakan Dengan Sesuai! */

.box-100 {
  width: 100px;
  height: 100px;
  float: left;
  margin: 20px;
  padding: 20px;
  font-size: 15pt;
  text-align: center;
}

.box-200 {
  width: 200px;
  height: 200px;
  float: left;
  margin: 20px;
  padding: 20px;
  font-size: 15pt;
  text-align: center;
}

#maroon-box {
  color: #FFFFFF;
  background: #96281B;
}

#dark-blue-box {
  color: #FFFFFF;
  background: #4B77BE;
}

#salem-box {
  color: #FFFFFF;
  background: #1E824C;
}

.red-background {
  color: #FFFFFF;
  background: #C0392B;
}

.blue-background {
  color: #FFFFFF;
  background: #446CB3;
}

.green-background {
  color: #FFFFFF;
  background: #26A65B;
}

.box-list div {
  width: 200px;
  height: 200px;
  float: left;
  margin: 20px;
  padding: 20px;
  font-size: 15pt;
  text-align: center;
  background: #353535;
  color: #FFFFFF;
}

#gold-box {
  border-radius: 20px;
  color: #353535;
  background: #F9BF3B;
}
```