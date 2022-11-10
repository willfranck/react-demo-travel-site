function Article(articleProps) {
	return (
		<article 
      id="main-article"
      className="content-card flex"
      style={articleProps.style}
      >
			<h2>{articleProps.title}</h2>
			<p>{articleProps.description}</p>
		</article>
	)
}

export default Article
