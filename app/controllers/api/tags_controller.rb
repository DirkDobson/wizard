class Api::TagsController < ApplicationController
  def create
    #POST /api/tags params = { tag: {name: 'mario' }}
    tag = Tag.find_or_create_by(name: params[:tag][:name])
    if !current_user.tags.find_by(id: tag.id)
      Tagging.create(user_id: current_user.id, tag_id: tag.id)
      render json: tag
    end
  end
end
