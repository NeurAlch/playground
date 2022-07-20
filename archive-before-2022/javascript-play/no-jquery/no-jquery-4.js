if(Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        proto.webkitMatchesSelector;
}

strictEqual($('#first-list-item').is('.list-item'), true, 'is');
strictEqual(document.getElementById('first-list-item').matches('.list-item'), true, 'matches');