import React from "react";
import { Link } from "react-router-dom";

class LeftSideHome extends React.Component {
  render() {
    return (
      <div className="col-lg-6 p-lg-5 pt-5">
        <section>
          <h6 className="subtitle">View Specification</h6>
          <p>
            Description goes here Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <Link to="/specifications" className="btn wide-btn btn-dark">
            View Specifications
          </Link>
        </section>
        <section>
          <h6 className="subtitle">Map your specification to the T3 spine</h6>
          <p>
            Description goes here Lorem ipsum dolor sit amet consectetur
            adipiscing elit lobortis ridiculus suscipit, risus etiam per auctor
            cum viverra proin dapibus dis rhoncus felis, hendrerit at integer
            inceptos curabitur ad volutpat quam urna. Posuere quis nam vehicula
            nisi odio rhoncus molestie volutpat.
          </p>
        </section>
        <section>
          <ol className="usage-explanation">
            <li>Upload Your Specification</li>
            <li>Coarse Grain Mapping</li>
            <li>Fine Grain Mapping and Tunning</li>
            <li>Download Mapping</li>
          </ol>
        </section>
        <section>
          <Link to="/new-mapping" className="btn wide-btn btn-dark">
            Start Mapping
          </Link>
        </section>
      </div>
    );
  }
}
export default LeftSideHome;
