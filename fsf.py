import mimetypes
import os
from flask import Flask, render_template


mimetypes.add_type('application/javascript', '.mjs')
app = Flask(__name__)

@app.route("/three_d_poly")
def three_d_poly_map():
    token=os.environ['GAODE_PASS']
    return render_template('three_d_poly.html', token=token)

@app.route("/animate_path")
def animate_path_map():
    token=os.environ['GAODE_PASS']
    return render_template('animate_path.html', token=token)

@app.route("/gaode")
def gaode_map():
    token=os.environ['GAODE_PASS']
    return render_template('gaode.html', token=token)

@app.route("/")
def index_page():
    return render_template('index.html')
