class BookSearchController < ApplicationController

  def index 
    key = Rails.application.secrets.goodreads_key
    secret = Rails.application.secrets.goodreads_secret

    @books = Hash.from_xml(HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=#{search_params[:term]}"))
    render json: @books, status: :ok
  end

  private

  def search_params
    params.require(:search).permit(:term)
  end

end
