(function() {

    'use strict';

    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=2&q=http://blog.jonathangoley.com/feed',
        type: 'GET',
        dataType: 'jsonp'
    })
        .done(function(data) {
            var posts = new Parse.Collection(data.responseData.feed.entries);

            new JGo.Blog({
                $container: $('.blog-posts-wrap'),
                collection: posts
            });

        });


    JGo.Blog = Parse.View.extend({
        tagName: 'ul',
        className: 'blog-posts-list',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container
            });
            options.$container.html(this.el);
            this.render();
        },

        render: function() {
            this.collection.each(_.bind(this.renderChildren, this));
        },

        renderChildren: function(post) {
            new JGo.BlogPost({
                $container: this.$el,
                model: post
            });
        }

    });

    JGo.BlogPost = Parse.View.extend({
        tagName: 'li',
        className: 'blog-posts-listItem',
        template: _.template($('#blog-post-template').html()),
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container
            });
            options.$container.append(this.el);
            this.render();
        },

        render: function() {
            this.$el.append(this.template(this.model.toJSON()))
        }
    });

})();