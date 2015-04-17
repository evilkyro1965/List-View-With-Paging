<?php
	$postPerPage = array_key_exists("postPerPage",$_GET) == true ? $_GET["postPerPage"] : 10;
	$page =  array_key_exists("page",$_GET) == true ? $_GET["page"] : "";
	$arrArticles = array();
	for($i=0;$i<$postPerPage;$i++) {
		$obj = (object)array('title' => 'lorem ipsum '.$page." ".$i,'content'=>'lorem ipsum dolor sit amet');
		$arrArticles[] = $obj;
	}
	print(json_encode($arrArticles));
?>