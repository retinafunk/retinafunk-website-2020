<?php

?><!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$page->title;?></title>
    <link rel="stylesheet" type="text/css" href="<?=$config->urls->templates;?>frontend/www/lib/styles/index.css"/>
    <script defer type="module" src="<?=$config->urls->templates;?>frontend/www/lib/js/app.js"></script>
</head>
<body>
    <header class="rf:header fixed z-10 w-full top-0 h-16"><?php include('_nav.php');?></header>
    <div class="container md:mx-auto pt-16">
        <main pw-id="content" id="content"></main>
    </div>

    <footer></footer>
</body>
</html>