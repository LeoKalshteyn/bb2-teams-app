class TeamsController < ApplicationController
  def index
    render status: 200, json: Team.all
  end
end
