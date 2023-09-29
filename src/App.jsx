import BlogHeader from "./Components/BlogHeader";
import BlogBody from "./Components/BlogBody";
import BlogFooter from "./Components/BlogFooter";
function App() {
  return (
    <>
      <h1>My First React App</h1>
      <BlogHeader
        title="My Simple Blog"
        tagline="Sharing my thoughts with the world"
      ></BlogHeader>
      <BlogBody
        title="First Post"
        author="John Doe"
        content="This is my first blog post. I'm excited to share my thoughts with you."
      />
      <BlogFooter footerText="Ⓒ 2023 by My Simple Blog. All rights reserved." />
    </>
  );
}

export default App;
