<?php
use ElephantIO\Client,
    ElephantIO\Engine\SocketIO\Version1X;
require "vendor/autoload.php";

$client = new Client(new Version1X('http://vpn.aliarshad.info:4000'));
$client->initialize();

if(isset($_REQUEST['port']) && isset($_REQUEST['action']))
{
    $client->emit($_REQUEST['action'], ['port' => $_REQUEST['port']]);
    $client->close();
}
