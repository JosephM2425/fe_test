require "test_helper"

class ApplicantSetingsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get applicant_setings_index_url
    assert_response :success
  end
end
