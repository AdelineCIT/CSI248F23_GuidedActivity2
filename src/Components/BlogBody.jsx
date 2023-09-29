function BlogBody(props) {
  return (
    <>
      <article>
        <h2>{props.title}</h2>
        <p>By {props.author}</p>
        <div>{props.content}</div>
      </article>
    </>
  );
}

export default BlogBody;
