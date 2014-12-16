(function() {

    'use strict';

    $.ajax({
        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=8&q=http://blog.jonathangoley.com/feed',
        type: 'GET',
        dataType: 'jsonp'
    }).done(function(data) {

        var posts = new Parse.Collection(data.responseData.feed.entries);
        var mainPosts = new Parse.Collection(data.responseData.feed.entries.slice(0, 3));
        new JGo.Blog({
            $container: $('.blog-posts-wrap'),
            collection: mainPosts,
            showSnippet: true
        });

        new JGo.Blog({
            $container: $('.blog-posts-shortList'),
            collection: posts,
            showSnippet: false
        });
    });

    JGo.Blog = Parse.View.extend({
        tagName: 'ul',
        className: 'blog-posts-list',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                showSnippet: opts.showSnippet
            });
            options.$container.html(this.el);
            this.showSnippet = options.showSnippet;
            this.render();
        },

        render: function() {
            this.collection.each(_.bind(this.renderChildren, this));
        },

        renderChildren: function(post) {
            new JGo.BlogPost({
                $container: this.$el,
                model: post,
                showSnippet: this.showSnippet
            });
        }

    });

    JGo.BlogPost = Parse.View.extend({
        tagName: 'li',
        className: 'blog-posts-listItem',
        initialize: function(opts) {
            var options = _.defaults({}, opts, {
                $container: opts.$container,
                showSnippet: opts.showSnippet
            });
            options.$container.append(this.el);
            if(options.showSnippet){
                this.template = _.template($('#blog-post-template').html());
            } else {
                this.template = _.template($('#blog-postList-template').html());
            }
            this.render();
        },

        render: function() {
            this.$el.append(this.template(this.model.toJSON()))
        }
    });

})();