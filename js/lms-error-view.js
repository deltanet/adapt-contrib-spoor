define([
    'core/js/adapt'
], function(Adapt) {

    var LmsErrorView = Backbone.View.extend({

        className: "spoor-lms-error",

        initialize: function() {
          this.render();
        },

        render: function() {
          var data = this.model;
          var template = Handlebars.templates["lms-error"];
          this.$el.html(template(data));
        }
    });

    return LmsErrorView;

});
