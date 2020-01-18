<?php
// /site/templates/graphql.php

$result = $modules->get('ProcessGraphQL')->executeGraphQL();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
echo json_encode($result);