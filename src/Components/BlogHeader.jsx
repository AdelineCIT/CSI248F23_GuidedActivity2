function BlogHeader(props) {
  return (
    <>
      <header>
        <h2>{props.title}</h2>
        <p>{props.tagline}</p>
      </header>
    </>
  );
}

export default BlogHeader;
