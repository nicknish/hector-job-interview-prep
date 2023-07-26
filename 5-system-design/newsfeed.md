Prompt: Design a newsfeed

## Requirements

- examples: facebook, twitter, reddit
- features:
  - browse posts from the user and their friends
  - (later) like and reacting to posts
- posts can contain videos
- mobile-friendly, responsive

## Architecture

- Container of posts that can be feeding the data to the post component
- Post component
- Server that we transfer the data from

```
<PostContainer>
  <Post />
  <Post />
</PostContainer>
```

- PostContainer responsible for fetching the data from the server.
- Individual Posts would just display the post.
- Server obviously would give us and get data about the posts.

## Data Model

Post: User, content, image, id, created_time User: ...
