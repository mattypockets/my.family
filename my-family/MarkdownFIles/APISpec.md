| Method | Path | Type | Data In | Data Out | Description |
|--------|------|------|---------|----------|-------------|
| GET    | /    | HTML | -       | index.html | Returns index.html to display page |
| GET    | /api/posts    | Data | -       | Posts | Returns json containing posts to display on the front page |
| GET    | /api/posts/:postId    | Data | :postId       | Post Object | Returns json containing a specific post and its associated |
| GET    | /api/users/:userId | Data | :userId | User Object | Returns the user's data to the page (Name, address, birthday, photo) |
| POST | /api/users/ | Data | User Object | Success | Posts new user to the db | 