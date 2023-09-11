import React, { useState, useEffect } from "react";
import { InputGroup, Form, Button, Card } from "react-bootstrap";

function Content() {
  const [keyword, setKeyword] = useState("google");
  const [resultArticle, setResultArticle] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyword.trim() !== "") {
      setLoading(true);
      fetch(`https://newsapi.org/v2/everything?apiKey=9bc8d9c7aa7044dd8f2f87ac86a0a7cd&q=${keyword}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Gagal mengambil data");
          }
          return response.json();
        })
        .then((data) => {
          setResultArticle(data.articles);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setLoading(false);
        });
    } else {
      setResultArticle([]);
    }
  }, [keyword]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="container mt-5 py-3">
      <form onSubmit="">
        <InputGroup className="my-3">
          <Form.Control placeholder="Cari artikel" onChange={handleInputChange} />
          <Button variant="dark" type="submit">
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

export default Content;
