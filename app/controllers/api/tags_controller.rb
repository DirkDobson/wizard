class Api::TagsController < ApplicationController
  def create
    #POST /api/tags params = { tag: {name: 'mario' }}
    tag = Tag.find_or_create_by(name: params[:tag][:name])
  end
end
