function Button(text) {
    this.text = text || 'Hello';
    };
Button.prototype = {
    create: function() {
        var self = this;
        this.$element = $('<button></button>');
        this.$element.appendTo($('body'));
        this.$element.text(this.text);
        this.$element.click(function() {
            alert(self.text);
        });
    }
}
    var btn1 = new Button('Hello');
    btn1.create();