import React from "react";
import { InputGroup, Form, Button, Card } from "react-bootstrap";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      resultArticle: [],
      loading: false,
    };

    fetch(`https://newsapi.org/v2/everything?apiKey=9bc8d9c7aa7044dd8f2f87ac86a0a7cd&q=google`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ resultArticle: data.articles });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  fetchData = (keyword) => {
    this.setState({ loading: true });

    fetch(`https://newsapi.org/v2/everything?apiKey=9bc8d9c7aa7044dd8f2f87ac86a0a7cd&q=${keyword}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Gagal mengambil data");
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ resultArticle: data.articles, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false });
      });
  };

  handleInputChange = (e) => {
    this.setState({ keyword: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { keyword } = this.state;

    if (keyword.trim() !== "") {
      this.fetchData(keyword);
    } else {
      this.setState({ resultArticle: [] });
    }
  };

  render() {
    const { resultArticle, keyword, loading } = this.state;

    return (
      <div className="container mt-5 py-3">
        <form onSubmit={this.handleSubmit}>
          <InputGroup className="my-3">
            <Form.Control placeholder="Cari artikel" value={keyword} onChange={this.handleInputChange} />
            <Button variant="primary" type="submit">
              Cari
            </Button>
          </InputGroup>
        </form>
        {loading ? (
          <p>Lagi loading bro..</p>
        ) : (
          <div className="row">
            {resultArticle.map((item) => (
              <div className="col-md-4 mb-3" key={item.title}>
                <Card>
                  <Card.Img variant="top" src={item.urlToImage} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      Baca selengkapnya
                    </a>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
