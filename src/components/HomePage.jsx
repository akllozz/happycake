import { Container } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
      <Container className="text-center">
        <h1 className="pt-5">
          Bienvenido a <span className="fw-bold happy">Happy Cake</span>
        </h1>
        <h6 className="fst-italic"> El lugar de los pasteles felices </h6>
        <img src="/public/img/pastel.png" height="300"></img>
      </Container>
    </>
  );
};
export default HomePage;