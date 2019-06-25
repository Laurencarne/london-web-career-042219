Rails Auth

- Authentication vs Authorisation - theory and nomenclature
- haveibeenpwned
- User Model / bcrypt - encryption

```rb
# routes
resources :users, only: [:new, :create, :show]

# new.html.erb

<%= form_for @user do |f| %>
 <%= f.label :username %>
 <%= f.text_field :username %>
 <%= f.label :password %>
 <%= f.text_field :password %> # password_field?
 <%= f.submit %>
<% end %>

# controller
@user = User.new(user_params)
if @user.valid?
 @user.save
 redirect_to @user
else
 redirect_to new_user_path
end

private
def user_params
 params.require(:user).permit(:username, :password, :secret)
end
```

password_digest as an attribute in our users table
bcrypt installed in Gemfile
has_secure_password in the User model

- non-restful routes - why?

```rb
# sessions
get "signup", to: "users#new", as: "signup"
get "login", to: "sessions#new", as: "login"
post "sessions", to: "sessions#create", as: "sessions"

# controller
def new
  # don't need anything in here, cause we're not setting up a
  # blank model to couple with the form
end

def create
  # no strong params cause there is no mass assignment
  user = User.find_by(username: params[:username])
  if @user && @user.authenticate(params[:password])
    redirect_to @user
  else
    redirect_to login_path
  end
end

# seessions/new.html.erb
# think about flash[:error] feedback here

<%= form_tag sessions_path do %>
  <%= label_tag "Username" %>
  <%= text_field_tag :username %>
  <%= label_tag "Password" %>
  <%= password_field_tag :password %>
  <%= submit_tag "Sign In" %>
<% end %>
```

- exposing auth in the ui
- sessions and cookies redux
- user-specific content - authorisation

```rb
# sessionscont create
  session[:user_id] = @user.id

# this allows to save user id in the sesh cookie,
# it persists across the app, as opposed to flash
# we can now customise the apps behaviour, for example:

if session[:user_id]
  @user = User.find(session[:user_id])
  @songs = @user.songs
else
  @songs = Song.all # or force a login
end

# this is tedious. do this instead:
application_controller.rb

def current_user
  if session[:user_id]
    @user = User.find_by(id: session[:user_id])
  else
  end
end

def logged_in?
  !!current_user
end

# having those methods, we can:
if logged_in?
  @songs = current_user.songs
else
  @songs = Song.all # or force a login
end

# redirecting to login when not authorized
# in applicationController:
def authorized
  redirect_to login_path unless logged_in?
end

# now, wherever we need it,
before_action :authorized

# skip for unprotected routes ( login path/ signup path )
skip_before_action :authorized, only: [:new, :create] # or whatever onlys you need
```

- logging out

Logging out
So how do you log out? By destroying the session.

routes.rb

delete "sessions", to: "sessions#destroy"
sessions_controller.rb

def destroy
session.delete(:user_id) # or session[:user_id] = nil
end
To expose this, talk about a button that shows a "Log Out" button if logged in, and a "Log In" button otherwise.

The best place to do this is in application.html.erb, but to expose our controller's method here, we must use the helper_method :logged_in? macro in our ApplicationController

Finally, in application.html.erb:

<% if logged_in? %>
<%= link_to "Logout", sessions_path, method: :delete %>
<% else %>
<%= link_to "Login", login_path %>
<% end %>
