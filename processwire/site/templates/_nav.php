<?php
    $rootPage = $pages->get('/');
?>
<button id="nav-trigger" class="absolute top-0 right-0 z-20 bg-black text-white w-20 h-10 p-2" onsclick="document.querySelector('.primary-nav') && document.querySelector('.primary-nav').classList.toggle('is-open')">
    MENU
</button>
<nav id="nav-panel" class="rf:primary-nav primary-nav fixed z-10 w-full h-full bg-black transform -translate-x-full transition-transform duration-500 ease-out">
    <ul class="h-full flex flex-col items-center justify-around">
        <?php foreach ($rootPage->children() as $childPage): ?>
            <li class=""><a class="text-4xl text-white" href="<?=$childPage->url;?>"><?=$childPage->title;?></a></li>
        <?php endforeach; ?>
    </ul>
</nav>
