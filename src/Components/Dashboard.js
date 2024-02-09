import React from "react";
import './Dashboard.css';

function Dashboard(){
    return(
        <>
        <div className="container1">
        <h3 style={{textAlign:"center"}}>DASHBOARD</h3>
        <div className="main__cards">
          <div className="card c1">
            <div className="card_inner">
              <p className="text-primary-p">Completed Requests</p>
              <span className="font-bold text-title">50+</span>
              
            </div>
          </div>

          <div className="card c2">
            <div className="card_inner">
              <p className="text-primary-p">Suggestions</p>
              <span className="font-bold text-title">50+</span>
            </div>
          </div>

          <div className="card c3">
            <div className="card_inner">
              <p className="text-primary-p">Feedback</p>
              <span className="font-bold text-title">100+</span>
            </div>
          </div>

          <div className="card c4">
            <div className="card_inner">
              <p className="text-primary-p">Complaints</p>
              <span className="font-bold text-title">25+</span>
            </div>
          </div>
        </div>
        <h3 style={{textAlign:"center"}}>SERVICES</h3>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    <div class="carousel-inner">
      <div class="item active">
      <img src="images/clean.jpg" width="60%"  />
      </div>

      <div class="item">
      <img src="images/dust.jpg" width="60%"  />
      </div>
    
      <div class="item">
      <img src="images/mopp.jpg" width="60%" />
      </div>
    </div>

    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
        

        
        </div>
        </>
    );
}
export default Dashboard;