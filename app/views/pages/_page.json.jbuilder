json.extract! page, :id, :controller, :action, :tracking, :created_at, :updated_at
json.url page_url(page, format: :json)
