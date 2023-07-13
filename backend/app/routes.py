from main import app
from views import *

app.add_view(IndexView, "/")
app.add_view(SayHelloView, "/hello/{name}")
