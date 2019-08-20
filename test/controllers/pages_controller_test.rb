require 'test_helper'

class PagesControllerTest < ActionDispatch::IntegrationTest
  test "should get flats" do
    get pages_flats_url
    assert_response :success
  end

  test "should get flats/:id" do
    get pages_flats/:id_url
    assert_response :success
  end

end
