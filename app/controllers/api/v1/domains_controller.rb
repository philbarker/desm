# frozen_string_literal: true

###
# @description: Place all the actions related to domains
###
class Api::V1::DomainsController < ApplicationController
  ###
  # @description: Lists all the domains
  ###
  def index
    @domains = Domain.order(pref_label: :asc)

    render json: @domains
  end
end
