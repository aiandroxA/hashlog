module TwitterAPI
  class User
    include TwitterAPIClient

    def initialize(user)
      @user = user
    end

    def call
      avatar = twitter_data.profile_image_url_https
      avatar_url = avatar.scheme + '://' + avatar.host + avatar.path
      { name: twitter_data.name, screen_name: twitter_data.screen_name,
        description: twitter_data.description, avatar_url: avatar_url }
    end

    private

    attr_reader :user

    def twitter_data
      @twitter_data ||= client(user).user(user_id: user.twitter_id)
    end
  end
end
