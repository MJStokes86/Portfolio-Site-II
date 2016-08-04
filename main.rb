require 'rubygems'
require 'sinatra'
require 'bundler/setup'



get '/' do 
	File.read('index.html')
end

post '/' do
	require 'pony'
	name  = params[:name]
	mail = params[:mail]
	subject = params[:subject]
	body  = params[:body]

Pony.options = {
  :via => :smtp,
  :via_options => {
    :address              => 'smtp.sendgrid.net',
    :port                 => '587',
    :enable_starttls_auto => true,
    :user_name            => 'app54636495@heroku.com',
    :password             => 'j4pvdfes6230',
    :authentication       => :plain, # :plain, :login, :cram_md5, no auth by default
    :domain               => "heroku.com"
  }
}


	Pony.mail(
		:to => 'mjstokes1986@att.net', 
		:from => name + '<' + mail + '>',
		:reply_to => mail,
		:subject => subject,
		:body => body
		)
		
	

	redirect '/success'

end

get '/success' do
	File.read('success.html')


end