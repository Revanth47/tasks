<?php 
$db_hostname='localhost';
$db_database='nitt';
$db_username='root';
$db_password='';
$db_server=mysqli_connect($db_hostname,$db_username,$db_password)
or die("Unable to connect to mySQL".mysql_error());
mysqli_select_db($db_server,$db_database) or die("Unable to connect to mySQL".mysql_error());
$rn=$_POST['roll_no'];
$nm=$_POST['name'];
$dept=$_POST['department'];
$yos=$_POST['year_of_study'];
$em=$_POST['email'];
$pw=$_POST['password'];
$sql="INSERT INTO reg(roll_no,name,department,year_of_study,email,password) 
VALUES('$rn','$nm','$dept','$yos','$em',SHA1('$pw'))";
$result=mysqli_query($db_server,$sql);
if($result)
	header("Successful");
else
	echo "error!";
$imageFileType = pathinfo(basename($_FILES['file']['name']),PATHINFO_EXTENSION);
if($_FILES['file']['name'])
{
	if(!$_FILES['file']['error'])
	{
		$new_file_name =$rn;
			move_uploaded_file($_FILES['file']['tmp_name'],$new_file_name.".".$imageFileType);
		$message = 'Congratulations!  Your file was accepted.';
	}
	else
	{
		$message = 'Ooops!  Your upload triggered the following error:  '.$_FILES['file']['error'];
	}
}
?>