<?php
header("Access-Control-Allow-Origin: *");

$search = isset($_GET['search']) ? $_GET['search'] : '';

// Mockad data
$employees = [
    ['id' => 1, 'name' => 'Alice'],
    ['id' => 2, 'name' => 'Oliver'],
    ['id' => 3, 'name' => 'Charlie'],
    ['id' => 4, 'name' => 'Diana'],
    ['id' => 5, 'name' => 'TOR'],
];

// Filtrera baserat på söksträng
$result = array_filter($employees, function ($employee) use ($search) {
    return stripos($employee['name'], $search) !== false;
});

echo json_encode(array_values($result));