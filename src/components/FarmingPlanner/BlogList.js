import React from 'react';

const BlogList = ({ blogs, title }) => {
	return (
		<div>
			<h2>{title}</h2>
			{blogs.map(blog => (
				<div key={blog.id}>
					<h2>{blog.title}</h2>
					<p>{blog.author}</p>
					{/* <button onClick={() => handleDelete(blog.id)}>delete blog</button> */}
				</div>
			))}
		</div>
	);
};

export default BlogList;
