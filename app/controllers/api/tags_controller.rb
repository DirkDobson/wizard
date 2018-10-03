class Api::TagsController < ApplicationController
  def index
    #GET /api/tags
    render json: current_user.tags 
  end

  def create
    #POST /api/tags params = { tag: {name: 'mario' }}
    tag = Tag.find_or_create_by(name: params[:tag][:name])
    if !current_user.tags.find_by(id: tag.id)
      Tagging.create(user_id: current_user.id, tag_id: tag.id)
      render json: tag
    end
  end

  def destroy
    # DELETE /api/tags/:id
    # deleting the tagging not the tag
    tag = Tagging.find_by(user_id: current_user.id, tag_id: params[:id])
    tag.destroy
  end
end
