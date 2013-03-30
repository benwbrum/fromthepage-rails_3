source :gemcutter
gem "rails", "3.2.11"

gem 'will_paginate' , '3.0.4'
gem 'rmagick'
gem 'hpricot'
gem 'oai', "0.3.0"
gem 'capistrano'

gem 'mysql2','0.3.11'

# replacing the old Rails 2.3-style plugins
gem 'acts_as_list', '0.2.0'
gem 'acts_as_tree', '1.2.0'
gem 'in_place_editing', '1.2.0'

# bundler requires these gems in all environments
# gem "nokogiri", "1.4.2"
# gem "geokit"

group :development do
  # bundler requires these gems in development
  # gem "rails-footnotes"
  # 
end

group :test do
  # bundler requires these gems while running tests
  # gem "rspec"
  # gem "faker"
  gem "database_cleaner", "0.9.1"
  gem "capybara", "2.0.2"
  gem "shoulda", "3.4.0"
end

group :production do
  # bundler requires these gems in development
  # gem "rails-footnotes"
  # gem 'ftools'
end

gem "rspec-rails", "2.12.2", :group => [:development, :test]
gem "factory_girl_rails", "4.2.1", :group => [:development, :test]

#- EOF