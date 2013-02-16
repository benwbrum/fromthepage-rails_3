require 'spec_helper'

describe User do

  before do
    @user = FactoryGirl.create(:user) # User.new(login: "ExampleUser", password: "1234567", password_confirmation: "123467")
    puts "Before before before before before before before before before before before before before before before before"
  end

  subject { @user }

  it { should respond_to(:login) }
  it { should respond_to(:password) }
  it { should respond_to(:password_confirmation) }

  it "login must be unique" do
    user2 = User.new
    user2.login = @user.login
    user2.password = "1234567"
    user2.password_confirmation = "1234567"
    
    user2.should_not be_valid
    puts "passed should be_valid"
    User.count.should == 1
    
  end

  describe "when login is not present" do
    before { @user.login = " " }
    it { should_not be_valid }
  end

  describe "when password is not present" do
    before { @user.password = " " }
    it { should_not be_valid }
  end

  describe "when password_confirmation is not present" do
    before { @user.password_confirmation = nil }
    it { should_not be_valid }
  end


  it "gets the count" do
    puts "User count: #{User.count}"
  end

end
