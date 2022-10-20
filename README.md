# nextjs-with-wordpress
This is a small project built with nextjs and using graphql API to fetch data from headless wordpress.

1. TECHNOLOGIES

	1.1 FRONTEND - Next.js
		
		LIBRARIES - Apollo Client

	1.2 BACKEND - Wordpress
	
		PLUGINS - WP GraphQL, WPGraphQL Offset Pagination  	
	 

2. DESCRIPTION

	WORDPRESS is one of the most popular Content Manangement System (CMS), it's free and open-source and also used by more than 40% of websites in the world. By default wordpress has his REST API, but in this project we used GRAPHQL so that we can configure the frontend as we want through the NEXT.js, one of the latest and coolest Javascript frameworks.

	In this project we just have the frontend part, so if you clone it, you must have a wordpress website so that you can use its content, but after installing the wordpress you must install both plugins mentioned in the technologie section, to transform it into a headless.
	
	For wordpress headless, it just need content.

	On the Next.js project, in the root, inside .env file you must also change the wordpress API, so it looks like: http(s)://yoursite.com/graphql, as an example we can see the .env file, after that we you are done, just need to fetch some data. 

	In the Next.js, you need to install Apollo Client, using npm install @apollo/client graphql command, create the file apollo-client.js in the main root and create the client, you can see the original file into, apollo-client.js.
	
	Then, is done you just fetch data as shown in index.js for all posts and [slug].js for dynamic routing for each post

