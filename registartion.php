<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>
<?php
var frmvalidator  = new Validator("register");
frmvalidator.EnableOnPageErrorDisplay();
frmvalidator.EnableMsgsTogether();
frmvalidator.addValidation("name","req","Please provide your name");
frmvalidator.addValidation("email","req","Please provide your email address");
frmvalidator.addValidation("email","email","Please provide a valid email address");
frmvalidator.addValidation("username","req","Please provide a username");
frmvalidator.addValidation("password","req","Please provide a password"); ?>
</body>
</html>