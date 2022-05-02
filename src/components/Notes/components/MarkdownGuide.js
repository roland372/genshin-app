import React from 'react';

const MarkdownGuide = () => {
	return (
		<table className='table text-light'>
			<thead>
				<tr>
					<th>Type</th>
					<th>To get</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>*Italic*</td>
					<td>
						<em>Italic</em>
					</td>
				</tr>
				<tr>
					<td>**Bold**</td>
					<td>
						<strong>Bold</strong>
					</td>
				</tr>
				<tr>
					<td>
						New\
						<br />
						line
					</td>
					<td>
						New
						<br />
						line
					</td>
				</tr>
				<tr>
					<td># Heading 1</td>

					<td>
						<h1>Heading 1</h1>
					</td>
				</tr>
				<tr>
					<td>## Heading 2</td>

					<td>
						<h2>Heading 2</h2>
					</td>
				</tr>
				<tr>
					<td>[Link](https://www.google.com/)</td>
					<td>
						<a href='https://www.google.com/'>Link</a>
					</td>
				</tr>
				<tr>
					<td>![Image](http://url/a.png)</td>
					<td>
						<img
							src='images/Elements/Element_Hydro.png'
							width='36'
							height='36'
							alt='Markdown'
						/>
					</td>
				</tr>
				<tr>
					<td>&gt; Blockquote</td>
					<td>
						<blockquote style={{ borderLeft: '5px solid grey' }}>
							Blockquote
						</blockquote>
					</td>
				</tr>
				<tr>
					<td>
						<p>
							* List
							<br />* List
							<br /> &nbsp; &nbsp; * Nested List
							<br /> &nbsp; &nbsp; * Nested List
						</p>
					</td>
					<td>
						<ul>
							<li>List</li>
							<li>List</li>
							<ul>
								<li>Nested List</li>
								<li>Nested List</li>
							</ul>
						</ul>
					</td>
				</tr>
				<tr>
					<td>
						<p>
							1. One
							<br />
							2. Two
						</p>
					</td>
					<td>
						<ol>
							<li>One</li>
							<li>Two</li>
						</ol>
					</td>
				</tr>
				<tr>
					<td>
						Horizontal rule:
						<br />
						---
					</td>
					<td>
						Horizontal rule:
						<hr />
					</td>
				</tr>
				<tr>
					<td>`Inline code` with backticks</td>

					<td>
						<code>Inline code</code> with backticks
					</td>
				</tr>
				<tr>
					<td>
						```
						<br />
						# code block
						<br />
						print '3 backticks or'
						<br />
						print 'indent 4 spaces'
						<br />
						```
					</td>

					<td>
						<pre>
							# code block
							<br /> print '3 backticks or'
							<br /> print 'indent 4 spaces'
						</pre>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default MarkdownGuide;
