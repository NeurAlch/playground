test('Design Patterns #4 (Mixin)', function() {

    function extend(destination, source) {
        for (var property in source) {
            if (source.hasOwnProperty(property)) {
                destination[property] = source[property];
            }
        }
        return destination;
    }

    var Post = function(options) {
        this._options = options || {};
        this.title = this._options.title || 'Untitled';
        this.content = this._options.content || '';
    };

    var Tags = function() {};

    Tags.prototype.addTag = function(tag) {
        this._tags = this._tags || [];
        this._tags.push(tag);
    };

    Tags.prototype.listTags = function() {
        this._tags = this._tags || [];
        return this._tags;
    };

    Tags.prototype.removeTag = function(tag) {
        this._tags = this._tags || [];
        this._tags.splice(this._tags.indexOf(tag), 1);
    };

    var Category = function() {};

    Category.prototype.setCategory = function(category) {
        this._category = category;
    };

    Category.prototype.getCategory = function() {
        this._category = this._category || null;
        return this._category;
    };

    extend(Post.prototype, Tags.prototype);
    extend(Post.prototype, Category.prototype);

    var post = new Post({content: 'This is the content.'});

    strictEqual(post.title, 'Untitled');
    strictEqual(post.content, 'This is the content.');

    post.addTag('js');
    propEqual(post.listTags(), ['js']);

    post.addTag('javascript');
    post.removeTag('js');
    propEqual(post.listTags(), ['javascript']);

    strictEqual(post.getCategory(), null);
    post.setCategory('Programming');
    strictEqual(post.getCategory(), 'Programming');

});
