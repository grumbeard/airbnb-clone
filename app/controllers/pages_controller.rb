require "open-uri"

class PagesController < ApplicationController
  def flats
    @flats = flats_json
  end

  def show
    @id = params[:id].to_i
    flats = flats_json
    @flat = (flats.select { |flat| flat['id'] == @id })[0]
  end

  def flats_json
    url = "https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json"
    return JSON.parse(open(url).read)
  end
end
