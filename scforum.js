Posts = new Meteor.Collection('posts');
if (Meteor.isClient) {
  Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });
  Template.posts.helpers({
    posts: function() {
      return Posts.find();
    }
  })

  Template.form.events = {
    'click #submit': function(event){
      event.preventDefault();
      var title = $('#title').val();
      var body = $('#body').val();
      Posts.insert({
        title: title,
	username: Meteor.user().username,
        body: body
      });
      $('#title, #body').val('');
    }
  }

}
