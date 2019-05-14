# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `music.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the of that query in the box below

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```sql
SELECT * FROM artists;
```

2. Write the SQL to select the artist with the name "Black Sabbath"

```sql
SELECT * FROM artists WHERE name LIKE "Black Sabbath";
```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql
CREATE TABLE fans (
	FanId INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT
);
```

4. Write the SQL to alter the fans table to have a artist_id column type integer

```sql
ALTER TABLE fans ADD COLUMN ArtistId INTEGER;
```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId

```sql
INSERT INTO fans (name, ArtistId) VALUES ("Ross", 42);
```

6. Write the SQL to return fans that are not fans of the black eyed peas.

```sql
SELECT * FROM fans WHERE ArtistId IS NOT 169;
```

7. Write the SQL to display an artists name next to their album title

```sql
SELECT name, title FROM artists
JOIN albums ON artists.ArtistId = albums.ArtistId;
```

8. Write the SQL to show all the fans with their respective band names

```sql
SELECT fans.name, artists.name  FROM fans
JOIN artists ON artists.ArtistId = fans.ArtistId;
```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

```
