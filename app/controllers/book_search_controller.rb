class BookSearchController < ApplicationController

  def index 
    key = Rails.application.secrets.goodreads_key
    @books = HTTParty.get("https://www.goodreads.com/search/index.xml?key=#{key}&q=#{search_params[:term]}").parsed_response
    render json: @books, status: :ok
  end

  private

  def search_params
    params.permit(:term)
  end

end
