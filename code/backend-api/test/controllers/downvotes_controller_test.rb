require 'test_helper'

class DownvotesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get downvotes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get downvotes_destroy_url
    assert_response :success
  end

end
