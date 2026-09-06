import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import controller from "./assets/controller.png";

import apex from "./assets/apexlegend.jpg";
import bmw from "./assets/blackmythwukong.jpg";
import cs2 from "./assets/cs2.jpg";
import dota2 from "./assets/dota2.jpg";
import edring from "./assets/eldenring.png";
import gta5 from "./assets/gta5.jpg";
import l4d2 from "./assets/left4dead2.jpg";
import mh from "./assets/monsterhunter.jpg";
import pubg from "./assets/pubg.jpg";
import repo from "./assets/repo.png";
import skyrim from "./assets/skyrim.jpg";
import stardewvalley from "./assets/stardewvalley.jpg";
import terraria from "./assets/terraria.jpg";
import thewitcher3 from "./assets/TheWitcher3.jpg";

import "./App.css";

const game_data = [
  {
    img: apex,
    title: "Apex Legend",
    year: 2019,
    type: "FPS",
    rating: 7,
  },
  {
    img: bmw,
    title: "Black Myth Wukong",
    year: 2019,
    type: "Single Player",
    rating: 9,
  },
  { img: cs2, title: "CS 2", year: 2019, type: "FPS", rating: 7 },
  {
    img: gta5,
    title: "GTA 5",
    year: 2019,
    type: "Single Player",
    rating: 9,
  },
  { img: dota2, title: "Dota 2", year: 2019, type: "MOBA", rating: 8 },
  {
    img: edring,
    title: "Elden Ring",
    year: 2019,
    type: "Open World",
    rating: 10,
  },
  {
    img: stardewvalley,
    title: "Stardew Valley",
    year: 2019,
    type: "Indie",
    rating: 9,
  },
  { img: repo, title: "REPO", year: 2019, type: "Horror", rating: 7 },
];

function Displaycard({ imgsrc, title, year, type, rating }) {
  return (
    <Card className="card-frame" style={{ width: "18rem" }}>
      <Card.Img className="cardimage" variant="top" src={imgsrc} />
      <Card.Body>
        <Card.Title>{title} </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item>Release year : {year}</ListGroup.Item>
          <ListGroup.Item>Type : {type}</ListGroup.Item>
          <ListGroup.Item>Rating : {rating}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

function GameForm({ onAddGame }) {
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  const [rating, setRating] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !year || !type || !rating || !img) return;
    onAddGame({ img, title, year, type, rating: Number(rating) });
    setTitle("");
    setYear("");
    setType("");
    setRating("");
    setImg("");
  }
  return (
    <Form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
      <Row className="g-2">
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="title">
            <Form.Control
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="type">
            <Form.Select
              aria-label="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              placeholder="Type"
              required
            >
              <option>Select an Type</option>
              <option value="FPS">FPS</option>
              <option value="Indie">Indie</option>
              <option value="Open World">Open World</option>
              <option value="Single Player">Single Player</option>
              <option value="MOBA">MOBA</option>
              <option value="Horror">Horror</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="year">
            <Form.Control
              value={year}
              onChange={(e) => setYear(e.target.value)}
              placeholder="Release Year"
              type="number"
              min="1900"
              max="2100"
              step="1"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="rating">
            <Form.Control
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              placeholder="Rating"
              type="number"
              min="1"
              max="10"
              step="1"
              required
            />
          </FloatingLabel>
        </Col>
        <Col md>
          <FloatingLabel controlId="floatingInputGrid" label="img">
            <Form.Select
              aria-label="img"
              value={img}
              onChange={(e) => setImg(e.target.value)}
              placeholder="Image URL"
              required
            >
              <option>Select an image</option>
              <option value={gta5}>GTA 5</option>
              <option value={l4d2}>L4D2</option>
              <option value={mh}>Monster Hunter</option>
              <option value={pubg}>PUBG</option>
              <option value={repo}>REPO</option>
              <option value={skyrim}>skyrim</option>
              <option value={stardewvalley}>Stardew Valley</option>
              <option value={terraria}>terraria</option>
              <option value={thewitcher3}>The Witcher 3</option>
            </Form.Select>
          </FloatingLabel>
        </Col>
      </Row>
      <Button type="submit">Add Game</Button>
    </Form>
  );
}

function FilterButton({ games, setDisplayGames }) {
  function showFPS() {
    const filtered = games.filter((game) => game.type === "FPS");
    setDisplayGames(filtered);
  }
  function showAll() {
    setDisplayGames(games);
  }
  function showIndie() {
    const filtered = games.filter((game) => game.type === "Indie");
    setDisplayGames(filtered);
  }
  function showOpenWorld() {
    const filtered = games.filter((game) => game.type === "Open World");
    setDisplayGames(filtered);
  }
  function showSinglePlayer() {
    const filtered = games.filter((game) => game.type === "Single Player");
    setDisplayGames(filtered);
  }
  function showMOBA() {
    const filtered = games.filter((game) => game.type === "MOBA");
    setDisplayGames(filtered);
  }
  function showHorror() {
    const filtered = games.filter((game) => game.type === "Horror");
    setDisplayGames(filtered);
  }

  return (
    <>
      <Button onClick={showAll}>Show All Games</Button>
      <Button onClick={showFPS}>Show FPS Games</Button>
      <Button onClick={showIndie}>Show Indie Games</Button>
      <Button onClick={showOpenWorld}>Show Open World Games</Button>
      <Button onClick={showSinglePlayer}>Show Single Player Games</Button>
      <Button onClick={showMOBA}>Show MOBA Games</Button>
      <Button onClick={showHorror}>Show Horror Games</Button>
    </>
  );
}

function App() {
  // let games as deafult data
  const [games, setGames] = useState(game_data);
  const [displayGames, setDisplayGames] = useState(games);

  // if addgame push into games array
  function addGame(newGame) {
    const newList = [...games, newGame];
    setGames(newList);
    setDisplayGames(newList);
  }

  const gamenum = games.length;

  return (
    <>
      <main>
        <Container>
          <Row>
            <Col sm={8}>
              <Image src={controller} roundedCircle id="controller" />
              <h1>Welcome to My Game Collection</h1>
            </Col>
            <Col sm={4}>
              <div id="gamecollected">
                <p>Game Collected</p>
                <p>{gamenum}</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <GameForm onAddGame={addGame} />
            </Col>
          </Row>
          <Row>
            <Col>
              <FilterButton games={games} setDisplayGames={setDisplayGames} />
            </Col>
          </Row>

          <Row>
            {displayGames.map((game, i) => (
              <Col key={i} sm={4}>
                <Displaycard
                  imgsrc={game.img}
                  title={game.title}
                  year={game.year}
                  type={game.type}
                  rating={game.rating}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    </>
  );
}

export default App;
