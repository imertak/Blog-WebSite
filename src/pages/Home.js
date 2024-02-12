import React from "react";
import "./Home.css";
import porscheImage from "../images/porsche.jpeg";
import userImage from "../images/dom.jpg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <div className="header">
        <div>
          <h1 className="home-title">Let's Read Some</h1>
          <h1 className="home-logo">DailyBlog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="read-button">
            <i
              className="fa-solid fa-newspaper"
              style={{
                color: "black",
                borderRadius: "50%",
                backgroundColor: "white",
                fontSize: "15px",
                padding: "10px",
                marginRight: "8px",
              }}
            ></i>
            Read Blog
          </button>
        </div>

        <img src={porscheImage} className="image" alt="Porsche"></img>
      </div>
      <div className="trends">
        <h1>Trend Blogs</h1>
        <div className="categories-button">
          <button>All</button>
          <button>News</button>
          <button>Sedan</button>
          <button>Fastback</button>
          <button>Super Sport</button>
          <button>SUV</button>
          <button>Truck</button>
        </div>
        <div className="trend-blogs">
          <i
            className="fa-solid fa-arrow-left"
            id="next-button"
            style={{ marginRight: "10px" }}
          ></i>
          <div className="trend-blog">
            <img src={porscheImage} alt="BlogImage"></img>
            <br></br>
            <Link>New Porsche Taycan Revealed</Link>
            <p className="blog-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="blog-description">
              <p className="blog-user">
                <i class="fa-solid fa-user" style={{ color: "black" }}></i>{" "}
                dailycar
              </p>
              <a>Read Blog</a>
            </div>
          </div>
          <div className="trend-blog">
            <img src={porscheImage} alt="BlogImage"></img>
            <br></br>
            <Link>New Porsche Taycan Revealed</Link>
            <p className="blog-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="blog-description">
              <p className="blog-user">
                <i class="fa-solid fa-user" style={{ color: "black" }}></i>{" "}
                dailycar
              </p>
              <Link>Read Blog</Link>
            </div>
          </div>
          <div className="trend-blog">
            <img src={porscheImage} alt="BlogImage"></img>
            <br></br>
            <Link>New Porsche Taycan Revealed</Link>
            <p className="blog-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="blog-description">
              <p className="blog-user">
                <i class="fa-solid fa-user" style={{ color: "black" }}></i>{" "}
                dailycar
              </p>
              <a>Read Blog</a>
            </div>
          </div>
          <div className="trend-blog">
            <img src={porscheImage} alt="BlogImage"></img>
            <br></br>
            <Link>New Porsche Taycan Revealed</Link>
            <p className="blog-title">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="blog-description">
              <p className="blog-user">
                <i class="fa-solid fa-user" style={{ color: "black" }}></i>{" "}
                dailycar
              </p>
              <a>Read Blog</a>
            </div>
          </div>
          <i className="fa-solid fa-arrow-right" id="next-button"></i>
        </div>

        <h1>Admins</h1>
        <div className="admins">
          <div className="admin">
            <img src={userImage} alt="UserImage"></img>
            <div>
              <Link>Dominic Toretto</Link>
              <p>15.7K</p>
            </div>
          </div>
          <div className="admin">
            <img src={userImage} alt="UserImage"></img>
            <div>
              <Link>Dominic Toretto</Link>
              <p>35.0K</p>
            </div>
          </div>
          <div className="admin">
            <img src={userImage} alt="UserImage"></img>
            <div>
              <Link>Dominic Toretto</Link>
              <p>12.3K</p>
            </div>
          </div>
          <div className="admin">
            <img src={userImage} alt="UserImage"></img>
            <div>
              <Link>Dominic Toretto</Link>
              <p>1.8K</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
