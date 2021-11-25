<!DOCTYPE html>
<html>
<head>
	<?php include('head.php')?>
	<title>CCIS</title>
</head>
<body>
	<?php include('nav.php')?>

	<?php
		if($_GET['page'] == 'game'){
			include('game.php');
		}
		else{
			include('root.php');
		};
	?>
	
	
	<?php include('slider.php')?>
	
	<?php include('scripts.php')?>
</body>

</html>