<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">	
	<title>Work calendar</title>
	<meta name="description" content="">
	<link rel="shortcut icon" href="./images/favicon.png" type="image/x-icon">	
	<link rel="stylesheet" href="<?php echo site_url('plugin/fontawesome/css/all.min.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('js/main.css'); ?>">
	<link rel="stylesheet" href="<?php echo site_url('css/style.css?v=1.1'); ?>">
</head>
<body>
	<div id="app_root"></div>
	<?php 
		$all_status = App\Models\Work::statusAll();
		$all_statu_color = App\Models\Work::getColorStatusName();
	 ?>
	<script>
		window._appConfig = {
			app_url : "<?php echo url(); ?>",
			work_list_url : "<?php echo url('works') ?>",
			work_update_url : "<?php echo url('works/update') ?>",
			work_add_url : "<?php echo url('works/add') ?>",
			work_delete_url : "<?php echo url('works/delete') ?>",
			work_status : <?php echo json_encode($all_status); ?>,
			work_status_color : <?php echo json_encode($all_statu_color,JSON_UNESCAPED_UNICODE) ?>
		};
		window._appState = {};
	</script>	
	<script src="<?php echo site_url('js/app.js'); ?>"></script>
</body>
</html>