| Method | Path | Type | Data In | Data Out | Description |
|--------|------|------|---------|----------|-------------|
| GET    | /    | HTML | -       | index.html | Returns index.html to display page |
| GET    | /api/posts    | Data | -       | Posts | Returns json containing posts to display on the front page |
| POST   | /api/posts | Data | Post Object | - | Sends a new post to the DB |
| PUT    | /api/posts/:postId | Data | :postId, Updated post object | - | Changes a post object in the DB |
| GET    | /api/posts/:postId    | Data | :postId       | Post Object | Returns json containing a specific post and its associated comments |
| POST   | /api/posts/:postId/comments | Data | :postId, Comment object | - | Sends a comment to the DB associated with a given post |
| GET    | /api/users/:userId | Data | :userId | User Object | Returns the user's data to the page (Name, address, birthday, photo) |
| PUT    | /api/users/:userId | Data | :userId, Updated user info | - | Updates user information |
| POST   | /api/users/ | Data | User Object | Success | Posts new user to the db | 
