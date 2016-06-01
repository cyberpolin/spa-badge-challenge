class BadgesController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def update
    @badge = Badge.find(params[:badge_id])
    if params[:value] == 1
      @badge.votes += 1
    else
      @bade.votes -= 1
    end
  end

  def delete
  end
end
