import React from "react";
import { Link } from "react-router-dom";
import MenuItem from "../menus/MenuItem";

function Main({ menus }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <nav
            id="sidebarMenu"
            className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
          >
            <div className="position-sticky pt-3 sidebar-sticky">
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="/dashboard/home"
                  >
                    <span
                      data-feather="home"
                      className="align-text-bottom"
                    ></span>
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/orders">
                    <span
                      data-feather="file"
                      className="align-text-bottom"
                    ></span>
                    Orders
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard/menus">
                    <span
                      data-feather="shopping-cart"
                      className="align-text-bottom"
                    ></span>
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard/users">
                    <span
                      data-feather="users"
                      className="align-text-bottom"
                    ></span>
                    Customers
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="bar-chart-2"
                      className="align-text-bottom"
                    ></span>
                    Reports
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="layers"
                      className="align-text-bottom"
                    ></span>
                    Integrations
                  </a>
                </li>
              </ul>

              <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
                <span>Saved reports</span>
                <a
                  className="link-secondary"
                  href="/"
                  aria-label="Add a new report"
                >
                  <span
                    data-feather="plus-circle"
                    className="align-text-bottom"
                  ></span>
                </a>
              </h6>
              <ul className="nav flex-column mb-2">
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Current month
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Last quarter
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Social engagement
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    <span
                      data-feather="file-text"
                      className="align-text-bottom"
                    ></span>
                    Year-end sale
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          <main className="col-md-9 mt-3 ms-sm-auto col-lg-10 px-md-4">
            <div className="row mb-3">
              {menus.map((menu) => (
                <MenuItem
                  key={menu.id}
                  id={menu.id}
                  imageUrl={menu.image}
                  title={menu.title}
                  description={menu.description}
                  {...menu}
                />
              ))}
            </div>
            <h2>Section title</h2>
            <div className="table-responsive">
              <table className="table table-striped table-sm">
                <thead>
                  <tr>
                    <th scope="col">/</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                    <th scope="col">Header</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,001</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,002</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,003</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,004</td>
                    <td>text</td>
                    <td>random</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,005</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>placeholder</td>
                  </tr>
                  <tr>
                    <td>1,006</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,007</td>
                    <td>placeholder</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>irrelevant</td>
                  </tr>
                  <tr>
                    <td>1,008</td>
                    <td>random</td>
                    <td>data</td>
                    <td>placeholder</td>
                    <td>text</td>
                  </tr>
                  <tr>
                    <td>1,009</td>
                    <td>placeholder</td>
                    <td>irrelevant</td>
                    <td>visual</td>
                    <td>layout</td>
                  </tr>
                  <tr>
                    <td>1,010</td>
                    <td>data</td>
                    <td>rich</td>
                    <td>dashboard</td>
                    <td>tabular</td>
                  </tr>
                  <tr>
                    <td>1,011</td>
                    <td>information</td>
                    <td>placeholder</td>
                    <td>illustrative</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,012</td>
                    <td>text</td>
                    <td>placeholder</td>
                    <td>layout</td>
                    <td>dashboard</td>
                  </tr>
                  <tr>
                    <td>1,013</td>
                    <td>dashboard</td>
                    <td>irrelevant</td>
                    <td>text</td>
                    <td>visual</td>
                  </tr>
                  <tr>
                    <td>1,014</td>
                    <td>dashboard</td>
                    <td>illustrative</td>
                    <td>rich</td>
                    <td>data</td>
                  </tr>
                  <tr>
                    <td>1,015</td>
                    <td>random</td>
                    <td>tabular</td>
                    <td>information</td>
                    <td>text</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Main;
