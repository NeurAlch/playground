var jqList = $('#list');
var list = document.getElementById('list');

strictEqual(jqList[0], list, 'By id');

var jqFirst = $('.list-item');
var listItems = document.querySelectorAll('.list-item');
var first = document.querySelector('.list-item');

strictEqual(jqFirst[0], listItems[0], 'By querySelectorAll');
strictEqual(jqFirst[0], first, 'By querySelector');