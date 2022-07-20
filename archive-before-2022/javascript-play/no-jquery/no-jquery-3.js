// JQuery -----------------------------------------

var jqItems = $('.list-item');

// First item

// Already wrapped
var jqFirst = jqItems.first();
var jqFirst1 = jqItems.eq(0);
strictEqual(jqFirst.text(), 'First item', '.first()');
strictEqual(jqFirst1.text(), 'First item', '.eq(0)');

// Not wrapped
var jqFirst2 = jqItems.get(0);
var jqFirst3 = jqItems[0];
strictEqual($(jqFirst2).text(), 'First item', '.get(0)');
strictEqual($(jqFirst3).text(), 'First item', 'list[0]');

// Last item

// Already wrapped
var jqLast = jqItems.last();
var jqLast1 = jqItems.eq(-1);
strictEqual(jqLast.text(), 'Third item', '.last()');
strictEqual(jqLast1.text(), 'Third item', '.eq(-1)');

// Not wrapped
var jqLast2 = jqItems.get(-1);
var jqLast3 = jqItems[jqItems.length - 1];
strictEqual($(jqLast2).text(), 'Third item', '.get(-1)');
strictEqual($(jqLast3).text(), 'Third item', 'list[list.length - 1]');

// No JQuery --------------------------------------

var items = document.querySelectorAll('.list-item');

// First item
var first = document.querySelector('.list-item');
var first1 = items.item(0);
var first2 = items[0];

strictEqual(first.textContent, 'First item', 'querySelector');
strictEqual(first1.textContent, 'First item', '.item(0)');
strictEqual(first2.textContent, 'First item', 'list[0]');

// Last item
var last = items[items.length - 1];

strictEqual(last.textContent, 'Third item', 'items[items.length - 1]');
