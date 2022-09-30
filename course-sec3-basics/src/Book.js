const Book = ({ img, title, author }) => {
  const clickHandler = (e) => {
    console.log(e.target);
    alert("Hello World!");
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4 style={{ color: "#617d98", fontSize: "0.75rem" }}>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Event Example
      </button>
    </article>
  );
};

export default Book;
