# Membuat Halaman HTML Sederhana

<!-- ## Objectives -->
- index.html
```JavaScript
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body >
<h1>My Book</h1>
<h2>Social Media Kita Bersama</h2>
<p>Bersama kita membangun ekosistem yang sehat dan budaya saling berbagi yang menyenangkan!</p>

<h3>Benefit Join di MyBook</h3>
<ul>
	<li>Social Media yang Nyaman dan Mudah</li>
	<li>Fitur yang canggih dan menggunakan teknologi terkini</li>
	<li>Dibuat oleh calon developer full-stack masa depan</li>
</ul>

<h3>Cara Bergabung</h3>
<ol type="1">
	<li>Mengunjungi Website ini</li>
	<li>Mendaftar di <a href="form.html">Form Sign Up</a></li>
	<li>Selesai!</li>
</ol>
</body>
</html>
```

- form.html
```JavaScript
<!DOCTYPE html>
<html>
<head>
	<title>FORM</title>
</head>
<body>
<h1>Buat Account Baru!</h1>
<h3>Sign Up Form</h3>
<form action="welcome.html" method="POST">
	<label for="fname">First Name :</label><br>
  	<input type="text" name="fname" id="fname"><br><br>

  	<label for="lname">Last Name :</label><br>
  	<input type="text" name="lname" id="lname"></input><br><br>

  	<label for="gender">Gender :</label><br>
  	<input type="radio" name="gender" id="male" value="male"></input>
  	<label for="male">Male</label><br>

  	<input type="radio" name="gender" id="female" value="female"></input>
  	<label for="female">Female</label><br>

  	<input type="radio" name="gender" id="other" value="other"></input>
  	<label for="other">other</label><br><br>

  	<label for="nasional">Nationality :</label><br>
  	<select name="nasional" id="nasional">
  		<option value="indonesian">Indonesian</option>
  		<option value="singaporean">Singaporean</option>
  		<option value="malaysian">Malaysian</option>
  		<option value="australian">Australian</option>
  	</select><br><br>

  	<label for="Language">Language Spoken :</label><br>
  	<input type="checkbox" name="bahasa" id="indo" value="indo"></input>
  	<label for="indo">Bahasa Indonesia</label><br>

  	<input type="checkbox" name="bahasa" id="english" value="english"></input>
  	<label for="english">English</label><br>

  	<input type="checkbox" name="bahasa" id="other" value="other"></input>
  	<label for="other">Other</label><br><br>

  	<label for="extra">Bio:</label><br>
  	<textarea name="extra" id="extra" rows="8"></textarea><br>

  	<input type="submit" value="sign up"></input>

</form>
</body>
</html>
```

- welcome.html
```JavaScript
<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
<h1>SELAMAT DATANG!</h1>
<h3>Terima kasih telah bergabung di MyBook. Social Media kita bersama</h3>

</body>
</html>
```
