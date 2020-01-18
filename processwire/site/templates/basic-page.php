<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
    <title><?php echo $page->title; ?></title>
    <link rel="stylesheet" type="text/css" href="<?=$config->urls->templates;?>styles/main.css"/>
    <script defer type="module" src="<?=$config->urls->templates;?>frontend/www/lib/js/app.js"></script>
</head>
<body>
<h1><?php echo $page->title; ?></h1>
<?php if ($page->editable()) echo "<p><a href='$page->editURL'>Edit</a></p>"; ?>
<div>
    <div id="app"></div>
    <div id="app2"></div>
    <div id="gql-result"></div>
    <lit-elem-demo></lit-elem-demo>
</div>

</body>
</html>
