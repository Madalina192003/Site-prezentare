<?php
// Servește fișierele statice direct
$request = $_SERVER['REQUEST_URI'];

switch ($request) {
    case '/' :
    case '' :
        require __DIR__ . '/index.html';
        break;
    case '/contact' :
        require __DIR__ . '/contact.html';
        break;
    case '/produse' :
        require __DIR__ . '/produse.html';
        break;
    case '/formular' :
        require __DIR__ . '/formular.html';
        break;
    default:
        http_response_code(404);
        require __DIR__ . '/404.html';
        break;
}