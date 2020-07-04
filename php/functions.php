<?php
  function can_upload($file){
  
  $a=0;

	// если имя пустое, значит файл не выбран
    if($file['name'] == '')
		{$a=1;}
	
	/* если размер файла 0, значит его не пропустили настройки 
	сервера из-за того, что он слишком большой */
	
	if($a!=1)

	{
	if($file['size'] == 0)
		return 'Файлольшой.';
	
	// разбиваем имя файла по точке и получаем массив
	$getMime = explode('.', $file['name']);
	// нас интересует последний элемент массива - расширение
	$mime = strtolower(end($getMime));
	// объявим массив допустимых расширений
	$types = array('jpg', 'png', 'gif', 'bmp', 'jpeg');
	
	// если расширение не входит в список допустимых - return
	if(!in_array($mime, $types))
		return 'Недопустимый тип файла.';

    return true;
	}

	
  }
  

  function make_upload($file){	
    global $per;
    printf($per);

	$name =  $per.'.png';
	copy($file['tmp_name'], 'images/susi/' . $name);


  }
  ?>