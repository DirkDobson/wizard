class Api::UsersController < ApplicationController
  def update
    user = User.find(params[:id])
    user.name = params[:name] ? params[:name] : user.name
    user.email = params[:email] ? params[:email] : user.email

    s3 = AWS::S3::Resource.new(region: ENV['AWS_REGION'])
    s3_bucket = ENV['BUCKET']
    file = params[:file]

    if file
      begin
        ext = File.extname(file.tempfile)
        obj = s3.bucket(s3_bucket).object("avatars/#{user.id}#{ext}")
        obj.upload_file(file.tempfile, acl: 'public-read')
        user.image = obj.public_url
      rescue => e
        render json: { errors: e }, status: 422
    end
  end



    if user.save
      render json: user
    else
      render json: {error: user.errors }, status: 422
  end
end
